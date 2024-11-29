import { ItemCount, ItemID } from "./Item";

export enum BuildingID {
	EXAMPLE_BUILDING_1 = 1,
	EXAMPLE_BUILDING_2 = 2,
	EXAMPLE_BUILDING_3 = 3
}

class Building {
	public readonly name: string;
	public readonly workers: number;
	public readonly electricity: number;
	public readonly computing: number;
	public readonly maintenance_1: number;
	public readonly maintenance_2: number;
	public readonly maintenance_3: number;
	public readonly build_cost: ItemCount;
	public unlocked: boolean;

	constructor(
		name: string,
		workers: number,
		electricity: number,
		computing: number,
		maintenance_1: number,
		maintenance_2: number,
		maintenance_3: number,
		build_cost: ItemCount,
		unlocked: boolean = false
	) {
		this.name = name;
		this.workers = workers;
		this.electricity = electricity;
		this.computing = computing;
		this.maintenance_1 = maintenance_1;
		this.maintenance_2 = maintenance_2;
		this.maintenance_3 = maintenance_3;
		this.build_cost = build_cost;
		this.unlocked = unlocked;
	}
}

export const buildings: Record<BuildingID, Building> = {
	[BuildingID.EXAMPLE_BUILDING_1]: new Building("Example Building 1", 2, 0.01, 0, 5, 0, 0, {[ItemID.EXAMPLE_ITEM_3]: 10}, true),
	[BuildingID.EXAMPLE_BUILDING_2]: new Building("Example Building 2", 4, 0.02, 0, 0, 2, 0, {[ItemID.EXAMPLE_ITEM_3]: 20}),
	[BuildingID.EXAMPLE_BUILDING_3]: new Building("Example Building 3", 10, 0.05, 2, 0, 0, 1, {[ItemID.EXAMPLE_ITEM_3]: 40})
};
