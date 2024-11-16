// #region | Elements
const production_calculator_btn = document.getElementById("production_calculator_btn");
const power_calculator_btn = document.getElementById("power_calculator_btn");
const set_research_btn = document.getElementById("set_research_btn");
const set_recipes_btn = document.getElementById("set_recipes_btn");
const add_input_btn = document.getElementById("add_input_btn");
const add_output_btn = document.getElementById("add_output_btn");
const share_production_btn = document.getElementById("share_production_btn");
const share_power_btn = document.getElementById("share_power_btn");
// #endregion


// #region | Functions
function gotoProductionCalculator() {
	// TODO
}

function gotoPowerCalculator() {
	// TODO
}

function openResearch() {
	// TODO
}

function openRecipes() {
	// TODO
}

function openAddInput() {
	// TODO
}

function openAddOutput() {
	// TODO
}

function shareProduction() {
	// TODO
}

function sharePower() {
	// TODO
}

function attemptApplySearchParameters() {

	// Get search parameters
	const search_params = new URLSearchParams(window.location.search);

	// No JSON key, end execution
	if (!search_params.has("json")) return false;

	// Try parsing the JSON string
	let parsed_json;
	try {
		parsed_json = JSON.parse(search_params.get("json"));
	} catch (error) {
		showWarning("Warning: The JSON in the link couldn't be processed. Does it have a typo?");
		return false;
	}

	// TODO:
	// Apply all research, recipes, inputs, outputs or power related settings
	// If any of them are unknown or out of bounds, abort and return false
	// If all goes well, return true
}

function runInit() {

	// Attempt to apply the search parameters
	const success = attemptApplySearchParameters();
}
// #endregion


// #region | Event listeners
const event_list = new Set([
	[production_calculator_btn, gotoProductionCalculator],
	[power_calculator_btn, gotoPowerCalculator],
	[set_research_btn, openResearch],
	[set_recipes_btn, openRecipes],
	[add_production_input_btn, openAddInput],
	[add_production_output_btn, openAddOutput],
	[share_production_btn, shareProduction],
	[share_power_btn, sharePower]
]);

event_list.forEach(([element, func]) => element.addEventListener("click", func));
// #endregion


// Initialize
runInit();
