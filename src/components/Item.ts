export enum ItemID {
	EXAMPLE_ITEM_1 = 1,
	EXAMPLE_ITEM_2 = 2,
	EXAMPLE_ITEM_3 = 3
}

export type ItemCount = Partial<{
	[key in ItemID]: number
}>;

class Item {
	public readonly name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const items: Record<ItemID, Item> = {
	[ItemID.EXAMPLE_ITEM_1]: new Item("Example Item 1"),
	[ItemID.EXAMPLE_ITEM_2]: new Item("Example Item 2"),
	[ItemID.EXAMPLE_ITEM_3]: new Item("Example Item 3")
};
