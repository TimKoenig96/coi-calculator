import { NotificationType, UserNotification } from "./UserNotification";


export interface PromptButton {
	label: string,
	retval: any
}

export class UserPrompt extends UserNotification {
	private readonly buttons: PromptButton[];

	// Constructor
	constructor(
		heading: string,
		message: string,
		style: NotificationType = NotificationType.DEFAULT,
		buttons: PromptButton[]
	) {
		// Create a notification without a close button
		super(heading, message, style, 0, false);

		// Save what buttons are specified
		this.buttons = buttons;
	}

	// Set up prompt buttons
	private setupPromptButtons(resolve: (value: any) => void): void {

		// Iterate buttons
		this.buttons.forEach((data) => {

			// Create button, set text, set class
			const button_element: HTMLDivElement = document.createElement("div");
			button_element.textContent = data.label;
			button_element.classList.add("button");

			// Close message on click
			button_element.addEventListener("click", this.closeNotification.bind(this));

			// Resolve with custom data on click
			button_element.addEventListener("click", () => resolve(data.retval));

			// Append button to button container
			this.button_container.appendChild(button_element);
		});
	}

	// Start the prompt
	public prompt(): Promise<any> {
		return new Promise((resolve) => {
			this.setupPromptButtons(resolve);
		});
	}
}
