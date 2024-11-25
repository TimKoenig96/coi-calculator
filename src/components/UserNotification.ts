export enum NotificationTypes {
	DEFAULT = "default",
	SUCCESS = "success",
	WARNING = "warning",
	ERROR = "error"
}

export class UserNotification {
	private element: HTMLElement;
	private timeout: number | null = null;
	private static readonly notifs_container: HTMLElement | null = document.getElementById("notifs_container");

	constructor(header: string, message: string, style: NotificationTypes, timer: number = 0) {

		// Create and configure new notification
		this.element = document.createElement("div");
		this.element.classList.add(style);
		this.element.innerHTML = `<h1>${header}</h1><p>${message}</p><br><a data-msg_close="" href="">Close message</a>`;

		// Add close link click listener
		if (this.element.lastChild)
			this.element.querySelector("[data-msg_close]")?.addEventListener("click", this.removeNotif.bind(this));

		// Set timeout if given one
		if (timer)
			this.timeout = window.setTimeout(this.removeNotif.bind(this), timer);

		// Append to notification container
		UserNotification.notifs_container?.appendChild(this.element);
	}

	private removeNotif(e: Event) {

		// Prevent appending pound to URL
		e?.preventDefault();

		// Remove the notification element
		this.element.remove();

		// Clear the timer if it was set
		if (this.timeout)
			window.clearTimeout(this.timeout);
	}
}
