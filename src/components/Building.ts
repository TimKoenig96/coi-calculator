import { ItemCount } from "./Item";

// Unique numeric Building IDs
export enum BuildingID {
	EXAMPLE_BUILDING_1 = 1,
	EXAMPLE_BUILDING_2 = 2,
	EXAMPLE_BUILDING_3 = 3
}

export enum BuildingCategory {
	GENERAL_MACHINES = "General Machines",
	WATER_EXTRACTION_AND_PROCESSING = "Water Extraction & Processing",
	FOOD_PRODUCTION = "Food Production",
	METALLURGY_AND_SMELTING = "Metallurgy & Smelting",
	POWER_PRODUCTION = "Power Production",
	CRUDE_OIL_REFINING = "Crude Oil Refining",
	WASTE_MANAGEMENT = "Waste Management",
	BUILDINGS = "Buildings",
	HOUSING_AND_SERVICES = "Housing & Services"
}

// Structure of building data
interface BuildingData {
	name: string,
	category: BuildingCategory,
	build_cost: ItemCount,
	workers?: number,
	electricity?: number,
	computing?: number,
	maintenance_1?: number,
	maintenance_2?: number,
	maintenance_3?: number,
	locked?: boolean
}

// All building data
const building_data: Record<BuildingID, BuildingData> = {
	[BuildingID.EXAMPLE_BUILDING_1]: { name: "Example Building 1", category: BuildingCategory.METALLURGY_AND_SMELTING, build_cost: {} },
	[BuildingID.EXAMPLE_BUILDING_2]: { name: "Example Building 2", category: BuildingCategory.FOOD_PRODUCTION, build_cost: {} },
	[BuildingID.EXAMPLE_BUILDING_3]: { name: "Example Building 3", category: BuildingCategory.CRUDE_OIL_REFINING, build_cost: {} }
};

// Individual building
class Building {
	public readonly name: string;
	public readonly category: BuildingCategory;
	public readonly build_cost: ItemCount;
	public readonly workers: number;
	public readonly electricity: number;
	public readonly computing: number;
	public readonly maintenance_1: number;
	public readonly maintenance_2: number;
	public readonly maintenance_3: number;
	public locked: boolean;

	constructor({
		name,
		category,
		build_cost,
		workers = 0,
		electricity = 0,
		computing = 0,
		maintenance_1 = 0,
		maintenance_2 = 0,
		maintenance_3 = 0,
		locked = true
	}: BuildingData) {
		this.name = name;
		this.category = category;
		this.build_cost = build_cost;
		this.workers = workers;
		this.electricity = electricity;
		this.computing = computing;
		this.maintenance_1 = maintenance_1;
		this.maintenance_2 = maintenance_2;
		this.maintenance_3 = maintenance_3;
		this.locked = locked;
	}
}

// Instantiate all buildings
export const buildings: Record<BuildingID, Building> = Object.fromEntries(

	// Filter enum for numerical IDs only
	Object.values(BuildingID)
	.filter(value => typeof value === "number")
	.map(building_id => [
		building_id,
		new Building(building_data[building_id])
	])
) as Record<BuildingID, Building>;
