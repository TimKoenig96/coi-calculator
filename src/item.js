export class Item {

	// All items
	static #all_items = [];

	/**
	 * Instantiate an item
	 * @param {String} name Item name
	 * @param {keyof Item.category} category Item category
	 * @param {keyof Item.state} state Item state
	 */
	constructor(name, category, state) {

		// Set instance variables
		this.name = name;
		this.category = category;
		this.state = state;

		// Add to all items array
		Item.#all_items.push(this);
	}

	/**
	 * Get all items in the specified category
	 * @param {String} category Item category
	 * @returns {Item[]} Items or empty array
	 */
	static getItemsInCategory(category) {
		return Item.#all_items.filter((v) => v.category === category);
	}
}
