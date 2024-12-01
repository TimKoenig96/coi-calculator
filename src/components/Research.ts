import { BuildingID, buildings } from "./Building";
import { RecipeID, recipes } from "./Recipe";

// Unique numeric research IDs
export enum ResearchID {
	EXAMPLE_RESEARCH_1 = 1,
	EXAMPLE_RESEARCH_2 = 2,
	EXAMPLE_RESEARCH_3 = 3
}

// Research lab levels
export enum LabLevel {
	RESEARCH_1 = "Research I",
	RESEARCH_2 = "Research II",
	RESEARCH_3 = "Research III",
	RESEARCH_4 = "Research IV",
	RESEARCH_5 = "Research V"
}

// Structure of research data
interface ResearchData {
	name: string,
	level: LabLevel,
	dependencies?: ResearchID[],
	dependants?: ResearchID[],
	buildings?: BuildingID[],
	recipes?: RecipeID[],
	locked?: boolean
}

// All research data
const research_data: Record<ResearchID, ResearchData> = {
	[ResearchID.EXAMPLE_RESEARCH_1]: { name: "Example Research 1", level: LabLevel.RESEARCH_1 },
	[ResearchID.EXAMPLE_RESEARCH_2]: { name: "Example Research 2", level: LabLevel.RESEARCH_2 },
	[ResearchID.EXAMPLE_RESEARCH_3]: { name: "Example Research 3", level: LabLevel.RESEARCH_3 }
};

// All instantiated researches
export const researches: Map<ResearchID, Research> = new Map<ResearchID, Research>();

// Individual research
export class Research {
	public readonly name: string;
	public readonly level: LabLevel;
	private readonly dependencies: ResearchID[];
	private readonly dependants: ResearchID[];
	private readonly buildings: BuildingID[];
	private readonly recipes: RecipeID[];
	private locked: boolean;

	constructor({
		name,
		level,
		dependencies = [],
		dependants = [],
		buildings = [],
		recipes = [],
		locked = true
	}: ResearchData) {
		this.name = name;
		this.level = level;
		this.dependencies = dependencies;
		this.dependants = dependants;
		this.buildings = buildings;
		this.recipes = recipes;
		this.locked = locked;
	}

	// Get unlocked status of research
	public isLocked(): boolean {
		return this.locked;
	}

	// Unlock research
	public unlock(): void {
		if (!this.locked) return;

		// Unlock all requirements
		this.dependencies.forEach((research_id) => {
			researches.get(research_id)?.unlock();
		});

		// Unlock self
		this.locked = false;

		// Iterate buildings that this research unlocked and unlock them
		this.buildings.forEach((building_id) => {
			buildings[building_id].locked = false;
		});

		// Iterate recipes that this research unlocked and unlock them
		this.recipes.forEach((recipe_id) => {
			recipes[recipe_id].locked = false;
		});
	}

	// Lock research
	public lock(): void {
		if (this.locked) return;

		// Lock all that depend on current research
		this.dependants.forEach((research_id) => {
			researches.get(research_id)?.lock();
		});

		// Lock self
		this.locked = true;

		// Iterate buildings that this research unlocked and lock them
		this.buildings.forEach((building_id) => {
			buildings[building_id].locked = true;
		});

		// Iterate recipes that this research unlocked and unlock them
		this.recipes.forEach((recipe_id) => {
			recipes[recipe_id].locked = true;
		});
	}

	// Instantiate all researches
	public static instantiateAll(): void {
		for (const [id, data] of Object.entries(research_data)) {
			// TODO: Instantiate all. Good luck figuring out the ID, future me.
		}
	}
}
