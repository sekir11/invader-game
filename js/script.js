const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ENEMY_NUM = 10;

let bulettes = [];

const plane = new Plane(10);
const enemies = [];
for (let i = 0; i < ENEMY_NUM; i++) {
  enemies.push(new Enemy(canvas));
}

document.body.addEventListener("mousemove", function (e) {
  const mX = e.pageX - 70;

  if (canvas.width - 100 > mX && 0 < mX) {
    plane.x = mX;
  }
});

document.body.addEventListener("click", function () {
  bulettes.push(new Bullet(plane.x + 50, plane.y));
});

function drawBullets() {
  bulettes = bulettes.filter((bullet) => bullet.y > 0);
  bulettes.forEach((bullet) => {
    bullet.draw(ctx);
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane.draw(ctx);
  enemies.forEach((enemy) => {
    enemy.randomWalk(canvas.width);
    enemy.draw(ctx);
  });
  drawBullets();

  requestAnimationFrame(draw);
}
draw();
