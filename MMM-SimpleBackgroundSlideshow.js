Module.register("MMM-SimpleBackgroundSlideshow", {
	defaults: {
		delay: 7000,
		timer: false,
		shuffle: true,
		firstTransition: "fade",
		firstTransitionDuration: 10000,
		transition: "random",
		animation: "random",
		transitionDuration: 10000,
		cover: true,
		color: "black",
		align: "top",
		valign: "center",
		urls: []
	},

	start() {
	},

	getDom() {
		let wrapper = document.createElement("div");
		wrapper.id = "vegas-slideshow"; // Assign an ID to the wrapper
		return wrapper;
	},

	getScripts() {
		return [
			"/modules/MMM-SimpleBackgroundSlideshow/node_modules/jquery/dist/jquery.min.js",
			"vegas.js"
		];
	},
	getStyles() {
		return ["vegas.css", "MMM-SimpleBackgroundSlideshow.css"];
	},

	notificationReceived(notification, payload, sender) {
		if (notification === "DOM_OBJECTS_CREATED") {
			this.initializeSlideshow(this.config);
		} else if (notification === "CHANGE_SLIDE_LIST") {
			// Update URLs if different
			if (JSON.stringify(this.config.urls) !== JSON.stringify(payload.urls)) {
				this.config.urls = payload.urls; // Update the URLs
				$("#vegas-slideshow").vegas("destroy"); // Destroy the current instance
				this.initializeSlideshow(this.config); // Reinitialize with new settings
			}
		}
	},

	initializeSlideshow(settings) {
		// Map URLs for the slideshow
		let urls = settings.urls.map(url => ({src: url}));

		console.log(settings);

		if(settings.color) {
			this.config.color = settings.color;
		}

		console.log(settings.transitionDuration || this.defaults.transitionDuration)

		// Use settings or fallback to defaults
		$(document).ready(() => {
			let vegas = $("#vegas-slideshow");
			vegas.vegas({ // Destroy previous instance before creating a new one
				delay: settings.delay || this.defaults.delay,
				timer: settings.timer && this.defaults.timer,
				shuffle: settings.shuffle && this.defaults.shuffle,
				firstTransition: settings.firstTransition || this.defaults.firstTransition,
				firstTransitionDuration: settings.firstTransitionDuration || this.defaults.firstTransitionDuration,
				transition: settings.transition || this.defaults.transition,
				animation: settings.animation || this.defaults.animation,
				transitionDuration: settings.transitionDuration || this.defaults.transitionDuration,
				cover: settings.cover && this.defaults.cover,
				color: settings.color || this.defaults.color,
				align: settings.align || this.defaults.align,
				valign: settings.valign || this.defaults.valign,
				slides: urls
			});
		});
	}
});
