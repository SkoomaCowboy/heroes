import * as PIXI from 'pixi.js'

export function setup(app, Obstacle) {

  for (let y = 0; y< 64; y++){
    for (let x = 0; x< 64; x++){
      let bunny = new PIXI.Sprite(
        PIXI.loader.resources[Obstacle].texture
      );
    
      
        // center the sprite's anchor point
        bunny.anchor.set(0.5);
    
        // move the sprite to the center of the screen
        bunny.x = x*64
        bunny.y = y*64
    
        app.stage.addChild(bunny);
    
    }
  }
    
  }
  