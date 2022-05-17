class Plane {
  constructor(x) {
    this.x = x;
    this.image = new Image();
    this.image.src = "./img/plane.jpeg";
    this.y = 420;
    this.width = 100;
    this.height = 70;
    this.life = 103;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
