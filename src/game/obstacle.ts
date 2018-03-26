import * as PIXI from "pixi.js";
import { state, evolveState } from "@state";
import Obstacle from "@assets/obstacle.png";

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage(Obstacle);

game.stage.addChildAt(bunny, 0);

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = state.x + 100;
bunny.y = state.y;

// Listen for animate update
game.ticker.add(function(delta) {
  // just for fun, let's rotate mr rabbit a little
  // delta is 1 if running at 100% performance
  // creates frame-independent transformation
  bunny.rotation += 0.1 * delta;
});
