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
// TODO: Attempt to apply all search parameters
function applyParsedSettings(parameters: ParsedSettings): boolean {
	return false;
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

// Load settings from search parameters
function loadSettingsFromSearchParams(): LoadedSettings | null {
	const params: URLSearchParams = new URLSearchParams(window.location.search);

	const research: string | null = params.get("research");
	const recipes: string | null = params.get("recipes");
	const inputs: string | null = params.get("inputs");
	const outputs: string | null = params.get("outputs");

	return { research, recipes, inputs, outputs };
}

// Request to load, parse and apply search parameters
function loadParseApplySearchParams(): boolean | null {

	// Load settings via search parameters
	const settings: LoadedSettings | null = loadSettingsFromSearchParams();

	// Attempt to parse settings
	const parameters: ParsedSettings | null = parseLoadedSettings(settings);

	// Invalid parameters
	if (!parameters) {

		// TODO: Ask user if they want to continue.
		const continue_init: boolean = false;

		// User wants to continue, indicate no success
		if (continue_init) return false;

		// User wants to abort, indicate error
		else return null;
	}

	// Parameters are valid, attempt applying them
	const success: boolean = applyParsedSettings(parameters);

	// Unsuccessful at applying parsed settings
	if (!success) {

		// TODO: Ask user if they want to continue.
		const continue_init: boolean = false;

		// User wants to continue, indicate no success
		if (continue_init) return false;

		// User wants to abort, indicate error
		else return null;
	}

	// Successfully applied valid parameters
	search_params_applied = true;
	return true;
}

// Initialize script
function init() {
	let apply_success: boolean | null = null;

	// If search parameters are present
	if (window.location.search) {

		// Attempt loading, parsing and applying via search parameters
		apply_success = loadParseApplySearchParams();

		// Error happened, stop requested
		if (apply_success === null) return;
	}

	// If search parameters weren't applied
	if (!search_params_applied) {

		// TODO: Attempt loading, parsing and applying via local storage
	}
}
// #endregion


// Initialize script
init();
