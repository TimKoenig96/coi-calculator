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

function runInit() {
}
// #endregion


// #region | Event listeners
const event_list = {
	production_calculator_btn: gotoProductionCalculator,
	power_calculator_btn: gotoPowerCalculator,
	set_research_btn: openResearch,
	set_recipes_btn: openRecipes,
	add_input_btn: openAddInput,
	add_output_btn: openAddOutput,
	share_production_btn: shareProduction,
	share_power_btn: sharePower
};

for (const [element, func] of Object.entries(event_list)) element.addEventListener("click", func);
// #endregion


// Initialize
runInit();
