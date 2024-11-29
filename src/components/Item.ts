export enum ItemID {
	EXAMPLE_ITEM_1 = 1,
	EXAMPLE_ITEM_2 = 2,
	EXAMPLE_ITEM_3 = 3
}

enum ItemCategory {
	NATURAL_RESOURCE = 0,
	SEMI_PROCESSED_RESOURCE = 1,
	CRAFTED_MATERIAL = 2,
	FOOD_AND_MEDICAL = 3,
	PETROCHEMICAL = 4,
	POWER_AND_NUCLEAR = 5,
	WASTE_AND_POLLUTION = 6
}

enum ItemState {
	LOOSE = 0,
	UNIT = 1,
	FLUID = 2,
	MOLTEN = 3,
	MECHANICAL = 4,
	VIRTUAL = 5
}

export type ItemCount = Partial<{
	[key in ItemID]: number
}>;

class Item {
	public readonly name: string;
	private readonly category: ItemCategory;
	private readonly state: ItemState;

	constructor(
		name: string,
		category: ItemCategory,
		state: ItemState
	) {
		this.name = name;
		this.category = category;
		this.state = state;
	}
}

const items: Record<ItemID, Item> = {
	[ItemID.EXAMPLE_ITEM_1]: new Item("Example Item 1", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	[ItemID.EXAMPLE_ITEM_2]: new Item("Example Item 2", ItemCategory.NATURAL_RESOURCE, ItemState.LOOSE),
	[ItemID.EXAMPLE_ITEM_3]: new Item("Example Item 3", ItemCategory.CRAFTED_MATERIAL, ItemState.UNIT)
};
