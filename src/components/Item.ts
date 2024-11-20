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
	constructor(name: string, category: ItemCategory, state: ItemState) {
	}
}

export const Items: Record<string, Item> = {

	// #region | Natural Resource
	COAL: new Item("Coal", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	COPPER_ORE: new Item("Copper Ore", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	DIRT: new Item("Dirt", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	GOLD_ORE: new Item("Gold Ore", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	IRON_ORE: new Item("Iron Ore", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	LIMESTONE: new Item("Limestone", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	QUARTZ: new Item("Quartz", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	ROCK: new Item("Rock", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	SAND: new Item("Sand", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	SEAWATER: new Item("Seawater", ItemCategory.NATURAL_RESOURCE, ItemState.FLUID),
	SULFUR: new Item("Sulfur", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	URANIUM_ORE: new Item("Uranium Ore", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	WOOD: new Item("Wood", ItemCategory.NATURAL_RESOURCE, ItemState.UNIT),
	WATER: new Item("Water", ItemCategory.NATURAL_RESOURCE, ItemState.FLUID),
	// #endregion

	// #region | Semi-Processed Resource
	ACID: new Item("Acid", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.FLUID),
	BRINE: new Item("Brine", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.FLUID),
	BROKEN_GLASS: new Item("Broken Glass", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	CEMENT: new Item("Cement", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.UNIT),
	CHILLED_WATER: new Item("Chilled Water", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.FLUID),
	COPPER_ORE_CRUSHED: new Item("Copper Ore Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	COPPER_SCRAP: new Item("Copper Scrap", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	COPPER_SCRAP_PRESSED: new Item("Copper Scrap Pressed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	GLASS_MIX: new Item("Glass Mix", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	GOLD_ORE_CONCENTRATE: new Item("Gold Ore Concentrate", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	GOLD_ORE_CRUSHED: new Item("Gold Ore Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	GOLD_ORE_POWDER: new Item("Gold Ore Powder", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	GOLD_SCRAP: new Item("Gold Scrap", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	GOLD_SCRAP_PRESSED: new Item("Gold Scrap Pressed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	GRAPHITE: new Item("Graphite", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.UNIT),
	GRAVEL: new Item("Gravel", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	IMPURE_COPPER: new Item("Impure Copper", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.UNIT),
	IRON_ORE_CRUSHED: new Item("Iron Ore Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	IRON_SCRAP: new Item("Iron Scrap", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	IRON_SCRAP_PRESSED: new Item("Iron Scrap Pressed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	MANUFACTURED_SAND: new Item("Manufactured Sand", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	MOLTEN_COPPER: new Item("Molten Copper", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN),
	MOLTEN_GLASS: new Item("Molten Glass", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN),
	MOLTEN_IRON: new Item("Molten Iron", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN),
	MOLTEN_SILICON: new Item("Molten Silicon", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN),
	MOLTEN_STEEL: new Item("Molten Steel", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.MOLTEN),
	QUARTZ_CRUSHED: new Item("Quartz Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	RECYCLABLES: new Item("Recyclables", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	RECYCLABLES_PRESSED: new Item("Recyclables Pressed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	SALT: new Item("Salt", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	SLAG_CRUSHED: new Item("Slag Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	URANIUM_ORE_CRUSHED: new Item("Uranium Ore Crushed", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	WOODCHIPS: new Item("Woodchips", ItemCategory.SEMI_PROCESSED_RESOURCE, ItemState.LOOSE),
	// #endregion

	// #region | Crafted Material
	BRICKS: new Item("Bricks", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	CONCRETE_SLAB: new Item("Concrete Slab", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	CONSTRUCTION_PARTS: new Item("Construction Parts", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	CONSTRUCTION_PARTS_II: new Item("Construction Parts II", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	CONSTRUCTION_PARTS_III: new Item("Construction Parts III", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	CONSTRUCTION_PARTS_IV: new Item("Construction Parts IV", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	CONSUMER_ELECTRONICS: new Item("Consumer Electronics", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	COPPER: new Item("Copper", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	ELECTRONICS: new Item("Electronics", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	ELECTRONICS_II: new Item("Electronics II", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	ELECTRONICS_III: new Item("Electronics III", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	FILTER_MEDIA: new Item("Filter Media", ItemCategory.CRAFTED_MATERIAL, ItemState.LOOSE),
	FLOWERS: new Item("Flowers", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	GLASS: new Item("Glass", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	GOLD: new Item("Gold", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	HOUSEHOLD_APPLIANCES: new Item("Household Appliances", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	HOUSEHOLD_GOODS: new Item("Household Goods", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	IRON: new Item("Iron", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	LAB_EQUIPMENT: new Item("Lab Equipment", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	LAB_EQUIPMENT_II: new Item("Lab Equipment II", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	LAB_EQUIPMENT_III: new Item("Lab Equipment III", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	LAB_EQUIPMENT_IV: new Item("Lab Equipment IV", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MAINTENANCE_I: new Item("Maintenance I", ItemCategory.CRAFTED_MATERIAL, ItemState.VIRTUAL),
	MAINTENANCE_II: new Item("Maintenance II", ItemCategory.CRAFTED_MATERIAL, ItemState.VIRTUAL),
	MAINTENANCE_III: new Item("Maintenance III", ItemCategory.CRAFTED_MATERIAL, ItemState.VIRTUAL),
	MECHANICAL_PARTS: new Item("Mechanical Parts", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS: new Item("Microchips", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_1_A: new Item("Microchips Stage 1 A", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_1_B: new Item("Microchips Stage 1 B", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_1_C: new Item("Microchips Stage 1 C", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_2_A: new Item("Microchips Stage 2 A", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_2_B: new Item("Microchips Stage 2 B", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_2_C: new Item("Microchips Stage 2 C", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_3_A: new Item("Microchips Stage 3 A", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_3_B: new Item("Microchips Stage 3 B", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_3_C: new Item("Microchips Stage 3 C", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_4_A: new Item("Microchips Stage 4 A", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	MICROCHIPS_STAGE_4_B: new Item("Microchips Stage 4 B", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	PAPER: new Item("Paper", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	PCB: new Item("PCB", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	SERVER: new Item("Server", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	SILICON_POLY: new Item("Silicon (Poly)", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	SILICON_WAFER: new Item("Silicon Wafer", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	SOLAR_CELL: new Item("Solar Cell", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	SOLAR_CELL_MONO: new Item("Solar Cell Mono", ItemCategory.CRAFTED_MATERIAL, ItemState.LOOSE),
	STEEL: new Item("Steel", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	VEHICLE_PARTS: new Item("Vehicle Parts", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	VEHICLE_PARTS_II: new Item("Vehicle Parts II", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	VEHICLE_PARTS_III: new Item("Vehicle Parts III", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT),
	// #endregion

	// #region | Food and Medical
	ANESTHETICS: new Item("Anesthetics", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	ANIMAL_FEED: new Item("Animal Feed", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	ANTIBIOTICS: new Item("Antibiotics", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	BREAD: new Item("Bread", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	CAKE: new Item("Cake", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	CANOLA: new Item("Canola", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	CHICKEN_CARCASS: new Item("Chicken Carcass", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	COMPOST: new Item("Compost", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	COOKING_OIL: new Item("Cooking Oil", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID),
	CORN_MASH: new Item("Corn Mash", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID),
	CORN: new Item("Corn", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	DISINFECTANT: new Item("Disinfectant", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	EGGS: new Item("Eggs", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	ETHANOL: new Item("Ethanol", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID),
	FERTILITY: new Item("Fertility", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID),
	FERTILIZER_ORGANIC: new Item("Fertilizer (Organic)", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID),
	FERTILIZER_I: new Item("Fertilizer I", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID),
	FERTILIZER_II: new Item("Fertilizer II", ItemCategory.FOOD_AND_MEDICAL, ItemState.FLUID),
	FLOUR: new Item("Flour", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	FOOD_PACK: new Item("Food Pack", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	FRUIT: new Item("Fruit", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	GREEN_MANURE: new Item("Green Manure", ItemCategory.FOOD_AND_MEDICAL, ItemState.VIRTUAL),
	MEAT_TRIMMINGS: new Item("Meat Trimmings", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	MEAT: new Item("Meat", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	MEDICAL_EQUIPMENT: new Item("Medical Equipment", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	MEDICAL_SUPPLIES: new Item("Medical Supplies", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	MEDICAL_SUPPLIES_II: new Item("Medical Supplies II", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	MEDICAL_SUPPLIES_III: new Item("Medical Supplies III", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	MORPHINE: new Item("Morphine", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	POPPY: new Item("Poppy", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	POTATO: new Item("Potato", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	SAUSAGE: new Item("Sausage", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	SNACK: new Item("Snack", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	SOYBEAN: new Item("Soybean", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	SUGAR_CANE: new Item("Sugar Cane", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	SUGAR: new Item("Sugar", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	TOFU: new Item("Tofu", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	TREE_SAPLING: new Item("Tree Sapling", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	VEGETABLES: new Item("Vegetables", ItemCategory.FOOD_AND_MEDICAL, ItemState.UNIT),
	WHEAT: new Item("Wheat", ItemCategory.FOOD_AND_MEDICAL, ItemState.LOOSE),
	// #endregion

	// #region | Petrochemical
	CRUDE_OIL: new Item("Crude Oil", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	SOUR_WATER: new Item("Sour Water", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	HEAVY_OIL: new Item("Heavy Oil", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	MEDIUM_OIL: new Item("Medium Oil", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	DIESEL: new Item("Diesel", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	LIGHT_OIL: new Item("Light Oil", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	FUEL_GAS: new Item("Fuel Gas", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	NAPHTHA: new Item("Naphtha", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	AMMONIA: new Item("Ammonia", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	CHLORINE: new Item("Chlorine", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	HYDROGEN: new Item("Hydrogen", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	NITROGEN: new Item("Nitrogen", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	OXYGEN: new Item("Oxygen", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	HYDROGEN_FLUORIDE: new Item("Hydrogen Fluoride", ItemCategory.PETROCHEMICAL, ItemState.FLUID),
	PLASTIC: new Item("Plastic", ItemCategory.PETROCHEMICAL, ItemState.UNIT),
	RUBBER: new Item("Rubber", ItemCategory.PETROCHEMICAL, ItemState.UNIT),
	// #endregion

	// #region | Power and Nuclear
	ELECTRICITY: new Item("Electricity", ItemCategory.POWER_AND_NUCLEAR, ItemState.VIRTUAL),
	MECHANICAL_POWER: new Item("Mechanical Power", ItemCategory.POWER_AND_NUCLEAR, ItemState.MECHANICAL),
	HEAT: new Item("Heat", ItemCategory.POWER_AND_NUCLEAR, ItemState.VIRTUAL),
	STEAM_SUPER: new Item("Steam (Super)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID),
	STEAM_HIGH: new Item("Steam (High)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID),
	STEAM_LOW: new Item("Steam (Low)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID),
	STEAM_DEPLETED: new Item("Steam Depleted", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID),
	BLANKET_FUEL: new Item("Blanket Fuel", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID),
	BLANKET_FUEL_ENRICHED: new Item("Blanket Fuel (Enriched)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID),
	CORE_FUEL: new Item("Core Fuel", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID),
	CORE_FUEL_SPENT: new Item("Core Fuel (Spent)", ItemCategory.POWER_AND_NUCLEAR, ItemState.FLUID),
	DEPLETED_URANIUM: new Item("Depleted Uranium", ItemCategory.POWER_AND_NUCLEAR, ItemState.LOOSE),
	ENRICHED_URANIUM_4: new Item("Enriched Uranium (4%)", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	ENRICHED_URANIUM_20: new Item("Enriched Uranium (20%)", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	FISSION_PRODUCT: new Item("Fission Product", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	MOX_ROD: new Item("MOX Rod", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	PLUTONIUM: new Item("Plutonium", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	REPROCESSED_URANIUM_1: new Item("Reprocessed Uranium (1%)", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	RETIRED_WASTE: new Item("Retired Waste", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	SPENT_FUEL: new Item("Spent Fuel", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	SPENT_MOX: new Item("Spent MOX", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	URANIUM_ROD: new Item("Uranium Rod", ItemCategory.POWER_AND_NUCLEAR, ItemState.UNIT),
	YELLOW_CAKE: new Item("Yellow Cake", ItemCategory.POWER_AND_NUCLEAR, ItemState.LOOSE),
	// #endregion

	// #region | Waste and Pollution
	AIR_POLLUTION: new Item("Air Pollution", ItemCategory.WASTE_AND_POLLUTION, ItemState.VIRTUAL),
	BIOMASS: new Item("Biomass", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE),
	CARBON_DIOXIDE: new Item("Carbon Dioxide", ItemCategory.WASTE_AND_POLLUTION, ItemState.FLUID),
	EXHAUST: new Item("Exhaust", ItemCategory.WASTE_AND_POLLUTION, ItemState.FLUID),
	RADIATION: new Item("Radiation", ItemCategory.WASTE_AND_POLLUTION, ItemState.VIRTUAL),
	SLAG: new Item("Slag", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE),
	SLUDGE: new Item("Sludge", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE),
	TOXIC_SLURRY: new Item("Toxic Slurry", ItemCategory.WASTE_AND_POLLUTION, ItemState.FLUID),
	WASTE: new Item("Waste", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE),
	WATER_POLLUTION: new Item("Water Pollution", ItemCategory.WASTE_AND_POLLUTION, ItemState.VIRTUAL),
	WASTE_PRESSED: new Item("Waste Pressed", ItemCategory.WASTE_AND_POLLUTION, ItemState.LOOSE),
	WASTE_WATER: new Item("Waste Water",ItemCategory.WASTE_AND_POLLUTION, ItemState.FLUID),
	// #endregion
};
