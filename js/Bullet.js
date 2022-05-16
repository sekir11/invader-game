class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    setInterval(() => {
      this.y -= 1;
    }, 1);
  }

  draw(context) {
    context.beginPath();
    context.arc(
      this.x,
      this.y,
      10,
      (0 * Math.PI) / 180,
      (360 * Math.PI) / 180,
      false
    );
    context.fillStyle = "red";
    context.fill();
    context.closePath();
  }
}