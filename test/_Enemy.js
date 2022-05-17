describe("Enemy class", () => {
  it("should have each property", () => {
    const canvas = {
      width: 500,
      height: 500,
    };
    const newEnemy = new Enemy(canvas);
    const image = new Image();
    image.src = "./img/enemy.gif";

    expect(newEnemy.x >= 0 && newEnemy.x <= canvas.width - 100).to.be.true;
    expect(newEnemy.y >= 0 && newEnemy.y <= canvas.height / 3).to.be.true;
    expect(newEnemy.width).to.equal(100);
    expect(newEnemy.height).to.equal(100);
    expect(newEnemy.image.src).to.equal(image.src);
  });

  it("should walk to direction x", () => {
    const canvas = {
      width: 500,
      height: 500,
    };
    const newEnemy = new Enemy(canvas);
    const xPosition = newEnemy.x;
    newEnemy.randomWalk(canvas.width);
    expect(newEnemy.x !== xPosition).to.be.true;
  });

  it("should shoot bullet", () => {
    const canvas = {
        width: 500,
        height: 500,
      };
      const newEnemy = new Enemy(canvas);
      const bullets = [];
      for (let i = 0; i < 10; i++){
          newEnemy.shoot(bullets);
      }
      if (bullets.length > 0){
          for (let i = 0; i < bullets.length; i++){
              expect(bullets[i].x).to.equal(newEnemy.x)
              expect(bullets[i].y).to.equal(newEnemy.y)
              expect(bullets[i].type).to.equal(newEnemy.type)
          }
      }
  })
});
