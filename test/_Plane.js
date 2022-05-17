describe("Plane class", () => {
  it("should have each property", () => {
    const newPlane = new Plane(100);
    const image = new Image();
    image.src = "./img/plane.jpeg";

    expect(newPlane.x).to.equal(100);
    expect(newPlane.y).to.equal(420);
    expect(newPlane.width).to.equal(100);
    expect(newPlane.height).to.equal(70);
    expect(newPlane.life).to.equal(3);
    expect(newPlane.image.src).to.equal(image.src);
  });
});
