import { BuildingID, buildings } from "./Building";

enum ResearchID {
	EXAMPLE_RESEARCH_1 = 1,
	EXAMPLE_RESEARCH_2 = 2,
	EXAMPLE_RESEARCH_3 = 3
}

class Research {
	public readonly name: string;
	private unlocked: boolean;
	private readonly requirements: ResearchID[];
	private readonly required_by: ResearchID[];
	private readonly building_unlocks: BuildingID[];

	// TODO: Replace with RecipeID[]
	private readonly recipe_unlocks: [];

	constructor(
		name: string,
		requirements: ResearchID[] = [],
		required_by: ResearchID[] = [],
		building_unlocks: BuildingID[] = [],
		recipe_unlocks: [] = [], // FIXME
		unlocked: boolean = false
	) {
		this.name = name;
		this.requirements = requirements;
		this.required_by = required_by;
		this.building_unlocks = building_unlocks;
		this.recipe_unlocks = recipe_unlocks;
		this.unlocked = unlocked;
	}

	// Get unlocked status of research
	public isUnlocked(): boolean {
		return this.unlocked;
	}

	// Unlock research
	public unlock(): void {
		if (this.unlocked) return;

		// Unlock all requirements
		this.requirements.forEach((research_id) => {
			researches[research_id].unlock();
		});

		// Unlock self
		this.unlocked = true;

		// Iterate buildings that this research unlocked and unlock them
		this.building_unlocks.forEach((building_id) => {
			buildings[building_id].unlocked = true;
		});

		// TODO: Iterate recipes that this research unlocked!
	}

	// Lock research
	public lock(): void {
		if (!this.unlocked) return;

		// Lock all that depend on current research
		this.required_by.forEach((research_id) => {
			researches[research_id].lock();
		});

		// Lock self
		this.unlocked = false;

		// Iterate buildings that this research unlocked and lock them
		this.building_unlocks.forEach((building_id) => {
			buildings[building_id].unlocked = false;
		});

		// TODO: Iterate recipes that this research locked!
	}
}

const researches: Record<ResearchID, Research> = {
	[ResearchID.EXAMPLE_RESEARCH_1]: new Research("Example Research 1", [], [ResearchID.EXAMPLE_RESEARCH_3]),
	[ResearchID.EXAMPLE_RESEARCH_2]: new Research("Example Research 2", [], [ResearchID.EXAMPLE_RESEARCH_3]),
	[ResearchID.EXAMPLE_RESEARCH_3]: new Research("Example Research 3", [ResearchID.EXAMPLE_RESEARCH_1, ResearchID.EXAMPLE_RESEARCH_2])
};
