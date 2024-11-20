import { Items } from "./Item";

export class Building {
	constructor(
		name: string,
		workers: number,
		electricity: number,
		computing: number,
		maintenance_1: number,
		maintenance_2: number,
		maintenance_3: number,
		build_cost: Partial<Record<keyof typeof Items, number>>
	) {
	}
}

export class Buildings {

	// #region | General Machines
	static ASSEMBLY_I: Building = new Building("Assembly I", 4, 0.04, 0, 0, 0, 0, {CONSTRUCTION_PARTS: 25})
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