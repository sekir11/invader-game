const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let bulettes = [];

const plane = new Plane(10);

plane.draw(ctx);

document.body.addEventListener("mousemove", function (e) {
  const mX = e.pageX - 70;

  if (canvas.width - 100 > mX && 0 < mX) {
    plane.x = mX;
  }
});

document.body.addEventListener("click", function () {
  bulettes.push(new Bullet(plane.x + 50, plane.y));
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane.draw(ctx);
  drawBullets();

  requestAnimationFrame(draw);
}

draw();

function drawBullets() {
  bulettes = bulettes.filter((bullet) => bullet.y > 0);
  bulettes.forEach((bullet) => {
      bullet.draw(ctx);
    
  });
}


