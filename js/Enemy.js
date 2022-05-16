class Enemy {
  constructor(canvas) {
    this.width = 100;
    this.height = 100;
    this.x = this.getRandom(0, canvas.width - this.width);
    this.y = this.getRandom(0, canvas.height / 3);
    this.image = new Image();
    this.image.src = "./img/enemy.gif";
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  randomWalk(canvasWidth) {
    if (0 < this.x && canvasWidth - this.width > this.x) {
      const randomNum = Math.floor(Math.random() * 100);
      if (randomNum > 50) {
        this.x++;
      } else {
        this.x--;
      }
    }
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
}
