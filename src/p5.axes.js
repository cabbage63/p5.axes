class P5Axes {
  constructor() {
    this.enabled = true;
    this.renderAxes = this.renderAxes.bind(this);
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  renderAxes() {
    if (!this.enabled) {
      return;
    }
    push();
    noFill();
    stroke("#550000");
    line(-width, 0, 0, 0, 0, 0);
    stroke("#ff0000");
    line(0, 0, 0, width, 0, 0);
    stroke("#005500");
    line(0, -height, 0, 0, 0, 0);
    stroke("#00ff00");
    line(0, 0, 0, 0, height, 0);
    stroke("#000055");
    line(0, 0, -width, 0, 0, 0);
    stroke("#0000ff");
    line(0, 0, 0, 0, 0, width);
    pop();
  }

  static createInstance() {
    if (!p5.prototype.p5Axes) {
      p5.prototype.p5Axes = new P5Axes();
      p5.prototype.registerMethod("post", p5.prototype.p5Axes.renderAxes);
    }
  }
}

P5Axes.createInstance();
