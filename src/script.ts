import { NotificationType, UserNotification } from "./components/UserNotification";
import { UserPrompt } from "./components/UserPrompt";

// #region | Variables
let search_params_applied: boolean = false; // Prevents saving edits to local storage
// #endregion


// #region | Interfaces
interface LoadedSettings {
	readonly research: string | null;
	readonly recipes: string | null;
	readonly inputs: string | null;
	readonly outputs: string | null;
}

interface ParsedSettings {
	readonly research: number[];
	readonly recipes: number[];
	readonly inputs: number[];
	readonly outputs: number[];
}
// #endregion


// #region | Functions
// TODO: Attempt to apply all parsed settings
function applyParsedSettings(settings: ParsedSettings | null): boolean {

	// No parameters provided, return no success
	if (settings === null) return false;

	// FIXME: Just returning successful if settings are provided at all for now.
	return true;
}

// Attempt to parse and return only the required settings
function parseLoadedSettings(settings: LoadedSettings | null): ParsedSettings | null {

	// Settings are null, abort
	if (settings === null) return null;

	// Attempt to get and parse all necessary entries
	try {

		// Parse all necessary keys
		const research: number[] = JSON.parse(settings.research ?? "[]");
		const recipes: number[] = JSON.parse(settings.recipes ?? "[]");
		const inputs: number[] = JSON.parse(settings.inputs ?? "[]");
		const outputs: number[] = JSON.parse(settings.outputs ?? "[]");

		// Check all parsed parameters for validity
		[research, recipes, inputs, outputs].forEach((array) => {

			// Check if array
			if (!Array.isArray(array)) throw "One of the parameters isn't an array.";

			// Iterate numbers array
			array.forEach((entry, index, arr) => {

				// If not number
				if (typeof entry != "number") {

					// Try converting it
					arr[index] = Number(entry);

					// If it's NaN, throw error
					if (isNaN(arr[index])) throw "One of the arrays contains something other than a number.";
				}
			});
		});

		// Checks passed, return all parameters
		return { research, recipes, inputs, outputs };
	} catch(error) {

		// JSON decode syntax error
		if (error instanceof SyntaxError)
			console.error("Malformed JSON, couldn't decode it.");

		// Other errors
		else
			console.error(error);

		// Return null
		return null;
	}
}

// Load setting strings from local storage
function loadSettingsFromLocalStorage(): LoadedSettings | null {
	const research: string | null = window.localStorage.getItem("research");
	const recipes: string | null = window.localStorage.getItem("recipes");
	const inputs: string | null = window.localStorage.getItem("inputs");
	const outputs: string | null = window.localStorage.getItem("outputs");

	return { research, recipes, inputs, outputs };
}

// Load settings from search parameters
function loadSettingsFromSearchParams(): LoadedSettings | null {
	const params: URLSearchParams = new URLSearchParams(window.location.search);

	const research: string | null = params.get("research");
	const recipes: string | null = params.get("recipes");
	const inputs: string | null = params.get("inputs");
	const outputs: string | null = params.get("outputs");

	return { research, recipes, inputs, outputs };
}

// Attempt to load, parse and apply settings from local storage
async function loadParseApplyLocalStorage(): Promise<boolean | null> {

	// Load settings via local storage
	const settings: LoadedSettings | null = loadSettingsFromLocalStorage();

	// Attempt to parse settings
	const parsed_settings: ParsedSettings | null = parseLoadedSettings(settings);

	// Attempt to apply parsed settings
	const success: boolean = applyParsedSettings(parsed_settings);

	// Unsuccessful
	if (!success) {

		// Ask user if they want to reset
		const reset: boolean = await new UserPrompt(
			"Invalid parameters in Local Storage",
			`The data in your browsers local storage seems to be invalid.<br><br>

			Do you want to clear it? This will reset all of your selected researches and recipes.`,
			NotificationType.ERROR,
			[
				{ label: "Yes, reset", retval: true },
				{ label: "No, abort", retval: false }
			]
		).prompt();

		// User wants to reset local storage
		if (reset) {

			// Clear local storage
			window.localStorage.clear();

			// Reload window
			window.location.reload();

			// Don't think I have to return at this point
			return false;
		}

		// User wants to abort and keep local storage
		else {

			// Show abort success
			new UserNotification(
				"Invalid parameters in Local Storage",
				`Okay, loading has been aborted.<br><br>

				If this keeps happening, please do not hesitate to <a href="" target="_blank">create
				an issue on GitHub</a>.<br><br>

				Click <a href="#" onclick="navigator.clipboard.writeText(JSON.stringify(window.localStorage));">
				here</a> to copy the local storage and provide it when creating an issue.`,
				NotificationType.DEFAULT,
				0,
				false
			);

			// Return null indicating aborting the init process
			return null;
		}
	}

	// Successfully applied valid parameters
	search_params_applied = true;
	return true;
}

// Attempt to load, parse and apply settings from search parameters
async function loadParseApplySearchParams(): Promise<boolean | null> {

	// Load settings via search parameters
	const settings: LoadedSettings | null = loadSettingsFromSearchParams();

	// Attempt to parse settings
	const parsed_settings: ParsedSettings | null = parseLoadedSettings(settings);

	// Attempt to apply parsed settings
	const success: boolean = applyParsedSettings(parsed_settings);

	// Unsuccessful
	if (!success) {

		// Ask user if they want to continue
		const continue_init: boolean = await new UserPrompt(
			"Invalid Calculation in URL",
			`The calculation specified in the URL after the question mark seems to
			be invalid. You can continue without it, losing that calculation, or try again.`,
			NotificationType.ERROR,
			[
				{ label: "Continue", retval: true },
				{ label: "Try again", retval: false }
			]
		).prompt();

		// User wants to continue
		if (continue_init) {

			// Clear all search parameters and push the new state to history
			const url = new URL(window.location.href);
			url.search = "";
			history.pushState(null, "", url.toString());

			// Indicate no success
			return false;
		}

		// User wants to abort
		else {

			// Show abort success
			new UserNotification(
				"Invalid Calculation in URL",
				`Okay, loading has been aborted. You can edit the URL and try again.<br><br>

				If this keeps happening, please do not hesitate to <a href="" target="_blank">create
				an issue on GitHub</a>. Provide me the link and I'll see what's going on.`,
				NotificationType.DEFAULT,
				0,
				false
			);

			// Return null indicating aborting the init process
			return null;
		}
	}

	// Successfully applied valid parameters
	search_params_applied = true;
	return true;
}

// Initialize script
async function init() {
	let apply_success: boolean | null = null;

	// If search parameters are present
	if (window.location.search) {

		// Attempt to load, parse and apply settings from search parameters
		apply_success = await loadParseApplySearchParams();

		// Error happened, stop requested
		if (apply_success === null) return;
	}

	// If search parameters weren't applied
	if (!search_params_applied) {

		// Attempt to load, parse and apply settings from local storage
		apply_success = await loadParseApplyLocalStorage();
	}

	// Nothing was successful
	if (apply_success !== true) return;

	// TODO: Think about what needs to happen next
}
// #endregion


// Initialize script
init();
