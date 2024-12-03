import { RecipeID, recipes } from "./components/Recipe";
import { researches, ResearchID } from "./components/Research";
import { NotificationType, UserNotification } from "./components/UserNotification";
import { UserPrompt } from "./components/UserPrompt";

// #region | Variables
let settings_applied_via_url: boolean = false; // Prevents saving edits to local storage
let researches_window_open: boolean = false;
let recipes_window_open: boolean = false;
// #endregion


// #region | HTML Elements
const set_researches_btn = document.getElementById("set_researches_btn") as HTMLDivElement;
const set_recipes_btn = document.getElementById("set_recipes_btn") as HTMLDivElement;

const researches_window = document.getElementById("researches_window") as HTMLDivElement;
const recipes_window = document.getElementById("recipes_window") as HTMLDivElement;
// #endregion


// #region | Enums
enum ErrorMessages {

	// Headers
	MALFORMED_JSON_HEADER = "Malformed JSON",
	INVALID_DATA_HEADER = "Invalid Data",

	// Messages
	MALFORMED_JSON_MESSAGE_URL = "The JSON provided by the search parameters in the URL seems to be malformed.",
	MALFORMED_JSON_MESSAGE_LOCALSTORAGE = "The JSON loaded from your browsers local storage seems to be malformed.",
	ERROR_FIX_MESSAGE_URL = "<br><br>Do you want to continue anyways, loading your usual settings, losing the current calculation in the process?",
	ERROR_FIX_MESSAGE_LOCALSTORAGE = "<br><br>Do you want clear it and try again? This means losing your selected research and recipes.",
}
// #endregion


// #region | Interfaces
interface LoadedSettings {
	readonly research: string | null;
	readonly recipes: string | null;
	readonly inputs: string | null;
	readonly outputs: string | null;
}

interface ParsedSettings {
	readonly research: ResearchID[];
	readonly recipes: RecipeID[];
	readonly inputs: number[];
	readonly outputs: number[];
}
// #endregion


// #region | Functions
// Toggle the researches window
function toggleResearchesWindow(): void {

	// Toggle research related classes
	researches_window.classList.toggle("hidden");
	set_researches_btn.classList.toggle("active");
	
	// If recipes window was open before, close it
	if (recipes_window_open) toggleRecipesWindow();

	// Toggle researches window variable
	researches_window_open = !researches_window_open;
}

// Toggle the recipes window
function toggleRecipesWindow(): void {

	// Toggle recipe related classes
	recipes_window.classList.toggle("hidden");
	set_recipes_btn.classList.toggle("active");
	
	// If researches window was open before, close it
	if (researches_window_open) toggleResearchesWindow();

	// Toggle recipes window variable
	recipes_window_open = !recipes_window_open;
}

// Attempt to apply all parsed settings
function applyParsedSettings(settings: ParsedSettings): void {

	// Apply all researches
	settings.research.forEach((research_id) => {

		// Unknown research ID
		if (!(research_id in ResearchID)) {
			new UserNotification(
				"Unknown Research ID",
				`The research ID ${research_id} is unknown and could not be enabled.`,
				NotificationType.WARNING
			);
		}

		// Unlock the research
		else researches[research_id].toggleResearch();
	});

	settings.recipes.forEach((recipe_id) => {

		// Unknown recipe ID
		if (!(recipe_id in RecipeID)) {
			new UserNotification(
				"Unknown Recipe ID",
				`The recipe ID ${recipe_id} is unknown and could not be disabled.`,
				NotificationType.WARNING
			);
		}

		// Set recipe inactive
		else recipes[recipe_id].active = false;
	});
}

// Attempt to parse loaded settings
function parseLoadedSettings(settings: LoadedSettings): ParsedSettings {

	// Attempt to get and parse all necessary entries
	try {

		// Parse all necessary keys
		const research: ResearchID[] = JSON.parse(settings.research ?? "[]");
		const recipes: RecipeID[] = JSON.parse(settings.recipes ?? "[]");
		const inputs: number[] = JSON.parse(settings.inputs ?? "[]");
		const outputs: number[] = JSON.parse(settings.outputs ?? "[]");

		// Check all parsed parameters for validity
		[research, recipes, inputs, outputs].forEach((array) => {

			// Check if array
			if (!Array.isArray(array)) throw new Error("One of the parameters isn't an array.");

			// Iterate numbers array
			array.forEach((entry, index, arr) => {

				// If not number
				if (typeof entry != "number") {

					// Try converting it
					arr[index] = Number(entry);

					// If it's NaN, throw error
					if (isNaN(arr[index])) throw new Error("One of the arrays contains something other than a number.");
				}
			});
		});

		// Checks passed, return all parameters
		return { research, recipes, inputs, outputs };
	} catch(error) {

		// Rethrow error
		throw error;
	}
}

// Load setting strings from local storage
function loadSettingsFromLocalStorage(): LoadedSettings {
	const research: string | null = window.localStorage.getItem("research");
	const recipes: string | null = window.localStorage.getItem("recipes");
	const inputs: string | null = window.localStorage.getItem("inputs");
	const outputs: string | null = window.localStorage.getItem("outputs");

	return { research, recipes, inputs, outputs };
}

// Load settings from search parameters
function loadSettingsFromSearchParams(): LoadedSettings {
	const params: URLSearchParams = new URLSearchParams(window.location.search);

	const research: string | null = params.get("research");
	const recipes: string | null = params.get("recipes");
	const inputs: string | null = params.get("inputs");
	const outputs: string | null = params.get("outputs");

	return { research, recipes, inputs, outputs };
}

// Load, parse and apply settings
async function loadParseAndApplySettings(via_url: boolean): Promise<boolean> {
	let settings: LoadedSettings;
	let parsed_settings: ParsedSettings;

	// Attempt loading settings from search parameters
	if (via_url) settings = loadSettingsFromSearchParams();

	// Attempt loading settings from local storage
	else settings = loadSettingsFromLocalStorage();

	// Try parsing settings, return false on error
	try {
		parsed_settings = parseLoadedSettings(settings);
	} catch (error) {
		let error_header: string = "Unknown Error";
		let error_message: string = "";

		// Malformed JSON
		if (error instanceof SyntaxError) {
			error_header = ErrorMessages.MALFORMED_JSON_HEADER;
			error_message = (via_url ? ErrorMessages.MALFORMED_JSON_MESSAGE_URL + ErrorMessages.ERROR_FIX_MESSAGE_URL : ErrorMessages.MALFORMED_JSON_MESSAGE_LOCALSTORAGE + ErrorMessages.ERROR_FIX_MESSAGE_LOCALSTORAGE);
		}

		// Other error
		else if (error instanceof Error) {
			error_header = ErrorMessages.INVALID_DATA_HEADER;
			error_message = error.message + (via_url ? ErrorMessages.ERROR_FIX_MESSAGE_URL : ErrorMessages.ERROR_FIX_MESSAGE_LOCALSTORAGE);
		}

		// Ask user if they want to continue
		const prompt_answer: boolean = await new UserPrompt(
			error_header,
			error_message,
			NotificationType.ERROR,
			[
				{ label: "Yes", retval: true },
				{ label: "No", retval: false }
			]
		).prompt();

		// User does not want to continue, abort
		if (!prompt_answer) {
			new UserNotification("Successfully Aborted", "Initialization was successfully aborted.", undefined, undefined, false);
			throw "";
		}

		// User wants to continue, attempt fixing the issue
		else {

			// If loaded via search parameters, remove them
			if (via_url) {
				const url: URL = new URL(window.location.href);
				url.search = "";
				history.pushState(null, "", url.toString());
			}

			// Clear local storage and reload
			else {
				window.localStorage.clear();
				window.location.reload();
			}
		}

		// Return unsuccessful
		return false;
	}

	// Apply settings
	applyParsedSettings(parsed_settings);

	// Return successfully parsed and applied settings
	return true;
}

// Initialize script
async function init() {

	// Search parameters found
	if (window.location.search) {

		// Attempt to load, parse and apply settings via search parameters
		try {
			settings_applied_via_url = await loadParseAndApplySettings(true);
		} catch (_) {
			return;
		}
	}

	// If settings weren't applied via search parameters, do so via local storage
	if (!settings_applied_via_url) {
		try {
			await loadParseAndApplySettings(false);
		} catch(_) {
			return;
		}
	}

	// Add event listeners to UI elements
	const event_config: [HTMLElement, string, EventListener][] = [
		[set_researches_btn, "click", toggleResearchesWindow],
		[set_recipes_btn, "click", toggleRecipesWindow]
	];

	event_config.forEach(([element, event_type, handler]) => {
		element.addEventListener(event_type, handler);
	});

	// TEMP: Goto research window
	set_researches_btn.click();
}
// #endregion


// Initialize script
init();
