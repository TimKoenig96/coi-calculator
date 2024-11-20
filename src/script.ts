// #region | Imports
import { UserNotification, NotificationTypes } from "./components/UserNotification";
// #endregion


// #region | Variables
let research_open: boolean = false;
let recipes_open: boolean = false;
let parameters_loaded: boolean = false;
// #endregion


// #region | Elements
// Sidebar elements
const production_calculator_btn: HTMLElement | null = document.getElementById("production_calculator_btn");
const power_calculator_btn: HTMLElement | null = document.getElementById("power_calculator_btn");

const set_research_btn: HTMLElement | null = document.getElementById("set_research_btn");
const set_recipes_btn: HTMLElement | null = document.getElementById("set_recipes_btn");

const production_inputs_container: HTMLElement | null = document.getElementById("production_inputs_container");
const production_input_list_container: HTMLElement | null = document.getElementById("production_input_list_container");
const add_production_input_btn: HTMLElement | null = document.getElementById("add_production_input_btn");

const production_outputs_container: HTMLElement | null = document.getElementById("production_outputs_container");
const production_output_list_container: HTMLElement | null = document.getElementById("production_output_list_container");
const add_production_output_btn: HTMLElement | null = document.getElementById("add_production_output_btn");

const power_output_container: HTMLElement | null = document.getElementById("power_output_container");
const power_output_field = document.getElementById("power_output_field") as HTMLInputElement | null;

const share_production_btn: HTMLElement | null = document.getElementById("share_production_btn");
const share_power_btn: HTMLElement | null = document.getElementById("share_power_btn");

// Windows
const research_window: HTMLElement | null = document.getElementById("research_window");
const research_searchbox = document.getElementById("research_searchbox") as HTMLInputElement | null;
const research_list: HTMLElement | null = document.getElementById("research_list");

const recipes_window: HTMLElement | null = document.getElementById("recipes_window");
const recipes_searchbox = document.getElementById("recipes_searchbox") as HTMLInputElement | null;
const recipes_list: HTMLElement | null = document.getElementById("recipes_list");

// Canvases
const production_calculator_canvas: HTMLElement | null = document.getElementById("production_calculator_canvas");
const power_calculator_canvas: HTMLElement | null = document.getElementById("power_calculator_canvas");
// #endregion


// #region | Functions
// Switch to the production calculator
function gotoProductionCalculator(): void {

	// Switch active classes for buttons
	production_calculator_btn?.classList.add("active");
	power_calculator_btn?.classList.remove("active");

	// Show production in- and outputs
	production_inputs_container?.classList.remove("hidden");
	production_outputs_container?.classList.remove("hidden");

	// Hide power output
	power_output_container?.classList.add("hidden");

	// Share buttons
	share_production_btn?.classList.remove("hidden");
	share_power_btn?.classList.add("hidden");
}

// Switch to the power calculator
function gotoPowerCalculator(): void {

	// Switch active classes for buttons
	production_calculator_btn?.classList.remove("active");
	power_calculator_btn?.classList.add("active");

	// Hide production in- and outputs
	production_inputs_container?.classList.add("hidden");
	production_outputs_container?.classList.add("hidden");

	// Show power output
	power_output_container?.classList.remove("hidden");

	// Share buttons
	share_production_btn?.classList.add("hidden");
	share_power_btn?.classList.remove("hidden");
}

// Toggle the research window
function toggleResearchWindow(): void {

	// Set button active class
	set_research_btn?.classList.toggle("active");

	// Close recipes modal if it is open
	if (recipes_open) toggleRecipesWindow();

	// Toggle visibility
	research_window?.classList.toggle("hidden");

	// Toggle current status
	research_open = !research_open;
}

// Toggle the recipes window
function toggleRecipesWindow(): void {

	// Set button active class
	set_recipes_btn?.classList.toggle("active");

	// Close research modal if it is open
	if (research_open) toggleResearchWindow();

	// Toggle visibility
	recipes_window?.classList.toggle("hidden");

	// Toggle current status
	recipes_open = !recipes_open;
}

// TODO
function toggleAddInputWindow(): void {
	new UserNotification("Not implemented", "This is not yet implemented, sorry.", NotificationTypes.DEFAULT, 10000);
}

// TODO
function toggleAddOutputWindow(): void {
	new UserNotification("Not implemented", "This is not yet implemented, sorry.", NotificationTypes.DEFAULT, 10000);
}

// TODO
function shareProductionCalculation(): void {
	new UserNotification("Not implemented", "This is not yet implemented, sorry.", NotificationTypes.DEFAULT, 10000);
}

// TODO
function sharePowerCalculation(): void {
	new UserNotification("Not implemented", "This is not yet implemented, sorry.", NotificationTypes.DEFAULT, 10000);
}

// TODO
function searchResearchTree(): void {}

// TODO
function searchRecipes(): void {}

// Attempt to load and apply the search parameters
function applySearchParameters(): boolean {
	let research: Record<string, unknown>;
	let recipes: Record<string, unknown>;
	let input: Record<string, unknown>;
	let output: Record<string, unknown>;

	// Get current parameters
	const search_parameters: URLSearchParams = new URLSearchParams(window.location.search);

	// Get if power calculator is target
	const power_calculator: boolean = (search_parameters.get("pwr") === "1");

	// Try parsing research, recipes, input and output
	try {
		research = JSON.parse(search_parameters.get("research") ?? "{}");
		recipes = JSON.parse(search_parameters.get("recipes") ?? "{}");
		input = JSON.parse(search_parameters.get("input") ?? "{}");
		output = JSON.parse(search_parameters.get("output") ?? "{}");
	} catch (error) {

		// Notify user
		new UserNotification(
			"Invalid JSON",
			`
			The JSON parameters (after the question mark in the URL) seem to be malformed.<br>
			If you've got some time, could you maybe <a target=\"_blank\" href=\"https://github.com/TimKoenig96/coi-calculator/issues/new\">create an issue</a>?<br>
			To fix this, remove everything after the question mark and recreate the calculation.
			`,
			NotificationTypes.ERROR
		);

		// Indicate no success
		return false;
	}

	// TODO: Apply selected research and recipes to classes
	// If it fails, show error and return false
	// If it succeeds, continue

	// If the target is the power calculator
	if (power_calculator) {

		// Switch to the power calculator
		gotoPowerCalculator();

		// Set the power output field value
		if (power_output_field) power_output_field.value = String(output.power ?? "0");

		// TODO: Trigger the power calculation
	}

	// Target is the regular calculator
	else {

		// TODO:
		// - Add all in- and outputs to UI and backend
		// - Trigger the production calculation
	}

	// Successfully loaded and applied from search parameters
	return true;
}
// #endregion


// #region | Event listeners
const event_list: [HTMLElement | null, string, EventListenerOrEventListenerObject][] = [
	[production_calculator_btn, "click", gotoProductionCalculator],
	[power_calculator_btn, "click", gotoPowerCalculator],
	[set_research_btn, "click", toggleResearchWindow],
	[set_recipes_btn, "click", toggleRecipesWindow],
	[add_production_input_btn, "click", toggleAddInputWindow],
	[add_production_output_btn, "click", toggleAddOutputWindow],
	[share_production_btn, "click", shareProductionCalculation],
	[share_power_btn, "click", sharePowerCalculation],
	[research_searchbox, "input", searchResearchTree],
	[recipes_searchbox, "input", searchRecipes]
];

event_list.forEach(([element, event_name, target_function]) => {
	if (element)
		element.addEventListener(event_name, target_function);
	else
		new UserNotification("Missing element", "An element on the page is missing.<br>If you're using any kind of blockers, try disabling them.<br>If this persists, please <a href=\"\">create an issue here.</a>", NotificationTypes.ERROR);
});
// #endregion


// Initialize
(function() {

	// When search parameters are present, attempt applying them
	if (window.location.search) parameters_loaded = applySearchParameters();
})();
