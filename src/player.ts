import Konva from "konva";

/* Player class that represents movable character              */
/* This class is used in the Game class, to represent a player */

/* To instantiate a player, the constructor needs the starting position (x,y) */
export class Player {
  private sprite: Konva.Rect;
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