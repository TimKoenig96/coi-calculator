import { Building } from "./Building";
import { Items } from "./Item";

export class Recipe {
	static all_recipes: Recipe[] = [];

	readonly produced_in: Building;
	readonly time: number;
	readonly input: Partial<Record<keyof typeof Items, number>>;
	readonly output: Partial<Record<keyof typeof Items, number>>;

	constructor(
		produced_in: Building,
		time: number,
		input: Partial<Record<keyof typeof Items, number>>,
		output: Partial<Record<keyof typeof Items, number>>
	) {
		this.produced_in = produced_in;
		this.time = time;
		this.input = input;
		this.output = output;
	}
}
