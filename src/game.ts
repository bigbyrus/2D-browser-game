import Konva from "konva";
import { Player } from "./player";
import { InputManager } from "./input";


/* Game class: Initialize a "game" by providing: */
/*   i) containerID (string)                     */
/*   i) width (int)                              */
/*   i) height (int)                             */

/* This game  */
export class Game {
  private stage: Konva.Stage;
  private layer: Konva.Layer;
  private player: Player;
  private input: InputManager;

  constructor(containerId: string, width: number, height: number) {
    this.stage = new Konva.Stage({ container: containerId, width, height });
    this.layer = new Konva.Layer();
    this.player = new Player(250, 250);
    this.input = new InputManager();

    this.layer.add(this.player.getSprite());
    this.stage.add(this.layer);

    requestAnimationFrame(this.gameLoop);
  }

  private gameLoop = () => {
    const { dx, dy } = this.input.getDirection();
    this.player.move(dx, dy);
    this.layer.batchDraw();
    requestAnimationFrame(this.gameLoop);
  };
}
