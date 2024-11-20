// #region | Imports
import { Item } from "./item.js";
// #endregion


// #region | Enums
export const ItemCategories = Object.freeze({
	NATURAL_RESOURCE: "Natural Resource",
	SEMI_PROCESSED_RESOURCE: "Semi-Processed Resource",
	CRAFTED_MATERIAL: "Crafted Material",
	FOOD_AND_MEDICAL: "Food and Medical",
	PETROCHEMICAL: "Petrochemical",
	POWER_AND_NUCLEAR: "Power and Nuclear",
	WASTE_AND_POLLUTION: "Waste and Pollution"
});

export const ItemStates = Object.freeze({
	LOOSE: "Loose",
	UNIT: "Unit",
	FLUID: "Fluid",
	MOLTEN: "Molten",
	VIRTUAL: "Virtual",
	MECHANIC: "Mechanic"
});
// #endregion


// All items
export const Items = Object.freeze({

	// #region | Natural Resource
	COAL: new Item("Coal", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	COPPER_ORE: new Item("Copper Ore", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	DIRT: new Item("Dirt", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	GOLD_ORE: new Item("Gold Ore", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	IRON_ORE: new Item("Iron Ore", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	LIMESTONE: new Item("Limestone", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	QUARTZ: new Item("Quartz", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	ROCK: new Item("Rock", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	SAND: new Item("Sand", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	SEAWATER: new Item("Seawater", ItemCategories.NATURAL_RESOURCE, ItemStates.FLUID),
	SULFUR: new Item("Sulfur", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	URANIUM_ORE: new Item("Uranium Ore", ItemCategories.NATURAL_RESOURCE, ItemStates.LOOSE),
	WOOD: new Item("Wood", ItemCategories.NATURAL_RESOURCE, ItemStates.UNIT),
	WATER: new Item("Water", ItemCategories.NATURAL_RESOURCE, ItemStates.FLUID),
	// #endregion

	// #region | Semi-Processed Resource
	ACID: new Item("Acid", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.FLUID),
	BRINE: new Item("Brine", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.FLUID),
	BROKEN_GLASS: new Item("Broken Glass", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	CEMENT: new Item("Cement", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.UNIT),
	CHILLED_WATER: new Item("Chilled Water", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.FLUID),
	COPPER_ORE_CRUSHED: new Item("Copper Ore Crushed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	COPPER_SCRAP: new Item("Copper Scrap", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	COPPER_SCRAP_PRESSED: new Item("Copper Scrap Pressed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	GLASS_MIX: new Item("Glass Mix", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	GOLD_ORE_CONCENTRATE: new Item("Gold Ore Concentrate", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	GOLD_ORE_CRUSHED: new Item("Gold Ore Crushed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	GOLD_ORE_POWDER: new Item("Gold Ore Powder", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	GOLD_SCRAP: new Item("Gold Scrap", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	GOLD_SCRAP_PRESSED: new Item("Gold Scrap Pressed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	GRAPHITE: new Item("Graphite", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.UNIT),
	GRAVEL: new Item("Gravel", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	IMPURE_COPPER: new Item("Impure Copper", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.UNIT),
	IRON_ORE_CRUSHED: new Item("Iron Ore Crushed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	IRON_SCRAP: new Item("Iron Scrap", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	IRON_SCRAP_PRESSED: new Item("Iron Scrap Pressed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	MANUFACTURED_SAND: new Item("Manufactured Sand", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	MOLTEN_COPPER: new Item("Molten Copper", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.MOLTEN),
	MOLTEN_GLASS: new Item("Molten Glass", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.MOLTEN),
	MOLTEN_IRON: new Item("Molten Iron", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.MOLTEN),
	MOLTEN_SILICON: new Item("Molten Silicon", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.MOLTEN),
	MOLTEN_STEEL: new Item("Molten Steel", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.MOLTEN),
	QUARTZ_CRUSHED: new Item("Quartz Crushed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	RECYCLABLES: new Item("Recyclables", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	RECYCLABLES_PRESSED: new Item("Recyclables Pressed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	SALT: new Item("Salt", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	SLAG_CRUSHED: new Item("Slag Crushed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	URANIUM_ORE_CRUSHED: new Item("Uranium Ore Crushed", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	WOODCHIPS: new Item("Woodchips", ItemCategories.SEMI_PROCESSED_RESOURCE, ItemStates.LOOSE),
	// #endregion

	// #region | Crafted Material
	BRICKS: new Item("Bricks", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	CONCRETE_SLAB: new Item("Concrete Slab", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	CONSTRUCTION_PARTS: new Item("Construction Parts", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	CONSTRUCTION_PARTS_II: new Item("Construction Parts II", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	CONSTRUCTION_PARTS_III: new Item("Construction Parts III", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	CONSTRUCTION_PARTS_IV: new Item("Construction Parts IV", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	CONSUMER_ELECTRONICS: new Item("Consumer Electronics", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	COPPER: new Item("Copper", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	ELECTRONICS: new Item("Electronics", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	ELECTRONICS_II: new Item("Electronics II", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	ELECTRONICS_III: new Item("Electronics III", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	FILTER_MEDIA: new Item("Filter Media", ItemCategories.CRAFTED_MATERIAL, ItemStates.LOOSE),
	FLOWERS: new Item("Flowers", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	GLASS: new Item("Glass", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	GOLD: new Item("Gold", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	HOUSEHOLD_APPLIANCES: new Item("Household Appliances", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	HOUSEHOLD_GOODS: new Item("Household Goods", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	IRON: new Item("Iron", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	LAB_EQUIPMENT: new Item("Lab Equipment", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	LAB_EQUIPMENT_II: new Item("Lab Equipment II", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	LAB_EQUIPMENT_III: new Item("Lab Equipment III", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	LAB_EQUIPMENT_IV: new Item("Lab Equipment IV", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MAINTENANCE_I: new Item("Maintenance I", ItemCategories.CRAFTED_MATERIAL, ItemStates.VIRTUAL),
	MAINTENANCE_II: new Item("Maintenance II", ItemCategories.CRAFTED_MATERIAL, ItemStates.VIRTUAL),
	MAINTENANCE_III: new Item("Maintenance III", ItemCategories.CRAFTED_MATERIAL, ItemStates.VIRTUAL),
	MECHANICAL_PARTS: new Item("Mechanical Parts", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS: new Item("Microchips", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_1_A: new Item("Microchips Stage 1 A", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_1_B: new Item("Microchips Stage 1 B", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_1_C: new Item("Microchips Stage 1 C", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_2_A: new Item("Microchips Stage 2 A", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_2_B: new Item("Microchips Stage 2 B", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_2_C: new Item("Microchips Stage 2 C", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_3_A: new Item("Microchips Stage 3 A", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_3_B: new Item("Microchips Stage 3 B", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_3_C: new Item("Microchips Stage 3 C", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_4_A: new Item("Microchips Stage 4 A", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	MICROCHIPS_STAGE_4_B: new Item("Microchips Stage 4 B", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	PAPER: new Item("Paper", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	PCB: new Item("PCB", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	SERVER: new Item("Server", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	SILICON_POLY: new Item("Silicon (Poly)", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	SILICON_WAFER: new Item("Silicon Wafer", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	SOLAR_CELL: new Item("Solar Cell", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	SOLAR_CELL_MONO: new Item("Solar Cell Mono", ItemCategories.CRAFTED_MATERIAL, ItemStates.LOOSE),
	STEEL: new Item("Steel", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	VEHICLE_PARTS: new Item("Vehicle Parts", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	VEHICLE_PARTS_II: new Item("Vehicle Parts II", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	VEHICLE_PARTS_III: new Item("Vehicle Parts III", ItemCategories.CRAFTED_MATERIAL, ItemStates.UNIT),
	// #endregion

	// #region | Food and Medical
	ANESTHETICS: new Item("Anesthetics", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	ANIMAL_FEED: new Item("Animal Feed", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	ANTIBIOTICS: new Item("Antibiotics", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	BREAD: new Item("Bread", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	CAKE: new Item("Cake", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	CANOLA: new Item("Canola", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	CHICKEN_CARCASS: new Item("Chicken Carcass", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	COMPOST: new Item("Compost", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	COOKING_OIL: new Item("Cooking Oil", ItemCategories.FOOD_AND_MEDICAL, ItemStates.FLUID),
	CORN_MASH: new Item("Corn Mash", ItemCategories.FOOD_AND_MEDICAL, ItemStates.FLUID),
	CORN: new Item("Corn", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	DISINFECTANT: new Item("Disinfectant", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	EGGS: new Item("Eggs", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	ETHANOL: new Item("Ethanol", ItemCategories.FOOD_AND_MEDICAL, ItemStates.FLUID),
	FERTILITY: new Item("Fertility", ItemCategories.FOOD_AND_MEDICAL, ItemStates.FLUID),
	FERTILIZER_ORGANIC: new Item("Fertilizer (Organic)", ItemCategories.FOOD_AND_MEDICAL, ItemStates.FLUID),
	FERTILIZER_I: new Item("Fertilizer I", ItemCategories.FOOD_AND_MEDICAL, ItemStates.FLUID),
	FERTILIZER_II: new Item("Fertilizer II", ItemCategories.FOOD_AND_MEDICAL, ItemStates.FLUID),
	FLOUR: new Item("Flour", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	FOOD_PACK: new Item("Food Pack", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	FRUIT: new Item("Fruit", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	GREEN_MANURE: new Item("Green Manure", ItemCategories.FOOD_AND_MEDICAL, ItemStates.VIRTUAL),
	MEAT_TRIMMINGS: new Item("Meat Trimmings", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	MEAT: new Item("Meat", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	MEDICAL_EQUIPMENT: new Item("Medical Equipment", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	MEDICAL_SUPPLIES: new Item("Medical Supplies", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	MEDICAL_SUPPLIES_II: new Item("Medical Supplies II", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	MEDICAL_SUPPLIES_III: new Item("Medical Supplies III", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	MORPHINE: new Item("Morphine", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	POPPY: new Item("Poppy", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	POTATO: new Item("Potato", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	SAUSAGE: new Item("Sausage", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	SNACK: new Item("Snack", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	SOYBEAN: new Item("Soybean", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	SUGAR_CANE: new Item("Sugar Cane", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	SUGAR: new Item("Sugar", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	TOFU: new Item("Tofu", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	TREE_SAPLING: new Item("Tree Sapling", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	VEGETABLES: new Item("Vegetables", ItemCategories.FOOD_AND_MEDICAL, ItemStates.UNIT),
	WHEAT: new Item("Wheat", ItemCategories.FOOD_AND_MEDICAL, ItemStates.LOOSE),
	// #endregion

	// #region | Petrochemical
	CRUDE_OIL: new Item("Crude Oil", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	SOUR_WATER: new Item("Sour Water", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	HEAVY_OIL: new Item("Heavy Oil", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	MEDIUM_OIL: new Item("Medium Oil", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	DIESEL: new Item("Diesel", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	LIGHT_OIL: new Item("Light Oil", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	FUEL_GAS: new Item("Fuel Gas", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	NAPHTHA: new Item("Naphtha", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	AMMONIA: new Item("Ammonia", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	CHLORINE: new Item("Chlorine", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	HYDROGEN: new Item("Hydrogen", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	NITROGEN: new Item("Nitrogen", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	OXYGEN: new Item("Oxygen", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	HYDROGEN_FLUORIDE: new Item("Hydrogen Fluoride", ItemCategories.PETROCHEMICAL, ItemStates.FLUID),
	PLASTIC: new Item("Plastic", ItemCategories.PETROCHEMICAL, ItemStates.UNIT),
	RUBBER: new Item("Rubber", ItemCategories.PETROCHEMICAL, ItemStates.UNIT),
	// #endregion

	// #region | Power and Nuclear
	ELECTRICITY: new Item("Electricity", ItemCategories.POWER_AND_NUCLEAR, ItemStates.VIRTUAL),
	MECHANICAL_POWER: new Item("Mechanical Power", ItemCategories.POWER_AND_NUCLEAR, ItemStates.MECHANICAL),
	HEAT: new Item("Heat", ItemCategories.POWER_AND_NUCLEAR, ItemStates.VIRTUAL),
	STEAM_SUPER: new Item("Steam (Super)", ItemCategories.POWER_AND_NUCLEAR, ItemStates.FLUID),
	STEAM_HIGH: new Item("Steam (High)", ItemCategories.POWER_AND_NUCLEAR, ItemStates.FLUID),
	STEAM_LOW: new Item("Steam (Low)", ItemCategories.POWER_AND_NUCLEAR, ItemStates.FLUID),
	STEAM_DEPLETED: new Item("Steam Depleted", ItemCategories.POWER_AND_NUCLEAR, ItemStates.FLUID),
	BLANKET_FUEL: new Item("Blanket Fuel", ItemCategories.POWER_AND_NUCLEAR, ItemStates.FLUID),
	BLANKET_FUEL_ENRICHED: new Item("Blanket Fuel (Enriched)", ItemCategories.POWER_AND_NUCLEAR, ItemStates.FLUID),
	CORE_FUEL: new Item("Core Fuel", ItemCategories.POWER_AND_NUCLEAR, ItemStates.FLUID),
	CORE_FUEL_SPENT: new Item("Core Fuel (Spent)", ItemCategories.POWER_AND_NUCLEAR, ItemStates.FLUID),
	DEPLETED_URANIUM: new Item("Depleted Uranium", ItemCategories.POWER_AND_NUCLEAR, ItemStates.LOOSE),
	ENRICHED_URANIUM_4: new Item("Enriched Uranium (4%)", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	ENRICHED_URANIUM_20: new Item("Enriched Uranium (20%)", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	FISSION_PRODUCT: new Item("Fission Product", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	MOX_ROD: new Item("MOX Rod", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	PLUTONIUM: new Item("Plutonium", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	REPROCESSED_URANIUM_1: new Item("Reprocessed Uranium (1%)", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	RETIRED_WASTE: new Item("Retired Waste", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	SPENT_FUEL: new Item("Spent Fuel", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	SPENT_MOX: new Item("Spent MOX", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	URANIUM_ROD: new Item("Uranium Rod", ItemCategories.POWER_AND_NUCLEAR, ItemStates.UNIT),
	YELLOW_CAKE: new Item("Yellow Cake", ItemCategories.POWER_AND_NUCLEAR, ItemStates.LOOSE),
	// #endregion

	// #region | Waste and Pollution
	AIR_POLLUTION: new Item("Air Pollution", ItemCategories.WASTE_AND_POLLUTION, ItemStates.VIRTUAL),
	BIOMASS: new Item("Biomass", ItemCategories.WASTE_AND_POLLUTION, ItemStates.LOOSE),
	CARBON_DIOXIDE: new Item("Carbon Dioxide", ItemCategories.WASTE_AND_POLLUTION, ItemStates.FLUID),
	EXHAUST: new Item("Exhaust", ItemCategories.WASTE_AND_POLLUTION, ItemStates.FLUID),
	RADIATION: new Item("Radiation", ItemCategories.WASTE_AND_POLLUTION, ItemStates.VIRTUAL),
	SLAG: new Item("Slag", ItemCategories.WASTE_AND_POLLUTION, ItemStates.LOOSE),
	SLUDGE: new Item("Sludge", ItemCategories.WASTE_AND_POLLUTION, ItemStates.LOOSE),
	TOXIC_SLURRY: new Item("Toxic Slurry", ItemCategories.WASTE_AND_POLLUTION, ItemStates.FLUID),
	WASTE: new Item("Waste", ItemCategories.WASTE_AND_POLLUTION, ItemStates.LOOSE),
	WATER_POLLUTION: new Item("Water Pollution", ItemCategories.WASTE_AND_POLLUTION, ItemStates.VIRTUAL),
	WASTE_PRESSED: new Item("Waste Pressed", ItemCategories.WASTE_AND_POLLUTION, ItemStates.LOOSE),
	WASTE_WATER: new Item("Waste Water",ItemCategories.WASTE_AND_POLLUTION, ItemStates.FLUID),
	// #endregion
});

// All buildings
export const Buildings = Object.freeze({});

// All recipes
export const Recipes = Object.freeze({});

// All research
export const Researches = Object.freeze({});
