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
	buildings?: BuildingID[],
	recipes?: RecipeID[],
	locked?: boolean
}

// All research data
const research_data: Record<ResearchID, ResearchData> = {
	[ResearchID.EXAMPLE_RESEARCH_1]: { name: "Example Research 1", level: LabLevel.RESEARCH_1 },
	[ResearchID.EXAMPLE_RESEARCH_2]: { name: "Example Research 2", level: LabLevel.RESEARCH_2, dependencies: [ResearchID.EXAMPLE_RESEARCH_1]},
	[ResearchID.EXAMPLE_RESEARCH_3]: { name: "Example Research 3", level: LabLevel.RESEARCH_3, dependencies: [ResearchID.EXAMPLE_RESEARCH_2]}
};

// Individual research
export class Research {
	public readonly name: string;
	public readonly level: LabLevel;
	private readonly dependencies: ResearchID[];
	public dependants: ResearchID[] = [];
	private readonly buildings: BuildingID[];
	private readonly recipes: RecipeID[];
	public locked: boolean;

	constructor({
		name,
		level,
		dependencies = [],
		buildings = [],
		recipes = [],
		locked = true
	}: ResearchData) {
		this.name = name;
		this.level = level;
		this.dependencies = dependencies;
		this.buildings = buildings;
		this.recipes = recipes;
		this.locked = locked;
	}

	// Unlock research
	public unlock(): void {
		if (!this.locked) return;

		// Unlock all requirements
		this.dependencies.forEach((research_id) => {
			researches[research_id].unlock();
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
			researches[research_id].lock();
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
}

// Storing dependencies
const dependencies: Map<ResearchID, ResearchID> = new Map<ResearchID, ResearchID>();

// Instantiate all researches
export const researches: Record<ResearchID, Research> = Object.fromEntries(

	// Filter enum for numerical IDs only
	Object.values(ResearchID)
		.filter(value => typeof value === "number")
		.map(research_id => {

			// Add all dependencies to dependencies map
			research_data[research_id].dependencies?.forEach(dependency_id => {
				dependencies.set(research_id, dependency_id);
			});
			return [ research_id, new Research(research_data[research_id]) ];
		})
) as Record<ResearchID, Research>;

// Set up all dependants now
dependencies.forEach((dependency, id) => {

	// ID depends on dependency
	researches[dependency].dependants.push(id);
});
