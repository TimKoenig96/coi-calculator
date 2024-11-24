enum BuildingID {

	// #region | 1xx General Machines
	ASSEMBLY_I = 101,
	ASSEMBLY_II = 102,
	ASSEMBLY_III = 103,
	ASSEMBLY_ROBOTIC = 104
	// #endregion

	// #region | 2xx Water Extraction & Processing
	// #endregion

	// #region | 3xx Food Production
	// #endregion

	// #region | 4xx Metallurgy & Smelting
	// #endregion

	// #region | 5xx Power Production
	// #endregion

	// #region | 6xx Crude Oil Refining
	// #endregion

	// #region | 7xx Waste Management
	// #endregion

	// #region | 9xx Buildings
	// #endregion

	// #region | 10xx Housing & Services
	// #endregion
}

class Building {
	readonly id: BuildingID;
	readonly name: string;
	readonly workers: number;
	readonly electricity: number;
	readonly computing: number;
	readonly maintenance_1: number;
	readonly maintenance_2: number;
	readonly maintenance_3: number;
	readonly build_cost: ItemQuantity[];

	constructor(
		id: BuildingID,
		name: string,
		workers: number,
		electricity: number,
		computing: number,
		maintenance_1: number,
		maintenance_2: number,
		maintenance_3: number,
		build_cost: ItemQuantity[]
	) {
		this.id = id;
		this.name = name;
		this.workers = workers;
		this.electricity = electricity;
		this.computing = computing;
		this.maintenance_1 = maintenance_1;
		this.maintenance_2 = maintenance_2;
		this.maintenance_3 = maintenance_3;
		this.build_cost = build_cost;
	}
}

const buildings: Record<BuildingID, Building> = {

	// #region | General Machines
	[BuildingID.ASSEMBLY_I]: new Building(BuildingID.ASSEMBLY_I, "Assembly I", 4, 0.04, 0, 0, 0, 0, [{item: ItemID.CONSTRUCTION_PARTS, quantity: 25}]),
	[BuildingID.ASSEMBLY_II]: new Building(BuildingID.ASSEMBLY_II, "Assembly II", 6, 0.08, 0, 2, 0, 0, [{item: ItemID.CONSTRUCTION_PARTS_II, quantity: 30}]),
	[BuildingID.ASSEMBLY_III]: new Building(BuildingID.ASSEMBLY_III, "Assembly III", 8, 0.15, 0, 4, 0, 0, [{item: ItemID.CONSTRUCTION_PARTS_III, quantity: 40}]),
	[BuildingID.ASSEMBLY_ROBOTIC]: new Building(BuildingID.ASSEMBLY_ROBOTIC, "Assembly (Robotic)", 2, 0.25, 4, 0, 4, 0, [{item: ItemID.CONSTRUCTION_PARTS_IV, quantity: 40}])
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

	// #region | Housing & Services
	// #endregion
};
