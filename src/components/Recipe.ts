import { BuildingID } from "./Building";
import { ItemCount } from "./Item";

export enum RecipeID {}

class Recipe {
	public readonly producer: BuildingID;
	public readonly time: number;
	public readonly input: ItemCount;
	public readonly output: ItemCount;
	public locked: boolean;
	public active: boolean;

	constructor(
		producer: BuildingID,
		time: number,
		input: ItemCount,
		output: ItemCount,
		locked: boolean = true,
		active: boolean = true
	) {
		this.producer = producer;
		this.time = time;
		this.input = input;
		this.output = output;
		this.locked = locked;
		this.active = active;
	}
}

export const recipes: Record<RecipeID, Recipe> = {};
