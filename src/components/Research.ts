enum ResearchID {

	// #region | 1xx Lab 1
	IRON_SMELTING_FROM_SCRAP = 101,
	ELECTRICITY = 102,
	CONSTRUCTION = 103,
	BASIC_FARMING = 104,
	SETTLEMENT_WASTE = 105,
	PIPES = 106,
	VEHICLES_AND_MINING = 107,
	MAINTENANCE = 108,
	TRADING_DOC = 109,
	TOOLS = 110,
	BRICKS_PRODUCTION = 111,
	BEACON = 112,
	BASIC_DIESEL = 113,
	COPPER_REFINEMENT = 114,
	SHIP_DOCK_REPAIR = 115,
	SYNTHETIC_RUBBER = 116,
	CAPTAINS_OFFICE = 117,
	CONSTRUCTION_II = 118,
	RAMP_FOR_VEHICLES = 119,
	BLUEPRINTS = 120,
	CONVEYOR_BELTS = 121,
	FUEL_STATION = 122,
	GROUNDWATER_PUMP = 123,
	IRRIGATED_FARMS = 124,
	CROP_ROTATION = 125,
	CONCRETE_PRODUCTION = 126,
	TRANSPORTS_BALANCING = 127,
	CONVEYOR_LIFTS = 128,
	ADVANCED_LOGISTICS_CONTROL = 129,
	SETTLEMENT_WATER = 130,
	EDICTS = 131,
	VEGETABLES_FARMING = 132,
	CUSTOM_SURFACES = 133,
	RETAINING_WALLS = 134,
	SMART_CONVEYOR_ROUTING = 135,
	RESEARCH_LAB_II = 136,
	TERRAIN_LEVELING = 137,
	HOUSING_II = 138,
	TREE_PLANTING = 139,
	STACKER = 140,
	// #endregion

	// TODO: Add remaining research
}

class Research {
	readonly id: string;
	readonly name: string;
	readonly unlocked_buildings: Building[];
	readonly unlocked_recipes: Recipe[];

	constructor(
		id: string,
		name: string,
		unlocked_buildings: Building[],
		unlocked_recipes: Recipe[]
	) {
		this.id = id;
		this.name = name;
		this.unlocked_buildings = unlocked_buildings;
		this.unlocked_recipes = unlocked_recipes;
	}
}

/*const researches: Record<ResearchID, Research> = {
	// TODO: Add researches
};*/
