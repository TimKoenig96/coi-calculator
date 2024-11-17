// Name, Category ID, State ID
const item_data = [

	// #region | Natural Resources
	["Coal", 0, 0],
	["Copper Ore", 0, 0],
	["Dirt", 0, 0],
	["Gold Ore", 0, 0],
	["Iron Ore", 0, 0],
	["Limestone", 0, 0],
	["Quartz", 0, 0],
	["Rock", 0, 0],
	["Sand", 0, 0],
	["Seawater", 0, 2],
	["Sulfur", 0, 0],
	["Uranium Ore", 0, 0],
	["Wood", 0, 1],
	["Water", 0, 2],
	// #endregion

	// #region | Semi-Processed Resources
	["Acid", 1, 2],
	["Brine", 1, 2],
	["Broken Glass", 1, 0],
	["Cement", 1, 1],
	["Chilled Water", 1, 2],
	["Copper Ore Crushed", 1, 0],
	["Copper Scrap", 1, 0],
	["Copper Scrap Pressed", 1, 0],
	["Glass Mix", 1, 0],
	["Gold Ore Concentrate", 1, 0],
	["Gold Ore Crushed", 1, 0],
	["Gold Ore Powder", 1, 0],
	["Gold Scrap", 1, 0],
	["Gold Scrap Pressed", 1, 0],
	["Graphite", 1, 1],
	["Gravel", 1, 0],
	["Impure Copper", 1, 1],
	["Iron Ore Crushed", 1, 0],
	["Iron Scrap", 1, 0],
	["Iron Scrap Pressed", 1, 0],
	["Manufactured Sand", 1, 0],
	["Molten Copper", 1, 3],
	["Molten Glass", 1, 3],
	["Molten Iron", 1, 3],
	["Molten Silicon", 1, 3],
	["Molten Steel", 1, 3],
	["Quartz Crushed", 1, 0],
	["Recyclables", 1, 0],
	["Recyclables Pressed", 1, 0],
	["Salt", 1, 0],
	["Slag Crushed", 1, 0],
	["Uranium Ore Crushed", 1, 0],
	["Woodchips", 1, 0],
	// #endregion

	// #region | Crafted Materials
	["Bricks", 2, 1],
	["Concrete Slab", 2, 1],
	["Construction Parts", 2, 1],
	["Construction Parts II", 2, 1],
	["Construction Parts III", 2, 1],
	["Construction Parts IV", 2, 1],
	["Consumer Electronics", 2, 1],
	["Copper", 2, 1],
	["Electronics", 2, 1],
	["Electronics II", 2, 1],
	["Electronics III", 2, 1],
	["Filter Media", 2, 0],
	["Flowers", 2, 1],
	["Glass", 2, 1],
	["Gold", 2, 1],
	["Household Appliances", 2, 1],
	["Household Goods", 2, 1],
	["Iron", 2, 1],
	["Lab Equipment", 2, 1],
	["Lab Equipment II", 2, 1],
	["Lab Equipment III", 2, 1],
	["Lab Equipment IV", 2, 1],
	["Maintenance I", 2, 4],
	["Maintenance II", 2, 4],
	["Maintenance III", 2, 4],
	["Mechanical Parts", 2, 1],
	["Microchips", 2, 1],
	["Microchips Stage 1 A", 2, 1],
	["Microchips Stage 1 B", 2, 1],
	["Microchips Stage 1 C", 2, 1],
	["Microchips Stage 2 A", 2, 1],
	["Microchips Stage 2 B", 2, 1],
	["Microchips Stage 2 C", 2, 1],
	["Microchips Stage 3 A", 2, 1],
	["Microchips Stage 3 B", 2, 1],
	["Microchips Stage 3 C", 2, 1],
	["Microchips Stage 4 A", 2, 1],
	["Microchips Stage 4 B", 2, 1],
	["Paper", 2, 1],
	["PCB", 2, 1],
	["Server", 2, 1],
	["Silicon (Poly)", 2, 1],
	["Silicon Wafer", 2, 1],
	["Solar Cell", 2, 1],
	["Solar Cell Mono", 2, 0],
	["Steel", 2, 1],
	["Vehicle Parts", 2, 1],
	["Vehicle Parts II", 2, 1],
	["Vehicle Parts III", 2, 1],
	// #endregion

	// #region | Foods and Medicals
	["Anesthetics", 3, 1],
	["Animal Feed", 3, 0],
	["Antibiotics", 3, 1],
	["Bread", 3, 1],
	["Cake", 3, 1],
	["Canola", 3, 0],
	["Chicken Carcass", 3, 1],
	["Compost", 3, 0],
	["Cooking Oil", 3, 2],
	["Corn Mash", 3, 2],
	["Corn", 3, 0],
	["Disinfectant", 3, 1],
	["Eggs", 3, 1],
	["Ethanol", 3, 2],
	["Fertility", 3, 2],
	["Fertilizer (Organic)", 3, 2],
	["Fertilizer I", 3, 2],
	["Fertilizer II", 3, 2],
	["Flour", 3, 1],
	["Food Pack", 3, 1],
	["Fruit", 3, 1],
	["Green Manure", 3, 4],
	["Meat Trimmings", 3, 0],
	["Meat", 3, 1],
	["Medical Equipment", 3, 1],
	["Medical Supplies", 3, 1],
	["Medical Supplies II", 3, 1],
	["Medical Supplies III", 3, 1],
	["Morphine", 3, 1],
	["Poppy", 3, 0],
	["Potato", 3, 0],
	["Sausage", 3, 1],
	["Snack", 3, 1],
	["Soybean", 3, 0],
	["Sugar Cane", 3, 0],
	["Sugar", 3, 0],
	["Tofu", 3, 1],
	["Tree Sapling", 3, 1],
	["Vegetables", 3, 1],
	["Wheat", 3, 0],
	// #endregion

	// #region | Petrochemicals
	["Crude Oil", 4, 2],
	["Sour Water", 4, 2],
	["Heavy Oil", 4, 2],
	["Medium Oil", 4, 2],
	["Diesel", 4, 2],
	["Light Oil", 4, 2],
	["Fuel Gas", 4, 2],
	["Naphtha", 4, 2],
	["Ammonia", 4, 2],
	["Chlorine", 4, 2],
	["Hydrogen", 4, 2],
	["Nitrogen", 4, 2],
	["Oxygen", 4, 2],
	["Hydrogen Fluoride", 4, 2],
	["Plastic", 4, 1],
	["Rubber", 4, 1],
	// #endregion

	// #region | Power and Nuclears
	["Electricity", 5, 4],
	["Mechanical Power", 5, 5],
	["Heat", 5, 4],
	["Steam (Super)", 5, 2],
	["Steam (High)", 5, 2],
	["Steam (Low)", 5, 2],
	["Steam Depleted", 5, 2],
	["Blanket Fuel", 5, 2],
	["Blanket Fuel (Enriched)", 5, 2],
	["Core Fuel", 5, 2],
	["Core Fuel (Spent)", 5, 2],
	["Depleted Uranium", 5, 0],
	["Enriched Uranium (4%)", 5, 1],
	["Enriched Uranium (20%)", 5, 1],
	["Fission Product", 5, 1],
	["MOX Rod", 5, 1],
	["Plutonium", 5, 1],
	["Reprocessed Uranium (1%)", 5, 1],
	["Retired Waste", 5, 1],
	["Spent Fuel", 5, 1],
	["Spent MOX", 5, 1],
	["Uranium Rod", 5, 1],
	["Yellow Cake", 5, 0],
	// #endregion

	// #region | Wastes and Pollution
	["Air Pollution", 6, 4],
	["Biomass", 6, 0],
	["Carbon Dioxide", 6, 2],
	["Exhaust", 6, 2],
	["Radiation", 6, 4],
	["Slag", 6, 0],
	["Sludge", 6, 0],
	["Toxic Slurry", 6, 2],
	["Waste", 6, 0],
	["Water Pollution", 6, 4],
	["Waste Pressed", 6, 0],
	["Waste Water", 6, 2]
	// #endregion
];

export class Item {

	// All items
	static #all_items = [];

	// Name to ID lookup
	static #name_to_id = new Map();

	// Item categories
	static categories = new Map([
		[0, "Natural Resources"],
		[1, "Semi-Processed Resources"],
		[2, "Crafted Materials"],
		[3, "Foods and Medicals"],
		[4, "Petrochemicals"],
		[5, "Power and Nuclears"],
		[6, "Wastes and Pollution"]
	]);

	// Item states
	static states = new Map([
		[0, "Loose"],
		[1, "Unit"],
		[2, "Fluid"],
		[3, "Molten"],
		[4, "Virtual"],
		[5, "Mechanical"]
	]);

	// Variables for later
	#recipes = [];
	#category_id;
	#state_id;

	// Constructor
	constructor([name, category_id, state_id], item_id) {

		// Set instance variables
		this.name = name;
		this.#category_id = category_id;
		this.#state_id = state_id;

		// Add to static array
		Item.#all_items[item_id] = this;

		// Add to name to ID lookup map
		Item.#name_to_id.set(name, item_id);
	}

	// Instantiate all items
	static instantiateAllItems() {
		item_data.forEach((item, index) => new Item(item, index));
	}

	// Get item by name
	static getItemByName(name) {
		const id = Item.#name_to_id.get(name);
		
		if (id === undefined) return undefined;

		return Item.#all_items[id];
	}

	// Get item by ID
	static getItemById(item_id) {
		return Item.#all_items[item_id];
	}

	// Get items by category ID
	static getItemsByCategoryId(category_id) {
		return Item.#all_items.filter((item) => item.#category_id === category_id);
	}
}
