// #region | Imports
import { UserNotification } from "./user_notification.js";
// #endregion


// #region | Variables
let worker;
let research_open = false;
let recipes_open = false;
// #endregion


// #region | Elements
// Sidebar elements
const production_calculator_btn = document.getElementById("production_calculator_btn");
const power_calculator_btn = document.getElementById("power_calculator_btn");

const set_research_btn = document.getElementById("set_research_btn");
const set_recipes_btn = document.getElementById("set_recipes_btn");

const production_inputs_container = document.getElementById("production_inputs_container");
const production_input_list_container = document.getElementById("production_input_list_container");
const add_production_input_btn = document.getElementById("add_production_input_btn");

const production_outputs_container = document.getElementById("production_outputs_container");
const production_output_list_container = document.getElementById("production_output_list_container");
const add_production_output_btn = document.getElementById("add_production_output_btn");

const power_output_container = document.getElementById("power_output_container");
const power_output_field = document.getElementById("power_output_field");

const share_production_btn = document.getElementById("share_production_btn");
const share_power_btn = document.getElementById("share_power_btn");

// Windows
const research_window = document.getElementById("research_window");
const research_searchbox = document.getElementById("research_searchbox");
const recipes_list = document.getElementById("recipes_list");

const recipes_window = document.getElementById("recipes_window");
const recipes_searchbox = document.getElementById("recipes_searchbox");

// Canvases
const production_calculator_canvas = document.getElementById("production_calculator_canvas");
const power_calculator_canvas = document.getElementById("power_calculator_canvas");

// Notifications container
const notifs_container = document.getElementById("notifs_container");
// #endregion


// #region | Functions
function workerMessageHandler(message) {
	// TODO
}

/**
 * Switch to the production calculator and update all UI elements
 */
function gotoProductionCalculator() {

	// Switch active classes for buttons
	production_calculator_btn.classList.add("active");
	power_calculator_btn.classList.remove("active");

	// Show production in- and outputs
	production_inputs_container.classList.remove("hidden");
	production_outputs_container.classList.remove("hidden");

	// Hide power output
	power_output_container.classList.add("hidden");

	// Share buttons
	share_production_btn.classList.remove("hidden");
	share_power_btn.classList.add("hidden");
}

/**
 * Switch to the power calculator and update all UI elements
 */
function gotoPowerCalculator() {

	// Switch active classes for buttons
	production_calculator_btn.classList.remove("active");
	power_calculator_btn.classList.add("active");

	// Hide production in- and outputs
	production_inputs_container.classList.add("hidden");
	production_outputs_container.classList.add("hidden");

	// Show power output
	power_output_container.classList.remove("hidden");

	// Share buttons
	share_production_btn.classList.add("hidden");
	share_power_btn.classList.remove("hidden");
}

function toggleResearchModal() {

	// Set button active class
	set_research_btn.classList.toggle("active");

	// Close recipes modal if it is open
	if (recipes_open) toggleRecipesModal();

	// Toggle visibility
	research_window.classList.toggle("hidden");

	// Toggle current status
	research_open = !research_open;
}

function toggleRecipesModal() {

	// Set button active class
	set_recipes_btn.classList.toggle("active");

	// Close research modal if it is open
	if (research_open) toggleResearchModal();

	// Toggle visibility
	recipes_window.classList.toggle("hidden");

	// Toggle current status
	recipes_open = !recipes_open;
}

function toggleAddInputModal() {
	new UserNotification("TODO", "This is not yet implemented, sorry.", "default", 10000);
}

function toggleAddOutputModal() {
	new UserNotification("TODO", "This is not yet implemented, sorry.", "default", 10000);
}

function shareProductionCalculation() {
	new UserNotification("TODO", "This is not yet implemented, sorry.", "default", 10000);
}

function sharePowerCalculation() {
	new UserNotification("TODO", "This is not yet implemented, sorry.", "default", 10000);
}

// Search for research nodes in the research window
function searchResearchTree() {}

// Search for recipes in the recipe window
function searchRecipes() {}

function parseSearchParams() {
	// TODO (perhaps?)
	// Params schema versioning in case of renamed keys or values

	// Get search parameters
	const search_params = new URLSearchParams(window.location.search);

	// Get current calculator
	const target_calculator = search_params.get("c");

	// Selected calculator is not known
	if (!["prod", "pwr"].includes(target_calculator))
		throw ["Invalid Calculator", "The selected calculator (after the question mark in the URL) is invalid.<br>Possible modes: \"prd\" and \"pwr\"."];

	// Try parsing research and recipes
	let parsed_research, parsed_recipes, parsed_data;
	try {
		parsed_research = JSON.parse(search_params.get("research") ?? "[]");
		parsed_recipes = JSON.parse(search_params.get("recipes") ?? "[]");
		parsed_data = JSON.parse(search_params.get("data") ?? "{}");
	} catch (error) {
		throw ["Invalid JSON", "The JSON parameters (after the question mark in the URL) seem to be malformed.<br>If you've got some time, could you maybe <a target=\"_blank\" href=\"https://github.com/TimKoenig96/coi-calculator/issues/new\">create an issue</a>?<br>To fix this, remove everything after the question mark and recreate the calculation."];
	}

	// Return results
	return [target_calculator, parsed_research, parsed_recipes, parsed_data];
}

function runInit() {

	// Spawn worker
	spawnWorker();

	// Check for presence of search parameters
	if (window.location.search) {
		try {

			// Parse the search parameters
			const [target_calculator, research, recipes, data] = parseSearchParams();

			// Do power calculation related settings
			if (target_calculator === "pwr") {

				// Open the power calculator
				gotoPowerCalculator();

				// Set the amount of power wanted
				power_output_field.value = Number(data.power_output ?? 0);
			}

			// Do production calculator related settings
			else {
				// TODO
			}

			// TODO: Apply selected research and recipes

		} catch (error) {
			new UserNotification(error[0], error[1], "error");
		}
	}
}
// #endregion


// #region | Event listeners
const event_list = new Set([
	[production_calculator_btn, ["click", gotoProductionCalculator]],
	[power_calculator_btn, ["click", gotoPowerCalculator]],
	[set_research_btn, ["click", toggleResearchModal]],
	[set_recipes_btn, ["click", toggleRecipesModal]],
	[add_production_input_btn, ["click", toggleAddInputModal]],
	[add_production_output_btn, ["click", toggleAddOutputModal]],
	[share_production_btn, ["click", shareProductionCalculation]],
	[share_power_btn, ["click", sharePowerCalculation]],
	[research_searchbox, ["input", searchResearchTree]],
	[recipes_searchbox, ["input", searchRecipes]]
]);

event_list.forEach(([k, v]) => k.addEventListener(v[0], v[1]));
// #endregion


// Initialize
runInit();
