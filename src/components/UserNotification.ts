export enum NotificationType {
	DEFAULT = "default",
	SUCCESS = "success",
	WARNING = "warning",
	ERROR = "error"
}

export class UserNotification {
	private static readonly container = document.getElementById("notifs_container") as HTMLDivElement;
	protected readonly notification: HTMLDivElement;
	protected readonly button_container: HTMLDivElement;
	private readonly timeout: number | undefined;
	private readonly heading: string;
	private readonly message: string;
	private readonly style: NotificationType;

	// Constructor
	constructor(
		heading: string,
		message: string,
		style: NotificationType = NotificationType.DEFAULT,
		duration: number = 0,
		create_close_button: boolean = true
	) {
		this.heading = heading;
		this.message = message;
		this.style = style;

		// Create notification
		this.notification = this.createNotification();

		// Create button container
		this.button_container = this.createButtonContainer();

		// Create close button
		if (create_close_button) this.createCloseButton();

		// Show notification
		UserNotification.container.appendChild(this.notification);

		// Self-delete if duration was provided
		if (duration > 0) this.timeout = window.setTimeout(this.closeNotification.bind(this), duration);
	}

	// Create a notification
	private createNotification(): HTMLDivElement {

		// Main notification element
		const notification: HTMLDivElement = document.createElement("div");
		notification.classList.add(this.style);

		// Heading
		const heading: HTMLHeadingElement = document.createElement("h1");
		heading.textContent = this.heading;
		notification.appendChild(heading);
		
		// Text body
		const text_body: HTMLParagraphElement = document.createElement("p");
		text_body.innerHTML = this.message;
		notification.appendChild(text_body);

		// Return notification element
		return notification;
	}

	// Create the button container
	private createButtonContainer(): HTMLDivElement {
		const button_container: HTMLDivElement = document.createElement("div");
		button_container.classList.add("flex_row");
		this.notification.appendChild(button_container);

		return button_container;
	}

	// Creating the close button
	private createCloseButton(): void {

		// Create button, set text, set class
		const button: HTMLDivElement = document.createElement("div");
		button.textContent = "Close";
		button.classList.add("button");

		// Close notification on click
		button.addEventListener("click", this.closeNotification.bind(this));

		// Append button to button container
		this.button_container.appendChild(button);
	}

	// Close and delete notification
	protected closeNotification(): void {

		// Remove notification element
		this.notification.remove();

		// Clear timeout if set
		if (this.timeout) window.clearTimeout(this.timeout);
	}
}
