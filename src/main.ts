import { Game } from "./game";


/* Loads new game when window is loaded */
/* Game instantiated by the Game Class */
window.onload = () => {
  new Game("container", 1800, 1600);
};