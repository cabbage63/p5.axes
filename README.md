# p5.axes
A simple utility library for rendering x, y, and z axes.

https://github.com/user-attachments/assets/4b532ae5-198c-49bf-9295-e06007b926c3

# Usage
## Enabling the Library
To enable the library, simply import it. The axes will be rendered automatically after the draw function.

### How to Import (HTML)
Import the library after p5.js.

``` html
<script src="https://cabbage63.github.io/p5.axes/lib/p5.axes.min.js"></script>
```

Example in OpenProcessing: https://openprocessing.org/sketch/2315746

### How to Import (OpenProcessing)
Please paste the URL of this library `https://cabbage63.github.io/p5.axes/lib/p5.axes.min.js` into the input field under [SKETCH] > [LIBRARIES] to add the library.

Example in OpenProcessing: https://openprocessing.org/sketch/2315735

![import_op](https://github.com/user-attachments/assets/5527ce83-cd2d-43db-8911-a0a6fb40020b)

### Requirement
Your canvas must be created in `WEBGL` mode.
[createCanvas | p5.js reference](https://p5js.org/reference/p5/createCanvas/)

Example: 
``` js
	createCanvas(windowWidth, windowHeight, WEBGL);
```

## Disabling the Library
If you no longer need this feature, simply remove or comment out the import code for the library.
