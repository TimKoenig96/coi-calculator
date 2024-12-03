import { BuildingID } from "./Building";
import { ItemCount } from "./Item";

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
	input?: ItemCount[],
	output?: ItemCount[],
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
	private readonly produced_in: BuildingID;
	private readonly time: number;
	private readonly input: ItemCount[];
	private readonly output: ItemCount[];
	public locked: boolean;
	public active: boolean;

	constructor({
		produced_in,
		time,
		input = [],
		output = [],
		locked = true,
		active = true
	}: RecipeData) {
		this.produced_in = produced_in;
		this.time = time;
		this.input = input;
		this.output = output;
		this.locked = locked;
		this.active = active;
	}
}

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
