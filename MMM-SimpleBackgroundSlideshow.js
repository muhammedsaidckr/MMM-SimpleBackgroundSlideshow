Module.register("MMM-SimpleBackgroundSlideshow", {
	defaults: {
		urls: []
	},

	start () {
		this.currentUrlIndex = 0;
		this.config.identifier = this.identifier;
		// console.log(this.urls);
	},

	getDom () {
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
	notificationReceived (notification, payload, sender) {
		let urls = this.config.urls.map((url) => {
			return { src: url };
		});
		if (notification === "DOM_OBJECTS_CREATED") {
			console.log("DOM objects created");
			// eslint-disable-next-line no-undef
			$(document).ready(function() {
				// eslint-disable-next-line no-undef
				let $elmt = $("#vegas-slideshow");
				// console.log($elmt);
				// eslint-disable-next-line no-undef
				console.log(urls);
				$elmt.vegas({
					delay: 7000,
					timer: false,
					shuffle: true,
					firstTransition: "fade",
					firstTransitionDuration: 5000,
					transition: "random",
					animation: "random",
					transitionDuration: 5000,
					cover: true,
					color: "black",
					align: "top",
					valign: "center",
					slides: urls
				});
			});
		}
	}

});
