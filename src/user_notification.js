export class UserNotification {
	#valid_styles = ["default", "success", "warning", "error"];

	/**
	 * Create a new notification
	 * @param {String} header Message header
	 * @param {String} message Message to display
	 * @param {("default"|"success"|"warning"|"error")?} style Message style
	 * @param {Number?} timer Message auto-delete after specified ms. 0 for permanent.
	 */
	constructor(header, message, style = "default", timer = 0) {
		this.element;
		this.timeout;

		// Check correct style use
		if (!this.#valid_styles.includes(style)) style = "default";

		// Create the element
		this.#createNotif(header, message, style);

		// If element has timer, set timeout
		if (timer) this.timeout = setTimeout(this.#removeNotif.bind(this), timer);

		// Show notification
		this.#showNotif();
	}

	#createNotif(header, message, style) {
		this.element = document.createElement("div");
		if (style) this.element.classList.add(style);
		this.element.innerHTML = `<h1>${header}</h1><p>${message}</p><br><a href="">Close message</a>`;
		this.element.children[3].addEventListener("click", this.#removeNotif.bind(this));
	}

	#showNotif() {
		notifs_container.prepend(this.element);
	}

	#removeNotif(e) {
		e?.preventDefault();
		this.element.remove();
		clearTimeout(this.timeout);
	}
}
