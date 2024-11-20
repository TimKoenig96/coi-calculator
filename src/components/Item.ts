export enum ItemCategory {
	NATURAL_RESOURCE = "Natural Resource",
	SEMI_PROCESSED_RESOURCE = "Semi-Processed Resource",
	CRAFTED_MATERIAL = "Crafted Material",
	FOOD_AND_MEDICAL = "Food and Medical",
	PETROCHEMICAL = "Petrochemical",
	POWER_AND_NUCLEAR = "Power and Nuclear",
	WASTE_AND_POLLUTION = "Waste and Pollution"
}

export enum ItemState {
	LOOSE = "Loose",
	UNIT = "Unit",
	FLUID = "Fluid",
	MOLTEN = "Molten",
	VIRTUAL = "Virtual",
	MECHANICAL = "Mechanical"
}

export class Item {
	readonly name: string;
	readonly category: ItemCategory;
	readonly state: ItemState;


	constructor(name: string, category: ItemCategory, state: ItemState) {
		this.name = name;
		this.category = category;
		this.state = state;
	}
}

export class Items {

	static getAllInCategoryAsArray(category: ItemCategory): Item[] {
		return Object.values(this).filter(
			(item: Item) => item.category === category
		);
	}

	static getAllInCategoryAsRecord(category: ItemCategory): Record<string, Item> {

		// Get all entries of this class as an array and filter them
		return Object.entries(this).filter(

			// Get the value and make sure it's an Item and matches the category
			([, value]) => value instanceof Item && value.category === category
		).reduce(
			(accumulator, [key, value]) => {

				// Add all keys and values to the accumulator
				accumulator[key] = value;
				return accumulator;
			},
			{} as Record<string, Item>
		);
	}

	// #region | Natural Resource
	static COAL: Item = new Item("Coal", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static COPPER_ORE: Item = new Item("Copper Ore", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static DIRT: Item = new Item("Dirt", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static GOLD_ORE: Item = new Item("Gold Ore", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static IRON_ORE: Item = new Item("Iron Ore", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static LIMESTONE: Item = new Item("Limestone", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static QUARTZ: Item = new Item("Quartz", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static ROCK: Item = new Item("Rock", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static SAND: Item = new Item("Sand", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static SEAWATER: Item = new Item("Seawater", ItemCategory.NATURAL_RESOURCE, ItemState.FLUID);
	static SULFUR: Item = new Item("Sulfur", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static URANIUM_ORE: Item = new Item("Uranium Ore", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE);
	static WOOD: Item = new Item("Wood", ItemCategory.NATURAL_RESOURCE, ItemState.UNIT);
	static WATER: Item = new Item("Water", ItemCategory.NATURAL_RESOURCE, ItemState.FLUID);
	// #endregion

	// #region | Semi-Processed Resource
	static ACID: Item = new Item("Acid", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.FLUID);
	static BRINE: Item = new Item("Brine", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.FLUID);
	static BROKEN_GLASS: Item = new Item("Broken Glass", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static CEMENT: Item = new Item("Cement", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.UNIT);
	static CHILLED_WATER: Item = new Item("Chilled Water", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.FLUID);
	static COPPER_ORE_CRUSHED: Item = new Item("Copper Ore Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static COPPER_SCRAP: Item = new Item("Copper Scrap", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static COPPER_SCRAP_PRESSED: Item = new Item("Copper Scrap Pressed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static GLASS_MIX: Item = new Item("Glass Mix", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static GOLD_ORE_CONCENTRATE: Item = new Item("Gold Ore Concentrate", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static GOLD_ORE_CRUSHED: Item = new Item("Gold Ore Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static GOLD_ORE_POWDER: Item = new Item("Gold Ore Powder", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static GOLD_SCRAP: Item = new Item("Gold Scrap", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static GOLD_SCRAP_PRESSED: Item = new Item("Gold Scrap Pressed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static GRAPHITE: Item = new Item("Graphite", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.UNIT);
	static GRAVEL: Item = new Item("Gravel", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static IMPURE_COPPER: Item = new Item("Impure Copper", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.UNIT);
	static IRON_ORE_CRUSHED: Item = new Item("Iron Ore Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static IRON_SCRAP: Item = new Item("Iron Scrap", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static IRON_SCRAP_PRESSED: Item = new Item("Iron Scrap Pressed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static MANUFACTURED_SAND: Item = new Item("Manufactured Sand", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static MOLTEN_COPPER: Item = new Item("Molten Copper", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN);
	static MOLTEN_GLASS: Item = new Item("Molten Glass", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN);
	static MOLTEN_IRON: Item = new Item("Molten Iron", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN);
	static MOLTEN_SILICON: Item = new Item("Molten Silicon", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN);
	static MOLTEN_STEEL: Item = new Item("Molten Steel", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN);
	static QUARTZ_CRUSHED: Item = new Item("Quartz Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static RECYCLABLES: Item = new Item("Recyclables", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static RECYCLABLES_PRESSED: Item = new Item("Recyclables Pressed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static SALT: Item = new Item("Salt", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static SLAG_CRUSHED: Item = new Item("Slag Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static URANIUM_ORE_CRUSHED: Item = new Item("Uranium Ore Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	static WOODCHIPS: Item = new Item("Woodchips", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE);
	// #endregion

	// #region | Crafted Material
	static BRICKS: Item = new Item("Bricks", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static CONCRETE_SLAB: Item = new Item("Concrete Slab", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static CONSTRUCTION_PARTS: Item = new Item("Construction Parts", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static CONSTRUCTION_PARTS_II: Item = new Item("Construction Parts II", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static CONSTRUCTION_PARTS_III: Item = new Item("Construction Parts III", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static CONSTRUCTION_PARTS_IV: Item = new Item("Construction Parts IV", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static CONSUMER_ELECTRONICS: Item = new Item("Consumer Electronics", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static COPPER: Item = new Item("Copper", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static ELECTRONICS: Item = new Item("Electronics", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static ELECTRONICS_II: Item = new Item("Electronics II", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static ELECTRONICS_III: Item = new Item("Electronics III", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static FILTER_MEDIA: Item = new Item("Filter Media", ItemCategory.CRAFTED_MATERIAL, ItemState.LOOSE);
	static FLOWERS: Item = new Item("Flowers", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static GLASS: Item = new Item("Glass", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static GOLD: Item = new Item("Gold", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static HOUSEHOLD_APPLIANCES: Item = new Item("Household Appliances", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static HOUSEHOLD_GOODS: Item = new Item("Household Goods", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static IRON: Item = new Item("Iron", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static LAB_EQUIPMENT: Item = new Item("Lab Equipment", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static LAB_EQUIPMENT_II: Item = new Item("Lab Equipment II", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static LAB_EQUIPMENT_III: Item = new Item("Lab Equipment III", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static LAB_EQUIPMENT_IV: Item = new Item("Lab Equipment IV", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MAINTENANCE_I: Item = new Item("Maintenance I", ItemCategory.CRAFTED_MATERIAL, ItemState.VIRTUAL);
	static MAINTENANCE_II: Item = new Item("Maintenance II", ItemCategory.CRAFTED_MATERIAL, ItemState.VIRTUAL);
	static MAINTENANCE_III: Item = new Item("Maintenance III", ItemCategory.CRAFTED_MATERIAL, ItemState.VIRTUAL);
	static MECHANICAL_PARTS: Item = new Item("Mechanical Parts", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS: Item = new Item("Microchips", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_1_A: Item = new Item("Microchips Stage 1 A", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_1_B: Item = new Item("Microchips Stage 1 B", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_1_C: Item = new Item("Microchips Stage 1 C", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_2_A: Item = new Item("Microchips Stage 2 A", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_2_B: Item = new Item("Microchips Stage 2 B", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_2_C: Item = new Item("Microchips Stage 2 C", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_3_A: Item = new Item("Microchips Stage 3 A", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_3_B: Item = new Item("Microchips Stage 3 B", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_3_C: Item = new Item("Microchips Stage 3 C", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_4_A: Item = new Item("Microchips Stage 4 A", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static MICROCHIPS_STAGE_4_B: Item = new Item("Microchips Stage 4 B", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static PAPER: Item = new Item("Paper", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static PCB: Item = new Item("PCB", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static SERVER: Item = new Item("Server", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static SILICON_POLY: Item = new Item("Silicon (Poly)", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static SILICON_WAFER: Item = new Item("Silicon Wafer", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static SOLAR_CELL: Item = new Item("Solar Cell", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static SOLAR_CELL_MONO: Item = new Item("Solar Cell Mono", ItemCategory.CRAFTED_MATERIAL, ItemState.LOOSE);
	static STEEL: Item = new Item("Steel", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static VEHICLE_PARTS: Item = new Item("Vehicle Parts", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static VEHICLE_PARTS_II: Item = new Item("Vehicle Parts II", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	static VEHICLE_PARTS_III: Item = new Item("Vehicle Parts III", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT);
	// #endregion

	// #region | Food and Medical
	static ANESTHETICS: Item = new Item("Anesthetics", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static ANIMAL_FEED: Item = new Item("Animal Feed", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static ANTIBIOTICS: Item = new Item("Antibiotics", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static BREAD: Item = new Item("Bread", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static CAKE: Item = new Item("Cake", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static CANOLA: Item = new Item("Canola", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static CHICKEN_CARCASS: Item = new Item("Chicken Carcass", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static COMPOST: Item = new Item("Compost", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static COOKING_OIL: Item = new Item("Cooking Oil", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID);
	static CORN_MASH: Item = new Item("Corn Mash", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID);
	static CORN: Item = new Item("Corn", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static DISINFECTANT: Item = new Item("Disinfectant", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static EGGS: Item = new Item("Eggs", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static ETHANOL: Item = new Item("Ethanol", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID);
	static FERTILITY: Item = new Item("Fertility", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID);
	static FERTILIZER_ORGANIC: Item = new Item("Fertilizer (Organic)", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID);
	static FERTILIZER_I: Item = new Item("Fertilizer I", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID);
	static FERTILIZER_II: Item = new Item("Fertilizer II", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID);
	static FLOUR: Item = new Item("Flour", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static FOOD_PACK: Item = new Item("Food Pack", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static FRUIT: Item = new Item("Fruit", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static GREEN_MANURE: Item = new Item("Green Manure", ItemCategory.FOOD_AND_MEDICAL, ItemState.VIRTUAL);
	static MEAT_TRIMMINGS: Item = new Item("Meat Trimmings", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static MEAT: Item = new Item("Meat", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static MEDICAL_EQUIPMENT: Item = new Item("Medical Equipment", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static MEDICAL_SUPPLIES: Item = new Item("Medical Supplies", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static MEDICAL_SUPPLIES_II: Item = new Item("Medical Supplies II", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static MEDICAL_SUPPLIES_III: Item = new Item("Medical Supplies III", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static MORPHINE: Item = new Item("Morphine", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static POPPY: Item = new Item("Poppy", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static POTATO: Item = new Item("Potato", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static SAUSAGE: Item = new Item("Sausage", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static SNACK: Item = new Item("Snack", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static SOYBEAN: Item = new Item("Soybean", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static SUGAR_CANE: Item = new Item("Sugar Cane", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static SUGAR: Item = new Item("Sugar", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	static TOFU: Item = new Item("Tofu", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static TREE_SAPLING: Item = new Item("Tree Sapling", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static VEGETABLES: Item = new Item("Vegetables", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT);
	static WHEAT: Item = new Item("Wheat", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE);
	// #endregion

	// #region | Petrochemical
	static CRUDE_OIL: Item = new Item("Crude Oil", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static SOUR_WATER: Item = new Item("Sour Water", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static HEAVY_OIL: Item = new Item("Heavy Oil", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static MEDIUM_OIL: Item = new Item("Medium Oil", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static DIESEL: Item = new Item("Diesel", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static LIGHT_OIL: Item = new Item("Light Oil", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static FUEL_GAS: Item = new Item("Fuel Gas", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static NAPHTHA: Item = new Item("Naphtha", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static AMMONIA: Item = new Item("Ammonia", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static CHLORINE: Item = new Item("Chlorine", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static HYDROGEN: Item = new Item("Hydrogen", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static NITROGEN: Item = new Item("Nitrogen", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static OXYGEN: Item = new Item("Oxygen", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static HYDROGEN_FLUORIDE: Item = new Item("Hydrogen Fluoride", ItemCategory.PETROCHEMICAL, ItemState.FLUID);
	static PLASTIC: Item = new Item("Plastic", ItemCategory.PETROCHEMICAL, ItemState.UNIT);
	static RUBBER: Item = new Item("Rubber", ItemCategory.PETROCHEMICAL, ItemState.UNIT);
	// #endregion

	// #region | Power and Nuclear
	static ELECTRICITY: Item = new Item("Electricity", ItemCategory.POWER_AND_NUCLEAR, ItemState.VIRTUAL);
	static MECHANICAL_POWER: Item = new Item("Mechanical Power", ItemCategory.POWER_AND_NUCLEAR, ItemState.MECHANICAL);
	static HEAT: Item = new Item("Heat", ItemCategory.POWER_AND_NUCLEAR, ItemState.VIRTUAL);
	static STEAM_SUPER: Item = new Item("Steam (Super)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID);
	static STEAM_HIGH: Item = new Item("Steam (High)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID);
	static STEAM_LOW: Item = new Item("Steam (Low)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID);
	static STEAM_DEPLETED: Item = new Item("Steam Depleted", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID);
	static BLANKET_FUEL: Item = new Item("Blanket Fuel", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID);
	static BLANKET_FUEL_ENRICHED: Item = new Item("Blanket Fuel (Enriched)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID);
	static CORE_FUEL: Item = new Item("Core Fuel", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID);
	static CORE_FUEL_SPENT: Item = new Item("Core Fuel (Spent)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID);
	static DEPLETED_URANIUM: Item = new Item("Depleted Uranium", ItemCategory.POWER_AND_NUCLEAR, ItemState.LOOSE);
	static ENRICHED_URANIUM_4: Item = new Item("Enriched Uranium (4%)", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static ENRICHED_URANIUM_20: Item = new Item("Enriched Uranium (20%)", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static FISSION_PRODUCT: Item = new Item("Fission Product", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static MOX_ROD: Item = new Item("MOX Rod", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static PLUTONIUM: Item = new Item("Plutonium", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static REPROCESSED_URANIUM_1: Item = new Item("Reprocessed Uranium (1%)", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static RETIRED_WASTE: Item = new Item("Retired Waste", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static SPENT_FUEL: Item = new Item("Spent Fuel", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static SPENT_MOX: Item = new Item("Spent MOX", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static URANIUM_ROD: Item = new Item("Uranium Rod", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT);
	static YELLOW_CAKE: Item = new Item("Yellow Cake", ItemCategory.POWER_AND_NUCLEAR, ItemState.LOOSE);
	// #endregion

	// #region | Waste and Pollution
	static AIR_POLLUTION: Item = new Item("Air Pollution", ItemCategory.WASTE_AND_POLLUTION, ItemState.VIRTUAL);
	static BIOMASS: Item = new Item("Biomass", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE);
	static CARBON_DIOXIDE: Item = new Item("Carbon Dioxide", ItemCategory.WASTE_AND_POLLUTION, ItemState.FLUID);
	static EXHAUST: Item = new Item("Exhaust", ItemCategory.WASTE_AND_POLLUTION, ItemState.FLUID);
	static RADIATION: Item = new Item("Radiation", ItemCategory.WASTE_AND_POLLUTION, ItemState.VIRTUAL);
	static SLAG: Item = new Item("Slag", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE);
	static SLUDGE: Item = new Item("Sludge", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE);
	static TOXIC_SLURRY: Item = new Item("Toxic Slurry", ItemCategory.WASTE_AND_POLLUTION, ItemState.FLUID);
	static WASTE: Item = new Item("Waste", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE);
	static WATER_POLLUTION: Item = new Item("Water Pollution", ItemCategory.WASTE_AND_POLLUTION, ItemState.VIRTUAL);
	static WASTE_PRESSED: Item = new Item("Waste Pressed", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE);
	static WASTE_WATER: Item = new Item("Waste Water",ItemCategory.WASTE_AND_POLLUTION, ItemState.FLUID);
	// #endregion
};
