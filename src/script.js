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
		this.element.addEventListener("click", this.#removeNotif.bind(this));
		this.element.innerHTML = `<h1>${header}</h1><p>${message}</p>`;
	}

	#showNotif() {
		notifs_container.prepend(this.element);
	#removeNotif() {
		this.element.remove();
		clearTimeout(this.timeout);
	}
}
// #endregion

	// Set and show message
	warning_text.textContent = message;
	warning_container.classList.remove("hidden");
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
		updateWarningMessage("Warning: The JSON in the link couldn't be processed. Does it have a typo?");
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
