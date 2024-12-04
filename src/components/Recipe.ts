import { BuildingCategory, BuildingID, buildings } from "./Building";
import { Item, ItemCount, ItemID, items } from "./Item";

// Unique numeric recipe IDs
export enum RecipeID {
	EXAMPLE_RECIPE_1 = 1,
	EXAMPLE_RECIPE_2 = 2,
	EXAMPLE_RECIPE_3 = 3
}

// Structure of recipe data
interface RecipeData {
	produced_in: BuildingID,
	time: number,
	input?: ItemCount,
	output?: ItemCount,
	locked?: boolean,
	active?: boolean
}

// All recipe data
const recipe_data: Record<RecipeID, RecipeData> = {
	[RecipeID.EXAMPLE_RECIPE_1]: { produced_in: BuildingID.EXAMPLE_BUILDING_1, time: 30 },
	[RecipeID.EXAMPLE_RECIPE_2]: { produced_in: BuildingID.EXAMPLE_BUILDING_2, time: 20 },
	[RecipeID.EXAMPLE_RECIPE_3]: { produced_in: BuildingID.EXAMPLE_BUILDING_3, time: 10 }
};

// Individual recipe
class Recipe {

	// Static variables
	public static recipes_level_containers: Map<string, HTMLDivElement> = new Map<string, HTMLDivElement>();
	public static recipes_lists: Map<string, HTMLDivElement> = new Map<string, HTMLDivElement>();

	// Non-static variables
	private readonly produced_in: BuildingID;
	private readonly time: number;
	private readonly input: ItemCount;
	private readonly output: ItemCount;
	public locked: boolean;
	public active: boolean;
	private readonly button: HTMLDivElement;

	constructor({
		produced_in,
		time,
		input = {},
		output = {},
		locked = true,
		active = true
	}: RecipeData) {
		this.produced_in = produced_in;
		this.time = time;
		this.input = input;
		this.output = output;
		this.locked = locked;
		this.active = active;
		this.button = this.createRecipeButton();
	}

	// Deactivate recipe
	private deactivate(): void {
		if (!this.active) return;
		this.active = false;
		this.button.classList.replace("active", "inactive");
	}

	// Activate recipe
	private activate(): void {
		if (this.active) return;
		this.active = true;
		this.button.classList.replace("inactive", "active");
	}

	// Lock recipe
	public lock(): void {
		if (this.locked) return;

		// Lock self
		this.locked = true;

		// Hide button
		this.button.classList.add("hidden");
	}

	// Unlock recipe
	public unlock(): void {
		if (!this.locked) return;

		// Unlock self
		this.locked = false;

		// Hide button
		this.button.classList.remove("hidden");
	}

	// Click handler
	public toggleRecipeActive(): void {
		if (this.active) this.deactivate();
		else this.activate();
	}

	// Create a recipe list for each building type for recipes window
	public static initRecipesWindow(): void {

		// Get recipes container
		const recipes_container = document.getElementById("recipes_container") as HTMLDivElement;

		// Iterate lab levels
		for (const label of Object.values(BuildingCategory)) {

			// Create elements
			const container: HTMLDivElement = document.createElement("div");
			const heading: HTMLHeadingElement = document.createElement("h1");
			const horizontal_rule: HTMLHRElement = document.createElement("hr");
			const list: HTMLDivElement = document.createElement("div");

			// Configure elements
			container.classList.add("recipes_lists_container");
			heading.textContent = label;
			list.classList.add("flex_row", "flex_allow_wrap");

			// Append elements
			container.appendChild(heading);
			container.appendChild(horizontal_rule);
			container.appendChild(list);
			recipes_container.appendChild(container);

			// Store elements in variables
			Recipe.recipes_level_containers.set(label, container);
			Recipe.recipes_lists.set(label, list);
		}
	}

	// Creating the button to toggle the recipe
	private createRecipeButton(): HTMLDivElement {

		// Create required elements
		const button: HTMLDivElement = document.createElement("div");
		const inputs: HTMLDivElement = document.createElement("div");
		const time: HTMLDivElement = document.createElement("div");
		const outputs: HTMLDivElement = document.createElement("div");

		// Configure all elements
		button.classList.add("button", "recipe", "flex", "flex_row", (this.active ? "active" : "inactive"));
		if (this.locked) button.classList.add("hidden");
		inputs.classList.add("flex", "flex_row");
		time.classList.add("flex", "flex_col");
		outputs.classList.add("flex", "flex_row");

		// Generate inputs
		Object.entries(this.input).forEach(([item_id, count]) => {
			const id: ItemID = Number(item_id);
			const item: Item = items[id];
			const item_name: string = item.name;

			const input: HTMLDivElement = document.createElement("div");
			const sprite: HTMLDivElement = document.createElement("div");
			const text: HTMLSpanElement = document.createElement("span");

			input.classList.add("flex", "flex_col");
			sprite.classList.add("sprite");
			sprite.textContent = "[sprite]";
			text.classList.add("sprite_label");
			text.textContent = count + "x " + item_name;

			input.appendChild(sprite);
			input.appendChild(text);
			inputs.appendChild(input);
		});

		// Time related
		time.innerHTML = `
			<span>${this.time}s</span>
			<svg viewBox="0 0 100 100">
				<path class="visible" d="M52,3L97,50L52,97L52,68L3,68L3,32L52,32Z"/>
			</svg>
		`;

		// Generate outputs
		Object.entries(this.output).forEach(([item_id, count]) => {
			const id: ItemID = Number(item_id);
			const item: Item = items[id];
			const item_name: string = item.name;

			const output: HTMLDivElement = document.createElement("div");
			const sprite: HTMLDivElement = document.createElement("div");
			const text: HTMLSpanElement = document.createElement("span");

			output.classList.add("flex", "flex_col");
			sprite.classList.add("sprite");
			sprite.textContent = "[sprite]";
			text.classList.add("sprite_label");
			text.textContent = count + "x " + item_name;

			output.appendChild(sprite);
			output.appendChild(text);
			outputs.appendChild(output);
		});

		// If no in- or outputs, display "(None)"
		if (Object.keys(this.input).length === 0) inputs.textContent = "(None)";
		if (Object.keys(this.output).length === 0) outputs.textContent = "(None)";

		// Append all elements to button
		button.appendChild(inputs);
		button.appendChild(time);
		button.appendChild(outputs);

		// Add event listener
		button.addEventListener("click", this.toggleRecipeActive.bind(this));

		// Append button to correct recipe list
		Recipe.recipes_lists.get(buildings[this.produced_in].category)?.appendChild(button);

		// Return created button
		return button;
	}
}

// Set up recipes window building types
Recipe.initRecipesWindow();

// Instantiate all recipes
export const recipes: Record<RecipeID, Recipe> = Object.fromEntries(

	// Filter enum for numerical IDs only
	Object.values(RecipeID)
		.filter(value => typeof value === "number")
		.map(recipe_id => [
			recipe_id,
			new Recipe(recipe_data[recipe_id])
		])
) as Record<RecipeID, Recipe>;
