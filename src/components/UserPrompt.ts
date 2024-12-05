import { NotificationType, UserNotification } from "./UserNotification";

export interface PromptButton {
	label: string,
	resolves: boolean,
	closes: boolean,
	retval?: any,
	func?: Function
}

export class UserPrompt extends UserNotification {
	private readonly resolve: Function;

	constructor(
		resolve: Function,
		heading: string,
		message: string,
		style: NotificationType,
		buttons: PromptButton[]
	) {
		// Create the notification window without close button
		super(heading, message, style, undefined, false);

		// Store resolver
		this.resolve = resolve;

		// Set up buttons
		this.setupPromptButtons(buttons);
	}

	// Set up prompt buttons
	private setupPromptButtons(buttons: PromptButton[]): void {
		buttons.forEach((data) => {

			// Create button, set text and class
			const button: HTMLDivElement = document.createElement("div");
			button.textContent = data.label;
			button.classList.add("button");

			// Click listener
			button.addEventListener("click", () => {

				// Close notification
				if (data.closes) this.closeNotification.bind(this);

				// Resolve
				if (data.resolves) this.resolve(data.retval);

				// Run specified function
				if (data.func) data.func();
			});

			// Append button to message
			this.button_container.appendChild(button);
		});
	}

	// Create a user prompt
	public static prompt(
		heading: string,
		message: string,
		style: NotificationType = NotificationType.DEFAULT,
		buttons: PromptButton[]
	): Promise<any> {
		return new Promise((resolve) => {

			// Create the new notification
			new UserPrompt(resolve, heading, message, style, buttons);
		});
	}
}
