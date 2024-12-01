import { ItemCount, ItemID } from "./Item";

export enum BuildingID {}

export class Building {
	public readonly name: string;
	public readonly workers: number;
	public readonly electricity: number;
	public readonly computing: number;
	public readonly maintenance_1: number;
	public readonly maintenance_2: number;
	public readonly maintenance_3: number;
	public readonly build_cost: ItemCount;
	public locked: boolean;

	constructor(
		name: string,
		workers: number,
		electricity: number,
		computing: number,
		maintenance_1: number,
		maintenance_2: number,
		maintenance_3: number,
		build_cost: ItemCount,
		locked: boolean = true
	) {
		this.name = name;
		this.workers = workers;
		this.electricity = electricity;
		this.computing = computing;
		this.maintenance_1 = maintenance_1;
		this.maintenance_2 = maintenance_2;
		this.maintenance_3 = maintenance_3;
		this.build_cost = build_cost;
		this.locked = locked;
	}
}

export const buildings: Record<BuildingID, Building> = {};
