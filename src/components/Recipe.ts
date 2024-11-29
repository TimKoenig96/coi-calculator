import { Building, BuildingID, buildings } from "./Building";
import { ItemCount } from "./Item";

export enum RecipeID {}

class Recipe {
	public readonly producer: Building;
	public readonly time: number;
	public readonly input: ItemCount;
	public readonly output: ItemCount;
	public unlocked: boolean;
	public active: boolean;

	constructor(
		producer: BuildingID,
		time: number,
		input: ItemCount,
		output: ItemCount,
		unlocked: boolean = false,
		active: boolean = true
	) {
		this.producer = buildings[producer];
		this.time = time;
		this.input = input;
		this.output = output;
		this.unlocked = unlocked;
		this.active = active;
	}
}

export const recipes: Record<RecipeID, Recipe> = {};
