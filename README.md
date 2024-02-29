# MMM-SimpleBackgroundSlideshow
[![npm version](https://badge.fury.io/js/%muhammedsaidckr%2Fmmm-simplebackgroundslideshow.svg)](https://www.npmjs.com/package/@muhammedsaidckr/mmm-simplebackgroundslideshow)
[![npm downloads](https://img.shields.io/npm/dt/%muhammedsaidckr%2Fmmm-simplebackgroundslideshow.svg)](https://www.npmjs.com/package/@muhammedsaidckr/mmm-simplebackgroundslideshow)
[![npm license](https://img.shields.io/npm/l/%muhammedsaidckr%2Fmmm-simplebackgroundslideshow.svg)](https://www.npmjs.com/package/@muhammedsaidckr/mmm-simplebackgroundslideshow)


MMM-SimpleBackgroundSlideshow is a module for MagicMirror² that allows you to display a simple, customizable background slideshow on your MagicMirror². This module is designed to be lightweight and easy to configure, making it the perfect addition to any MagicMirror² setup.

## Installation
1. Navigate to your MagicMirror's modules directory and clone this repository:
    ```bash
    git clone https://github.com/muhammedsaidckr/MMM-SimpleBackgroundSlideshow.git
    ```
2. Configure the module in your config.js file.

## Usage

```js
modules: [
    {
        module: "MMM-SimpleBackgroundSlideshow",
        position: "fullscreen_below", // This can be any of the regions that support background content.
        config: {
            // See 'Configuration options' for more information.
        }
    }
]
```

### Configuration Options

`urls` => Array: List of image URLs to be displayed in the slideshow.
	
#### Contributing

Contributions are welcome! Please read the contributing guidelines before getting started.

#### License
MMM-SimpleBackgroundSlideshow is licensed under the MIT License.


