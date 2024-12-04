import { BuildingID, buildings } from "./Building";
import { RecipeID, recipes } from "./Recipe";

// Unique numeric research IDs
export enum ResearchID {
	EXAMPLE_RESEARCH_1 = 1,
	EXAMPLE_RESEARCH_2 = 2,
	EXAMPLE_RESEARCH_3 = 3
}

// Research lab levels
enum LabLevel {
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
	[ResearchID.EXAMPLE_RESEARCH_1]: { name: "Example Research 1", level: LabLevel.RESEARCH_1, recipes: [RecipeID.EXAMPLE_RECIPE_1], locked: false },
	[ResearchID.EXAMPLE_RESEARCH_2]: { name: "Example Research 2", level: LabLevel.RESEARCH_2, dependencies: [ResearchID.EXAMPLE_RESEARCH_1], recipes: [RecipeID.EXAMPLE_RECIPE_2] },
	[ResearchID.EXAMPLE_RESEARCH_3]: { name: "Example Research 3", level: LabLevel.RESEARCH_3, dependencies: [ResearchID.EXAMPLE_RESEARCH_2], recipes: [RecipeID.EXAMPLE_RECIPE_3] }
};

// Individual research
class Research {

	// Static variables
	private static researches_level_containers: Map<string, HTMLDivElement> = new Map<string, HTMLDivElement>();
	private static researches_lists: Map<string, HTMLDivElement> = new Map<string, HTMLDivElement>();

	// Non-static variables
	public readonly name: string;
	public readonly level: LabLevel;
	private readonly dependencies: ResearchID[];
	public dependants: ResearchID[] = [];
	private readonly buildings: BuildingID[];
	private readonly recipes: RecipeID[];
	public locked: boolean = true;
	private readonly button: HTMLDivElement;

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
		this.button = this.createResearchButton();
		if (!locked) this.unlock();
	}

	// Unlock research
	private unlock(): void {
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
			recipes[recipe_id].unlock();
		});

		// Set button class
		this.button.classList.replace("inactive", "active");
	}

	// Lock research
	private lock(): void {
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
			recipes[recipe_id].lock();
		});

		// Set button class
		this.button.classList.replace("active", "inactive");
	}

	// Click handler
	public toggleResearch(): void {
		if (this.locked) this.unlock();
		else this.lock();
	}

	// Create a research list for each research level for researches window
	public static initResearchesWindow(): void {

		// Get researches container
		const researches_container = document.getElementById("researches_container") as HTMLDivElement;

		// Iterate lab levels
		for (const label of Object.values(LabLevel)) {

			// Create elements
			const container: HTMLDivElement = document.createElement("div");
			const heading: HTMLHeadingElement = document.createElement("h1");
			const horizontal_rule: HTMLHRElement = document.createElement("hr");
			const list: HTMLDivElement = document.createElement("div");
	
			// Configure elements
			container.classList.add("researches_lists_container");
			heading.textContent = label;
			list.classList.add("flex_row", "flex_allow_wrap");
	
			// Append elements
			container.appendChild(heading);
			container.appendChild(horizontal_rule);
			container.appendChild(list);
			researches_container.appendChild(container);
	
			// Store elements in variables
			Research.researches_level_containers.set(label, container);
			Research.researches_lists.set(label, list);
		}
	}

	// Creating the button to toggle the research
	private createResearchButton(): HTMLDivElement {

		// Create and configure button
		const button: HTMLDivElement = document.createElement("div");
		button.textContent = this.name;
		button.classList.add("button", (this.locked ? "inactive" : "active"));

		// Add event listener
		button.addEventListener("click", this.toggleResearch.bind(this));

		// Append button to proper lab level list
		Research.researches_lists.get(this.level)?.appendChild(button);

		// Return created button
		return button;
	}
}

// Set up researches window lab levels
Research.initResearchesWindow();

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
