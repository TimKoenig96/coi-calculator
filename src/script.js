// #region | Variables
let current_calculator = "production";
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

const share_production_btn = document.getElementById("share_production_btn");
const share_power_btn = document.getElementById("share_power_btn");

// Notifications container
const notifs_container = document.getElementById("notifs_container");
// #endregion


// #region | Classes
class UserNotification {
	#valid_styles = ["default", "success", "warning", "error"];

	/**
	 * Create a new notification
	 * @param {String} header Message header
	 * @param {String} message Message to display
	 * @param {("default"|"success"|"warning"|"error")?} style Message style
	 * @param {Number?} timer Message auto-delete after specified ms. 0 for permanent.
	 */
	constructor(header, message, style = "notif", timer = 0) {
		this.element;
		this.timeout;

		// Check correct style use
		if (!this.#valid_styles.includes(style)) style = "default";

		// Create the element
		this.#createNotif(header, message, style);

		// If element has timer, set timeout
		if (timer) this.timeout = setTimeout(this.#removeNotif.bind(this), timer);

		// Show notification
		this.#showNotif();
	}

	#createNotif(header, message, style) {
		this.element = document.createElement("div");
		if (style) this.element.classList.add(style);
		this.element.innerHTML = `<h1>${header}</h1><p>${message}</p><br><a href="">Close message</a>`;
		this.element.children[3].addEventListener("click", this.#removeNotif.bind(this));
	}

	#showNotif() {
		notifs_container.prepend(this.element);
	}

	#removeNotif(e) {
		e.preventDefault();
		this.element.remove();
		clearTimeout(this.timeout);
	}
}
// #endregion


// #region | Functions
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

function parseSearchParams() {

	// Get search parameters
	const search_params = new URLSearchParams(window.location.search);

	// Get current calculator
	const target_calculator = search_params.get("mode");

	// Try parsing research and recipes
	let parsed_research, parsed_recipes;
	try {
		parsed_research = JSON.parse(search_params.get("research") ?? "[]");
		parsed_recipes = JSON.parse(search_params.get("recipes") ?? "[]");
	} catch (error) {
		throw ["Invalid JSON", "The JSON parameters (after the question mark in the URL) seem to be malformed.<br>If you've got some time, could you maybe <a target=\"_blank\" href=\"https://github.com/TimKoenig96/coi-calculator/issues/new\">create an issue</a>?<br>To fix this, remove everything after the question mark and recreate the calculation."];
	}

	// Return results
	return [target_calculator, parsed_research, parsed_recipes];
}

function runInit() {

	// Check for presence of search parameters
	if (window.location.search) {
		try {
			const [target_calculator, research, recipes] = parseSearchParams();
		} catch (error) {
			new UserNotification(error[0], error[1], "error");
		}
	}
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
