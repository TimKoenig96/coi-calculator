import { ItemCount, ItemID } from "./Item";

export enum BuildingID {
	EXAMPLE_BUILDING_1 = 1,
	EXAMPLE_BUILDING_2 = 2,
	EXAMPLE_BUILDING_3 = 3
}

class Building {
	public readonly name: string;
	public readonly build_cost: ItemCount;
	public unlocked: boolean;

	constructor(
		name: string,
		build_cost: ItemCount,
		unlocked: boolean = false
	) {
		this.name = name;
		this.build_cost = build_cost;
		this.unlocked = unlocked;
	}
}

export const buildings: Record<BuildingID, Building> = {
	[BuildingID.EXAMPLE_BUILDING_1]: new Building("Example Building 1", {[ItemID.EXAMPLE_ITEM_3]: 10}),
	[BuildingID.EXAMPLE_BUILDING_2]: new Building("Example Building 2", {[ItemID.EXAMPLE_ITEM_3]: 20}),
	[BuildingID.EXAMPLE_BUILDING_3]: new Building("Example Building 3", {[ItemID.EXAMPLE_ITEM_3]: 40})
};
