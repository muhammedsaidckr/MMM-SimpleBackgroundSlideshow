Module.register("MMM-SimpleBackgroundSlideshow", {
    defaults: {
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
        let urls = this.config.urls.map((url) => {
            return {src: url};
        });
        if (notification === "DOM_OBJECTS_CREATED") {
            // eslint-disable-next-line no-undef
            $(document).ready(function () {
                // eslint-disable-next-line no-undef
                let $elmt = $("#vegas-slideshow");
                // eslint-disable-next-line no-undef
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
