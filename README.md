# p5.axes
A simple utility library for rendering x, y, and z axes.

# Usage
## Enabling the Library
To enable the library, simply import it. The axes will be rendered automatically after the draw function.

### How to Import
Import the library after p5.js.

``` html
<script src="https://cabbage63.github.io/p5.axes/lib/p5.axes.min.js"></script>
```

### Requirement
Your canvas must be created in `WEBGL` mode.
[createCanvas | p5.js reference](https://p5js.org/reference/p5/createCanvas/)

Example: 
``` js
	createCanvas(windowWidth, windowHeight, WEBGL);
```

## Disabling the Library
If you no longer need this feature, simply remove or comment out the import code for the library.
