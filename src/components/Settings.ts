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
	private loaded_via_params: boolean = false;

	// Constructor
	constructor() {

		// Request to load settings (try search parameters first, then local storage)
		const raw_settings: RawSettings | null = this.getFromSearchParams() ?? this.getFromLocalStorage();

		// No settings found, stop here
		if (!raw_settings) return;

		// Try parsing raw settings
		let parsed_settings: ParsedSettings | null = null;
		try {
			parsed_settings = this.parseAndValidate(raw_settings);
		} catch (error) {
			let err_heading: string = "Error";
			let err_message: string = "Unknown error";
			let err_details: string = "Unknown error";

			// Syntax (JSON) error
			if (error instanceof SyntaxError) {
				err_heading = "Error: JSON Syntax";
				err_message = `
					The JSON strings are malformed and could not be parsed.<br>
					Would you like to clear your ${this.loaded_via_params ? "search parameters" : "local storage"}?<br><br>
					This action is irreversible and will result in your selected researches, recipes and current calculation being deleted.
				`;
				err_details = `${error.message}: ${raw_settings.researches} | ${raw_settings.recipes} | ${raw_settings.inputs} | ${raw_settings.outputs}`;
			}

			// Misc error
			else if (error instanceof Error) {
				err_message = error.message;
				err_details = error.message;
			}

			// Ask to fix issue by clearing search params or local storage
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
						func: (
							this.loaded_via_params ?
							Settings.clearSearchParameters :
							Settings.clearLocalStorage
						)
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
		}

		// Settings not successfully parsed, stop here
		if (!parsed_settings) return;

		// Set settings to parsed settings
		this.settings = parsed_settings;

		// TODO: Apply settings to researches, recipes and in- and outputs
	}

	// Clear search parameters
	private static clearSearchParameters(): void {
		const url: URL = new URL(window.location.href);
		url.search = "";
		history.pushState(null, "", url.toString());
		window.location.reload();
	}

	// Clear local storage
	private static clearLocalStorage(): void {
		window.localStorage.clear();
		window.location.reload();
	}

	// Parse and validate inputs
	private parseAndValidate(raw_settings: RawSettings): ParsedSettings {

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
	}

	// Get raw settings from search parameters
	private getFromSearchParams(): RawSettings | null {

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

		// Set loaded via parameters to true
		this.loaded_via_params = true;

		// Return the raw settings
		return raw_settings;
	}

	// Get raw settings from local storage
	private getFromLocalStorage(): RawSettings | null {

		// Unsupported or nothing stored
		if (!window.localStorage) return null;
		if (window.localStorage.length === 0) return null;

		// Extract raw settings strings
		const raw_settings: RawSettings = {
			researches: window.localStorage.getItem("researches"),
			recipes: window.localStorage.getItem("recipes"),
			inputs: window.localStorage.getItem("inputs"),
			outputs: window.localStorage.getItem("outputs")
		};

		return raw_settings;
	}
}
