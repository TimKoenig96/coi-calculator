enum RecipeID {

	// NOTE:
	// This is just copied from Items.ts, meaning all
	// recipes will have to be adjusted. In the case of COAL,
	// it can be mined (on island and world map) as well as
	// produced via the coal maker. Each recipe needs an entry.

	// #region | 1xx Natural Resources
	// COAL = 101,
	// COPPER_ORE = 102,
	// DIRT = 103,
	// GOLD_ORE = 104,
	// IRON_ORE = 105,
	// LIMESTONE = 106,
	// QUARTZ = 107,
	// ROCK = 108,
	// SAND = 109,
	// SEAWATER = 110,
	// SULFUR = 111,
	// URANIUM_ORE = 112,
	// WOOD = 113,
	// WATER = 114,
	// #endregion

	// #region | 2xx Semi-Processed Resources
	// ACID = 201,
	// BRINE = 202,
	// BROKEN_GLASS = 203,
	// CEMENT = 204,
	// CHILLED_WATER = 205,
	// COPPER_ORE_CRUSHED = 206,
	// COPPER_SCRAP = 207,
	// COPPER_SCRAP_PRESSED = 208,
	// GLASS_MIX = 209,
	// GOLD_ORE_CONCENTRATE = 210,
	// GOLD_ORE_CRUSHED = 211,
	// GOLD_ORE_POWDER = 212,
	// GOLD_SCRAP = 213,
	// GOLD_SCRAP_PRESSED = 214,
	// GRAPHITE = 215,
	// GRAVEL = 216,
	// IMPURE_COPPER = 217,
	// IRON_ORE_CRUSHED = 218,
	// IRON_SCRAP = 219,
	// IRON_SCRAP_PRESSED = 220,
	// MANUFACTURED_SAND = 221,
	// MOLTEN_COPPER = 222,
	// MOLTEN_GLASS = 223,
	// MOLTEN_IRON = 224,
	// MOLTEN_SILICON = 225,
	// MOLTEN_STEEL = 226,
	// QUARTZ_CRUSHED = 227,
	// RECYCLABLES = 228,
	// RECYCLABLES_PRESSED = 229,
	// SALT = 230,
	// SLAG_CRUSHED = 231,
	// URANIUM_ORE_CRUSHED = 232,
	// WOODCHIPS = 233,
	// #endregion

	// #region | 3xx Crafted Materials
	// BRICKS = 301,
	// CONCRETE_SLAB = 302,
	// CONSTRUCTION_PARTS = 303,
	// CONSTRUCTION_PARTS_II = 304,
	// CONSTRUCTION_PARTS_III = 305,
	// CONSTRUCTION_PARTS_IV = 306,
	// CONSUMER_ELECTRONICS = 307,
	// COPPER = 308,
	// ELECTRONICS = 309,
	// ELECTRONICS_II = 310,
	// ELECTRONICS_III = 311,
	// FILTER_MEDIA = 312,
	// FLOWERS = 313,
	// GLASS = 314,
	// GOLD = 315,
	// HOUSEHOLD_APPLIANCES = 316,
	// HOUSEHOLD_GOODS = 317,
	// IRON = 318,
	// LAB_EQUIPMENT = 319,
	// LAB_EQUIPMENT_II = 320,
	// LAB_EQUIPMENT_III = 321,
	// LAB_EQUIPMENT_IV = 322,
	// MAINTENANCE_I = 323,
	// MAINTENANCE_II = 324,
	// MAINTENANCE_III = 325,
	// MECHANICAL_PARTS = 326,
	// // MICROCHIPS = 327,
	// MICROCHIPS_STAGE_1_A = 328,
	// MICROCHIPS_STAGE_1_B = 329,
	// MICROCHIPS_STAGE_1_C = 330,
	// MICROCHIPS_STAGE_2_A = 331,
	// MICROCHIPS_STAGE_2_B = 332,
	// MICROCHIPS_STAGE_2_C = 333,
	// MICROCHIPS_STAGE_3_A = 334,
	// MICROCHIPS_STAGE_3_B = 335,
	// MICROCHIPS_STAGE_3_C = 336,
	// MICROCHIPS_STAGE_4_A = 337,
	// MICROCHIPS_STAGE_4_B = 338,
	// PAPER = 339,
	// PCB = 340,
	// SERVER = 341,
	// SILICON_POLY = 342,
	// SILICON_WAFER = 343,
	// SOLAR_CELL = 344,
	// SOLAR_CELL_MONO = 345,
	// STEEL = 346,
	// VEHICLE_PARTS = 347,
	// VEHICLE_PARTS_II = 348,
	// VEHICLE_PARTS_III = 349,
	// #endregion

	// #region | 4xx Foods and Medicals
	// ANESTHETICS = 401,
	// ANIMAL_FEED = 402,
	// ANTIBIOTICS = 403,
	// BREAD = 404,
	// CAKE = 405,
	// CANOLA = 406,
	// CHICKEN_CARCASS = 407,
	// COMPOST = 408,
	// COOKING_OIL = 409,
	// CORN_MASH = 410,
	// CORN = 411,
	// DISINFECTANT = 412,
	// EGGS = 413,
	// ETHANOL = 414,
	// FERTILITY = 415,
	// FERTILIZER_ORGANIC = 416,
	// FERTILIZER_I = 417,
	// FERTILIZER_II = 418,
	// FLOUR = 419,
	// FOOD_PACK = 420,
	// FRUIT = 421,
	// GREEN_MANURE = 422,
	// MEAT_TRIMMINGS = 423,
	// MEAT = 424,
	// MEDICAL_EQUIPMENT = 425,
	// MEDICAL_SUPPLIES = 426,
	// MEDICAL_SUPPLIES_II = 427,
	// MEDICAL_SUPPLIES_III = 428,
	// MORPHINE = 429,
	// POPPY = 430,
	// POTATO = 431,
	// SAUSAGE = 432,
	// SNACK = 433,
	// SOYBEAN = 434,
	// SUGAR_CANE = 435,
	// SUGAR = 436,
	// TOFU = 437,
	// TREE_SAPLING = 438,
	// VEGETABLES = 439,
	// WHEAT = 440,
	// #endregion

	// #region | 5xx Petrochemicals
	// CRUDE_OIL = 501,
	// SOUR_WATER = 502,
	// HEAVY_OIL = 503,
	// MEDIUM_OIL = 504,
	// DIESEL = 505,
	// LIGHT_OIL = 506,
	// FUEL_GAS = 507,
	// NAPHTHA = 508,
	// AMMONIA = 509,
	// CHLORINE = 510,
	// HYDROGEN = 511,
	// NITROGEN = 512,
	// OXYGEN = 513,
	// HYDROGEN_FLUORIDE = 514,
	// PLASTIC = 515,
	// RUBBER = 516,
	// #endregion

	// #region | 6xx Power and Nuclears
	// ELECTRICITY = 601,
	// MECHANICAL_POWER = 602,
	// HEAT = 603,
	// STEAM_SUPER = 604,
	// STEAM_HIGH = 605,
	// STEAM_LOW = 606,
	// STEAM_DEPLETED = 607,
	// BLANKET_FUEL = 608,
	// BLANKET_FUEL_ENRICHED = 609,
	// CORE_FUEL = 610,
	// CORE_FUEL_SPENT = 611,
	// DEPLETED_URANIUM = 612,
	// ENRICHED_URANIUM_4 = 613,
	// ENRICHED_URANIUM_20 = 614,
	// FISSION_PRODUCT = 615,
	// MOX_ROD = 616,
	// PLUTONIUM = 617,
	// REPROCESSED_URANIUM_1 = 618,
	// RETIRED_WASTE = 619,
	// SPENT_FUEL = 620,
	// SPENT_MOX = 621,
	// URANIUM_ROD = 622,
	// YELLOW_CAKE = 623,
	// #endregion

	// #region | 7xx Wastes and Pollution
	// AIR_POLLUTION = 701,
	// BIOMASS = 702,
	// CARBON_DIOXIDE = 703,
	// EXHAUST = 704,
	// RADIATION = 705,
	// SLAG = 706,
	// SLUDGE = 707,
	// TOXIC_SLURRY = 708,
	// WASTE = 709,
	// WATER_POLLUTION = 710,
	// WASTE_PRESSED = 711,
	// WASTE_WATER = 712
	// #endregion
}

class Recipe {
	readonly id: string;
	readonly name: string;
	public is_active: boolean;
	readonly produced_in: Building;
	readonly time: number;
	readonly input: ItemQuantity[];
	readonly output: ItemQuantity[];

	constructor(
		id: string,
		name: string,
		is_active: boolean,
		produced_in: Building,
		time: number,
		input: ItemQuantity[],
		output: ItemQuantity[]
	) {
		this.id = id;
		this.name = name;
		this.is_active = is_active;
		this.produced_in = produced_in;
		this.time = time;
		this.input = input;
		this.output = output;
	}
}

const recipes: Record<RecipeID, Recipe> = {};
