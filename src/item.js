export class Item {

	// All items
	static #all_items = [];

	// Item categories
	static category = {
		NATURAL_RESOURCE: "Natural Resource",
		SEMI_PROCESSED_RESOURCE: "Semi-Processed Resource",
		CRAFTED_MATERIAL: "Crafted Material",
		FOOD_AND_MEDICAL: "Food and Medical",
		PETROCHEMICAL: "Petrochemical",
		POWER_AND_NUCLEAR: "Power and Nuclear",
		WASTE_AND_POLLUTION: "Waste and Pollution",
	};

	// Item states
	static state = {
		LOOSE: "Loose",
		UNIT: "Unit",
		FLUID: "Fluid",
		MOLTEN: "Molten",
		VIRTUAL: "Virtual",
		MECHANIC: "Mechanic"
	};

	/**
	 * Instantiate an item
	 * @param {String} name Item name
	 * @param {keyof Item.category} category Item category
	 * @param {keyof Item.state} state Item state
	 */
	constructor(name, category, state) {

		// Set instance variables
		this.name = name;
		this.category = category;
		this.state = state;

		// Add to all items array
		Item.#all_items.push(this);
	}

	// Instantiate all items
	static instantiateAll() {

		// #region | Natural Resource
		new Item("Coal", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Copper Ore", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Dirt", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Gold Ore", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Iron Ore", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Limestone", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Quartz", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Rock", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Sand", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Seawater", Item.category.NATURAL_RESOURCE, Item.state.FLUID);
		new Item("Sulfur", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Uranium Ore", Item.category.NATURAL_RESOURCE, Item.state.LOOSE);
		new Item("Wood", Item.category.NATURAL_RESOURCE, Item.state.UNIT);
		new Item("Water", Item.category.NATURAL_RESOURCE, Item.state.FLUID);
		// #endregion
	
		// #region | Semi-Processed Resource
		new Item("Acid", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.FLUID);
		new Item("Brine", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.FLUID);
		new Item("Broken Glass", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Cement", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.UNIT);
		new Item("Chilled Water", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.FLUID);
		new Item("Copper Ore Crushed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Copper Scrap", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Copper Scrap Pressed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Glass Mix", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Gold Ore Concentrate", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Gold Ore Crushed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Gold Ore Powder", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Gold Scrap", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Gold Scrap Pressed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Graphite", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.UNIT);
		new Item("Gravel", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Impure Copper", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.UNIT);
		new Item("Iron Ore Crushed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Iron Scrap", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Iron Scrap Pressed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Manufactured Sand", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Molten Copper", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.MOLTEN);
		new Item("Molten Glass", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.MOLTEN);
		new Item("Molten Iron", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.MOLTEN);
		new Item("Molten Silicon", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.MOLTEN);
		new Item("Molten Steel", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.MOLTEN);
		new Item("Quartz Crushed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Recyclables", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Recyclables Pressed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Salt", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Slag Crushed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Uranium Ore Crushed", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		new Item("Woodchips", Item.category.SEMI_PROCESSED_RESOURCE, Item.state.LOOSE);
		// #endregion
	
		// #region | Crafted Material
		new Item("Bricks", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Concrete Slab", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Construction Parts", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Construction Parts II", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Construction Parts III", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Construction Parts IV", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Consumer Electronics", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Copper", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Electronics", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Electronics II", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Electronics III", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Filter Media", Item.category.CRAFTED_MATERIAL, Item.state.LOOSE);
		new Item("Flowers", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Glass", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Gold", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Household Appliances", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Household Goods", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Iron", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Lab Equipment", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Lab Equipment II", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Lab Equipment III", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Lab Equipment IV", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Maintenance I", Item.category.CRAFTED_MATERIAL, Item.state.VIRTUAL);
		new Item("Maintenance II", Item.category.CRAFTED_MATERIAL, Item.state.VIRTUAL);
		new Item("Maintenance III", Item.category.CRAFTED_MATERIAL, Item.state.VIRTUAL);
		new Item("Mechanical Parts", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 1 A", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 1 B", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 1 C", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 2 A", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 2 B", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 2 C", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 3 A", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 3 B", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 3 C", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 4 A", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Microchips Stage 4 B", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Paper", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("PCB", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Server", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Silicon (Poly)", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Silicon Wafer", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Solar Cell", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Solar Cell Mono", Item.category.CRAFTED_MATERIAL, Item.state.LOOSE);
		new Item("Steel", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Vehicle Parts", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Vehicle Parts II", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		new Item("Vehicle Parts III", Item.category.CRAFTED_MATERIAL, Item.state.UNIT);
		// #endregion
	
		// #region | Food and Medical
		new Item("Anesthetics", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Animal Feed", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Antibiotics", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Bread", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Cake", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Canola", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Chicken Carcass", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Compost", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Cooking Oil", Item.category.FOOD_AND_MEDICAL, Item.state.FLUID);
		new Item("Corn Mash", Item.category.FOOD_AND_MEDICAL, Item.state.FLUID);
		new Item("Corn", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Disinfectant", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Eggs", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Ethanol", Item.category.FOOD_AND_MEDICAL, Item.state.FLUID);
		new Item("Fertility", Item.category.FOOD_AND_MEDICAL, Item.state.FLUID);
		new Item("Fertilizer (Organic)", Item.category.FOOD_AND_MEDICAL, Item.state.FLUID);
		new Item("Fertilizer I", Item.category.FOOD_AND_MEDICAL, Item.state.FLUID);
		new Item("Fertilizer II", Item.category.FOOD_AND_MEDICAL, Item.state.FLUID);
		new Item("Flour", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Food Pack", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Fruit", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Green Manure", Item.category.FOOD_AND_MEDICAL, Item.state.VIRTUAL);
		new Item("Meat Trimmings", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Meat", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Medical Equipment", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Medical Supplies", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Medical Supplies II", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Medical Supplies III", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Morphine", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Poppy", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Potato", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Sausage", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Snack", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Soybean", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Sugar Cane", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Sugar", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		new Item("Tofu", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Tree Sapling", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Vegetables", Item.category.FOOD_AND_MEDICAL, Item.state.UNIT);
		new Item("Wheat", Item.category.FOOD_AND_MEDICAL, Item.state.LOOSE);
		// #endregion
	
		// #region | Petrochemical
		new Item("Crude Oil", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Sour Water", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Heavy Oil", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Medium Oil", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Diesel", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Light Oil", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Fuel Gas", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Naphtha", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Ammonia", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Chlorine", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Hydrogen", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Nitrogen", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Oxygen", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Hydrogen Fluoride", Item.category.PETROCHEMICAL, Item.state.FLUID);
		new Item("Plastic", Item.category.PETROCHEMICAL, Item.state.UNIT);
		new Item("Rubber", Item.category.PETROCHEMICAL, Item.state.UNIT);
		// #endregion
	
		// #region | Power and Nuclear
		new Item("Electricity", Item.category.POWER_AND_NUCLEAR, Item.state.VIRTUAL);
		new Item("Mechanical Power", Item.category.POWER_AND_NUCLEAR, Item.state.MECHANICAL);
		new Item("Heat", Item.category.POWER_AND_NUCLEAR, Item.state.VIRTUAL);
		new Item("Steam (Super)", Item.category.POWER_AND_NUCLEAR, Item.state.FLUID);
		new Item("Steam (High)", Item.category.POWER_AND_NUCLEAR, Item.state.FLUID);
		new Item("Steam (Low)", Item.category.POWER_AND_NUCLEAR, Item.state.FLUID);
		new Item("Steam Depleted", Item.category.POWER_AND_NUCLEAR, Item.state.FLUID);
		new Item("Blanket Fuel", Item.category.POWER_AND_NUCLEAR, Item.state.FLUID);
		new Item("Blanket Fuel (Enriched)", Item.category.POWER_AND_NUCLEAR, Item.state.FLUID);
		new Item("Core Fuel", Item.category.POWER_AND_NUCLEAR, Item.state.FLUID);
		new Item("Core Fuel (Spent)", Item.category.POWER_AND_NUCLEAR, Item.state.FLUID);
		new Item("Depleted Uranium", Item.category.POWER_AND_NUCLEAR, Item.state.LOOSE);
		new Item("Enriched Uranium (4%)", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Enriched Uranium (20%)", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Fission Product", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("MOX Rod", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Plutonium", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Reprocessed Uranium (1%)", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Retired Waste", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Spent Fuel", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Spent MOX", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Uranium Rod", Item.category.POWER_AND_NUCLEAR, Item.state.UNIT);
		new Item("Yellow Cake", Item.category.POWER_AND_NUCLEAR, Item.state.LOOSE);
		// #endregion
	
		// #region | Waste and Pollution
		new Item("Air Pollution", Item.category.WASTE_AND_POLLUTION, Item.state.VIRTUAL);
		new Item("Biomass", Item.category.WASTE_AND_POLLUTION, Item.state.LOOSE);
		new Item("Carbon Dioxide", Item.category.WASTE_AND_POLLUTION, Item.state.FLUID);
		new Item("Exhaust", Item.category.WASTE_AND_POLLUTION, Item.state.FLUID);
		new Item("Radiation", Item.category.WASTE_AND_POLLUTION, Item.state.VIRTUAL);
		new Item("Slag", Item.category.WASTE_AND_POLLUTION, Item.state.LOOSE);
		new Item("Sludge", Item.category.WASTE_AND_POLLUTION, Item.state.LOOSE);
		new Item("Toxic Slurry", Item.category.WASTE_AND_POLLUTION, Item.state.FLUID);
		new Item("Waste", Item.category.WASTE_AND_POLLUTION, Item.state.LOOSE);
		new Item("Water Pollution", Item.category.WASTE_AND_POLLUTION, Item.state.VIRTUAL);
		new Item("Waste Pressed", Item.category.WASTE_AND_POLLUTION, Item.state.LOOSE);
		new Item("Waste Water", Item.category.WASTE_AND_POLLUTION, Item.state.FLUID);
		// #endregion
	}

	/**
	 * Get all items in the specified category
	 * @param {String} category Item category
	 * @returns {Item[]} Items or empty array
	 */
	static getItemsInCategory(category) {
		return Item.#all_items.filter((v) => v.category === category);
	}
}
