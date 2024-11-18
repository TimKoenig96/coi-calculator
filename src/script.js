// #region | Imports
import { Building } from "./building.js";
import { Item } from "./item.js";
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
const research_list = document.getElementById("research_list");

const recipes_window = document.getElementById("recipes_window");
const recipes_searchbox = document.getElementById("recipes_searchbox");
const recipes_list = document.getElementById("recipes_list");

// Canvases
const production_calculator_canvas = document.getElementById("production_calculator_canvas");
const power_calculator_canvas = document.getElementById("power_calculator_canvas");
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



// TODO: Add all research nodes ordered in tiers to the research window
function setupResearchWindow() {}

// Add all recipes ordered in categories to the recipes window
function setupRecipesWindow() {

	// Iterate all categories
	for (const [category_id, category_name] of Object.entries(Item.category)) {

		// Create and configure element
		const element = document.createElement("div");
		element.id = `recipes_category_${category_id}`;
		element.classList.add("flex_col");
		element.innerHTML = `
			<h1>${category_name}</h1>
			<div id="recipes_category_${category_id}_list">
				${setupRecipesInCategory(category_name)}
			</div>
			<hr>
		`;
		recipes_list.appendChild(element);
	}

	// Setting up all recipes for a single category
	function setupRecipesInCategory(category) {
		const retval = [];

		// Get all items in category
		const items = Item.getItemsInCategory(category);

		// Iterate all returned items
		items.forEach((item) => {
			// Todo, once recipes are instantiated:
			// - Get all recipes for `item`
			// - For each recipe, push code for a recipe div to `retval`
			// - Once done, return `retval` joined by nothing
		});

		// Temporarily return a joined string of all returned items
		return items.map(sub_arr => sub_arr.name).join(", ");
	}
}

/**
 * Get parsed and assorted search parameters
 * @returns {Array?}
 */
function getParsedSearchParameters() {
	if (!window.location.search) return;

	// Get all search parameters
	const search_params = new URLSearchParams(window.location.search);

	// Get if power calculator is target
	const power_calculator = (search_params.get("pwr") === "1");

	// Try parsing selected research, recipes and io data
	let research, recipes, data;
	try {
		research = JSON.parse(search_params.get("research") ?? "[]");
		recipes = JSON.parse(search_params.get("recipes") ?? "[]");
		data = JSON.parse(search_params.get("data") ?? "[]");
	} catch (error) {
		new UserNotification(
			"Invalid JSON",
			`The JSON parameters (after the question mark in the URL) seem to be malformed.<br>
			If you've got some time, could you maybe <a target=\"_blank\" href=\"https://github.com/TimKoenig96/coi-calculator/issues/new\">create an issue</a>?<br>
			To fix this, remove everything after the question mark and recreate the calculation.`,
			"error"
		);

		return;
	}

	// Return parsed parameters
	return [power_calculator, research, recipes, data];
}

// Apply parsed search parameters
function applyParsedSearchParameters([power_calculator, research, recipes, data]) {
	// TODO: Make this throw an error if values are out of place

	// TODO: Apply all research and recipes selected!

	// If target is power calculator
	if (power_calculator) {

		// Open the power calculator
		gotoPowerCalculator();

		// Set the desired power output
		power_output_field.value = Number(data.power_output ?? 0);

		// TODO: Dispatch input event for calculation!

		return;
	}

	// Target is production calculator: Add all in- and outputs
	// TODO
}

// Spawn the web worker and add a message event listener
function spawnWorker() {
	worker = new Worker(new URL("worker.js", import.meta.url), {type: "module"});
	worker.addEventListener("message", workerMessageHandler);
}

function runInit() {

	// Instantiate all items
	Item.instantiateAll();

	// Instantiate all buildings
	Building.instantiateAll();

	// TODO: Instantiate all recipes
	// Recipe.instantiateAll();

	// Set up the research window
	// setupResearchWindow();

	// Set up the recipes window
	setupRecipesWindow();

	// Get parsed search parameters if present
	const params = getParsedSearchParameters();

	// Apply search parameters if they exist
	if (params) applyParsedSearchParameters();

	// Spawn worker
	spawnWorker();
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
