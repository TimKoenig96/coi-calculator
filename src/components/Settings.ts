import { NotificationType } from "./UserNotification";
import { UserPrompt } from "./UserPrompt";

interface RawSettings {
	researches: string | null;
	recipes: string | null;
	inputs: string | null;
	outputs: string | null;
}

interface ParsedSettings {
	researches: number[];
	recipes: number[];
	inputs: number[];
	outputs: number[];
}

export class Settings {
	private settings: ParsedSettings = { researches: [], recipes: [], inputs: [], outputs: [] };

	// Constructor
	constructor() {

		// Request to load settings
		const raw_settings: RawSettings | null = this.getRawSettings();

		// No settings found, stop here
		if (!raw_settings) return;

		// Parse raw settings
		const parsed_settings: ParsedSettings | null = this.parseAndValidate(raw_settings);

		// Settings not successfully parsed, stop here
		if (!parsed_settings) return;

		// Set settings to parsed settings
		this.settings = parsed_settings;

		// Apply researches, recipes, in- and outputs
		this.applySettings();
	}

	// Apply the settings
	private applySettings(): void {

		// TODO:
		// - Iterate researches and activate the selected ones
		// - Iterate recipes and deselect the selected ones
		// - Iterate inputs and add them
		// - Iterate outputs and add them
		// - If outputs are specified, run calculation
	}

	// Clear search parameters
	private static clearSearchParameters(): void {
		const url: URL = new URL(window.location.href);
		url.search = "";
		history.pushState(null, "", url.toString());
		window.location.reload();
	}

	// Parse and validate inputs
	private parseAndValidate(raw_settings: RawSettings): ParsedSettings | null {
		try {

			// JSON parse all raw settings strings
			const parsed: ParsedSettings = {
				researches: JSON.parse(raw_settings.researches ?? "[]"),
				recipes: JSON.parse(raw_settings.recipes ?? "[]"),
				inputs: JSON.parse(raw_settings.inputs ?? "[]"),
				outputs: JSON.parse(raw_settings.outputs ?? "[]")
			};

			// Check all parsed data
			for (const array of Object.values(parsed)) {

				// Check if array
				if (!Array.isArray(array))
					throw new Error("One of the parameters isn't an array.");

				// Check if all array entries are numbers
				// TODO: Eventually check if valid enum entry!
				for (const entry of array)
					if (typeof entry !== "number")
						throw new Error("One of the values isn't a number.");
			}

			// Return data
			return parsed;
		} catch (error) {
			let err_heading: string = "Error";
			let err_message: string = "Unknown error";
			let err_details: string = "Unknown error";

			// Syntax (JSON) error
			if (error instanceof SyntaxError) {
				err_heading = "Error: JSON Syntax";
				err_message = `
					The JSON strings are malformed and could not be parsed.<br>
					Would you like to clear your search parameters?<br><br>

					This action is irreversible and will result in your selected researches, recipes and current calculation being deleted.
				`;
				err_details = `${error.message}: ${raw_settings.researches} | ${raw_settings.recipes} | ${raw_settings.inputs} | ${raw_settings.outputs}`;
			}

			// Misc error
			else if (error instanceof Error) {
				err_message = error.message;
				err_details = error.message;
			}

			// Ask to fix issue by clearing search params
			UserPrompt.prompt(
				err_heading,
				err_message,
				NotificationType.ERROR,
				[
					{ // Clear
						label: "Clear",
						closes: true,
						resolves: true,
						retval: true,
						func: Settings.clearSearchParameters
					},
					{ // Abort
						label: "Abort",
						closes: true,
						resolves: true,
						retval: false
					},
					{ // Copy error message
						label: "Copy all details",
						closes: false,
						resolves: false,
						func: () => {
							navigator.clipboard.writeText(err_details)
						}
					}
				]
			);

			// Return no success
			return null;
		}
	}

	// Get raw settings from search parameters
	private getRawSettings(): RawSettings | null {

		// No search parameters found
		if (!window.location.search) return null;

		// Load parameters
		const params: URLSearchParams = new URLSearchParams(window.location.search);

		// Extract raw settings strings
		const raw_settings: RawSettings = {
			researches: params.get("researches"),
			recipes: params.get("recipes"),
			inputs: params.get("inputs"),
			outputs: params.get("outputs")
		};

		// Return the raw settings
		return raw_settings;
	}
}
