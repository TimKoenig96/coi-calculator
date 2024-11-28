export enum RecipeID {
	EXAMPLE_RECIPE_1 = 1,
	EXAMPLE_RECIPE_2 = 2,
	EXAMPLE_RECIPE_3 = 3
}

class Recipe {
	public unlocked: boolean;

	constructor(
		unlocked: boolean = false
	) {
		this.unlocked = unlocked;
	}
}

export const recipes: Record<RecipeID, Recipe> = {
	[RecipeID.EXAMPLE_RECIPE_1]: new Recipe(),
	[RecipeID.EXAMPLE_RECIPE_2]: new Recipe(),
	[RecipeID.EXAMPLE_RECIPE_3]: new Recipe()
};
