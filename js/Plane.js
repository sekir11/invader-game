const Agent = require("./Agent");

class Plane extends Agent {
  constructor(x) {
    super(x, 420, 100, 70, "./img/plane.jpeg");
    this.life = 3;
  }
}
module.exports = Plane;
