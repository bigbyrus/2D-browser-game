import Konva from "konva";

export class Player {
  private sprite: Konva.Rect; // you can replace with Konva.Image
  private speed = 3;

  constructor(x: number, y: number) {
    this.sprite = new Konva.Rect({
      x,
      y,
      width: 40,
      height: 40,
      fill: "blue",
    });
  }

  getSprite() {
    return this.sprite;
  }

  move(dx: number, dy: number) {
    this.sprite.x(this.sprite.x() + dx * this.speed);
    this.sprite.y(this.sprite.y() + dy * this.speed);
  }
}