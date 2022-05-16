const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ENEMY_NUM = 10;

let bulletes = [];
let enemyBullets = [];

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
  bulletes.push(new Bullet(plane.x + 50, plane.y, "player"));
});

function drawBullets() {
  bulletes = bulletes.filter((bullet) => bullet.y > 0);
  bulletes.forEach((bullet) => {
    bullet.draw(ctx);
  });
}

function drawEnemyBullets() {
  enemyBullets = enemyBullets.filter((bullet) => bullet.y < 500);
  enemyBullets.forEach((bullet) => bullet.draw(ctx));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane.draw(ctx);
  enemies.forEach((enemy) => {
    enemy.shoot(enemyBullets);
    enemy.randomWalk(canvas.width);
    enemy.draw(ctx);
  });
  drawEnemyBullets();
  drawBullets();

  enemyBullets = enemyBullets.filter((bullet) => {
    if (
      bullet.x > plane.x &&
      bullet.x < plane.x + plane.width &&
      bullet.y > plane.y
    ) {
      return false;
    } else {
      return true;
    }
  });

  bulletes = bulletes.filter((bullet) => {
    for (let i = 0; i < enemies.length; i++) {
      if (
        bullet.x > enemies[i].x &&
        bullet.x < enemies[i].x + enemies[i].width &&
        bullet.y < enemies[i].y
      ) {
        console.log("hit", i);
        return false;
      } else {
        console.log("not hit", i);
      }
    }
    return true;
  });

  requestAnimationFrame(draw);
}
draw();
