class Bullet {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    setInterval(() => {
      const direction = type === "player" ? -1 : 1;
      this.y += direction;
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
    context.fillStyle = this.type === "player" ? "red" : "blue";
    context.fill();
    context.closePath();
  }
}
