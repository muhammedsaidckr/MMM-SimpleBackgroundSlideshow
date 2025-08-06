# MMM-SimpleBackgroundSlideshow

[![npm version](https://badge.fury.io/js/%40muhammedsaidckr%2Fmmm-simplebackgroundslideshow.svg)](https://www.npmjs.com/package/@muhammedsaidckr/mmm-simplebackgroundslideshow)
[![npm downloads](https://img.shields.io/npm/dt/%40muhammedsaidckr%2Fmmm-simplebackgroundslideshow.svg)](https://www.npmjs.com/package/@muhammedsaidckr/mmm-simplebackgroundslideshow)
[![npm license](https://img.shields.io/npm/l/%40muhammedsaidckr%2Fmmm-simplebackgroundslideshow.svg)](https://www.npmjs.com/package/@muhammedsaidckr/mmm-simplebackgroundslideshow)

A lightweight and customizable background slideshow module for MagicMirror² that displays rotating images with smooth transitions. Built using the Vegas jQuery plugin for professional slideshow effects.

## Features

- 🖼️ Customizable background slideshow with smooth transitions
- ⏱️ Configurable timing and delay settings
- 🎨 Multiple transition effects (fade, slideLeft, slideRight, etc.)
- 🎯 Animation options with random or specific effects
- 🎲 Shuffle and randomization support
- 🎨 Background color and alignment customization
- 🔄 Dynamic slideshow updates via notifications

## Installation

1. Navigate to your MagicMirror's modules directory:
   ```bash
   cd ~/MagicMirror/modules
   ```

2. Clone this repository:
   ```bash
   git clone https://github.com/muhammedsaidckr/MMM-SimpleBackgroundSlideshow.git
   ```

3. Install dependencies:
   ```bash
   cd MMM-SimpleBackgroundSlideshow
   npm install
   ```

4. Add the module to your `config/config.js` file (see Usage section).

## Usage

Add the module to your MagicMirror config:

```javascript
modules: [
    {
        module: "MMM-SimpleBackgroundSlideshow",
        position: "fullscreen_below", // Recommended for background slideshows
        config: {
            urls: [
                "https://example.com/image1.jpg",
                "https://example.com/image2.jpg",
                "path/to/local/image3.jpg"
            ],
            delay: 10000,
            transition: "fade",
            shuffle: true
        }
    }
]
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `urls` | Array | `[]` | **Required.** List of image URLs to display in the slideshow |
| `delay` | Number | `7000` | Time between slide transitions (milliseconds) |
| `timer` | Boolean | `false` | Show/hide timer indicator |
| `shuffle` | Boolean | `true` | Randomize slide order |
| `firstTransition` | String | `"fade"` | Transition effect for the first slide |
| `firstTransitionDuration` | Number | `10000` | Duration of first transition (milliseconds) |
| `transition` | String | `"random"` | Transition effect between slides (`"fade"`, `"slideLeft"`, `"slideRight"`, `"slideUp"`, `"slideDown"`, `"random"`) |
| `animation` | String | `"random"` | Animation effect during transitions |
| `transitionDuration` | Number | `10000` | Duration of transitions (milliseconds) |
| `cover` | Boolean | `true` | Scale images to cover entire container |
| `color` | String | `"black"` | Background color when images don't fill container |
| `align` | String | `"top"` | Horizontal alignment (`"left"`, `"center"`, `"right"`, `"top"`, `"bottom"`) |
| `valign` | String | `"center"` | Vertical alignment (`"left"`, `"center"`, `"right"`, `"top"`, `"bottom"`) |

## Dynamic Updates

The module supports dynamic slideshow updates via MagicMirror² notifications:

```javascript
// Send notification to update slideshow
this.sendNotification("CHANGE_SLIDE_LIST", {
    urls: ["new-image1.jpg", "new-image2.jpg"],
    delay: 5000,
    transition: "slideLeft"
});
```

## Positioning

For best results, use `position: "fullscreen_below"` to display the slideshow as a full-screen background behind other modules.

Other suitable positions for background content:
- `fullscreen_above`
- `fullscreen_below` (recommended)

## Overlay Images

The module includes sample overlay images in the `overlays/` directory (01.png through 09.png) that can be used for additional visual effects.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Muhammed Said Cakir**
- GitHub: [@muhammedsaidckr](https://github.com/muhammedsaidckr)
- npm: [@muhammedsaidckr/mmm-simplebackgroundslideshow](https://www.npmjs.com/package/@muhammedsaidckr/mmm-simplebackgroundslideshow)


