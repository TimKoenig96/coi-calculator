import { Item } from "./item";

export class Building {

	// All buildings
	static #all_buildings = [];

	// Lookup building by name
	static #name_to_building = new Map();

	/**
	 * Instantiate a building
	 * @param {String} name Building name
	 * @param {Number} workers Amount of workers required
	 * @param {Number} power Amount of megawatts consumed
	 * @param {Number} maintenance_1 Amount of Maintenance I consumed
	 * @param {Number} maintenance_2 Amount of Maintenance II consumed
	 * @param {Number} maintenance_3 Amount of Maintenance III consumed
	 * @param {Array<[Item, Number]>} build_cost Every item required to build
	 */
	constructor(name, workers, power, maintenance_1, maintenance_2, maintenance_3, build_cost) {

		// Set instance variables
		this.name = name;
		this.workers = workers;
		this.power = power;
		this.maintenance_1 = maintenance_1;
		this.maintenance_2 = maintenance_2;
		this.maintenance_3 = maintenance_3;
		this.build_cost = build_cost;

		// Add to all buildings array
		Building.#all_buildings.push(this);

		// Add to name to building lookup table
		Building.#name_to_building.set(name, this);
	}

	// Instantiate all buildings
	static instantiateAll() {

		// #region | General Machines
		new Building("Air Separator", 6, 0.25, 6, 0, 0,[[Item.get("Construction Parts II"), 2]]);
		// #endregion
	
		// #region | Water Extraction & Processing
		// #endregion
	
		// #region | Food Production
		// #endregion
	
		// #region | Metallurgy & Smelting
		// #endregion
	
		// #region | Power Production
		// #endregion
	
		// #region | Crude Oil Refining
		// #endregion
	
		// #region | Waste Management
		// #endregion
	
		// #region | Buildings
		// #endregion
	}

	/**
	 * Get a building by name
	 * @param {String} name Building name
	 * @returns {Building?}
	 */
	static get(name) {
		return Building.#name_to_building.get(name);
	}
}
