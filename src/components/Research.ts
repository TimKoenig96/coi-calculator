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

	// TODO: Replace with BuildingID[] and RecipeID[] respectively
	private readonly building_unlocks: [];
	private readonly recipe_unlocks: [];

	constructor(
		name: string,
		requirements: ResearchID[] = [],
		required_by: ResearchID[] = [],
		building_unlocks: [] = [], // FIXME
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

		// TODO: Iterate buildings and recipes that this research unlocked!
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

		// TODO: Iterate buildings and recipes that this research locked!
	}
}

const researches: Record<ResearchID, Research> = {
	[ResearchID.EXAMPLE_RESEARCH_1]: new Research("Example Research 1", [], [ResearchID.EXAMPLE_RESEARCH_3]),
	[ResearchID.EXAMPLE_RESEARCH_2]: new Research("Example Research 2", [], [ResearchID.EXAMPLE_RESEARCH_3]),
	[ResearchID.EXAMPLE_RESEARCH_3]: new Research("Example Research 3", [ResearchID.EXAMPLE_RESEARCH_1, ResearchID.EXAMPLE_RESEARCH_2])
};
