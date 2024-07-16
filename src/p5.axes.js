p5.prototype.renderAxes = function () {
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
};

p5.prototype.registerMethod("post", p5.prototype.renderAxes);
