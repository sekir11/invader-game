const expect = chai.expect;

describe("Agent class", () => {
  it("should have each property", () => {
    const newAgent = new Agent(100, 150, 200, 250, "./img/enemy.gif");
    const image = new Image();
    image.src = "./img/enemy.gif";

    expect(newAgent.x).to.equal(100);
    expect(newAgent.y).to.equal(150);
    expect(newAgent.width).to.equal(200);
    expect(newAgent.height).to.equal(250);
    expect(newAgent.image.src).to.equal(image.src);
  });
});
