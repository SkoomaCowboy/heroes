import './state'
import {state, listen, evolveState} from 'lape'
import * as PIXI from 'pixi.js'
import Obstacle from './obstacle.png'

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb} );
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
// document.getElementById("container")
// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage(Obstacle)

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
});
