const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ENEMY_NUM = 10;

let bulletes;
let enemyBullets;
let score;

let plane;
let enemies;

init();

function init() {
  bulletes = [];
  enemyBullets = [];
  score = 0;

  plane = new Plane(10);
  enemies = [];
  for (let i = 0; i < ENEMY_NUM; i++) {
    enemies.push(new Enemy(canvas));
  }

  draw();
}

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", function () {
  init();
});

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
  judgeEnemyBulletesCollision();
  judgePlaneBulletesCollision();
  drawScore();
  drawLife();

  if (plane.life > 0) {
    requestAnimationFrame(draw);
  }
}

function judgeEnemyBulletesCollision() {
  enemyBullets = enemyBullets.filter((bullet) => {
    if (
      bullet.x > plane.x &&
      bullet.x < plane.x + plane.width &&
      bullet.y > plane.y
    ) {
      plane.life--;
      judgePlaneDefeat();

      return false;
    } else {
      return true;
    }
  });
}

function judgePlaneBulletesCollision() {
  bulletes = bulletes.filter((bullet) => {
    for (let i = 0; i < enemies.length; i++) {
      if (
        bullet.x > enemies[i].x &&
        bullet.x < enemies[i].x + enemies[i].width &&
        bullet.y < enemies[i].y + 70
      ) {
        score++;
        enemies.splice(i, 1);
        return false;
      } else {
      }
    }
    return true;
  });
}

function drawScore() {
  ctx.font = "24px serif";
  ctx.fillStyle = "black";
  ctx.fillText("SCORE: " + score, 10, 25);
}

function drawLife() {
  ctx.font = "24px serif";
  ctx.fillStyle = "black";
  ctx.fillText("LIFE: " + plane.life, 400, 25);
}

function judgePlaneDefeat() {
  if (plane.life === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "48px serif";
    ctx.fillStyle = "black";
    ctx.fillText("GAME OVER", 100, 250);
  }
}
