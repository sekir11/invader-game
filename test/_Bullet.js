describe("Bullet class", () => {
  it("should have each property for player", async () => {
    const newBullet = new Bullet(100, 150, "player");

    expect(newBullet.x).to.equal(100);
    expect(newBullet.y).to.equal(150);
    expect(newBullet.type).to.equal("player");
    await delay(1);
    expect(newBullet.y < 150).to.be.true;
  });

  it("should have each property for enemy", async () => {
    const newBullet = new Bullet(100, 150, "enemy");

    expect(newBullet.x).to.equal(100);
    expect(newBullet.y).to.equal(150);
    expect(newBullet.type).to.equal("enemy");
    await delay(1);
    expect(newBullet.y > 150).to.be.true;
  });
});

function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}
