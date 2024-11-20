// #region | Variables
let research_open: boolean = false;
let recipes_open: boolean = false;
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

