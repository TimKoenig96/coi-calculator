import { Settings } from "./components/Settings";

class Script {
	private readonly settings: Settings;

	// Constructor
	constructor() {

		// Create settings object
		this.settings = new Settings();
	}

	// Initialize the script
	public static initialize(): void {new Script()}
}

Script.initialize();
