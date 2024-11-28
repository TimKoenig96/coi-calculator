export enum BuildingID {
	EXAMPLE_BUILDING_1 = 1,
	EXAMPLE_BUILDING_2 = 2,
	EXAMPLE_BUILDING_3 = 3
}

class Building {
	public readonly name: string;
	public unlocked: boolean;

	constructor(
		name: string,
		unlocked: boolean = false
	) {
		this.name = name;
		this.unlocked = unlocked;
	}
}

export const buildings: Record<BuildingID, Building> = {
	[BuildingID.EXAMPLE_BUILDING_1]: new Building("Example Building 1"),
	[BuildingID.EXAMPLE_BUILDING_2]: new Building("Example Building 2"),
	[BuildingID.EXAMPLE_BUILDING_3]: new Building("Example Building 3")
};
