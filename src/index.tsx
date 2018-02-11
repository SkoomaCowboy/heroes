import './state'
import {state, listen, evolveState} from 'lape'
import * as PIXI from 'pixi.js'
import {setup} from './setup'
import Obstacle from './design/obstacle.png'

import * as React from "react";
import { render } from "react-dom";
import { Sprite, Stage } from "react-pixi-fiber";

class Bunny extends React.Component{

  state = {
    x:200,
    y:200,
  }
  // componentDidMount = ()=> {
  //   setInterval(()=> this.setState({x: this.state.x+5, y: this.state.y+5}), 200)
  // }
  render() {
    return (
    <Sprite texture={PIXI.Texture.fromImage(Obstacle)} {...this.state} />
  );
  }
}

render(
  <Stage width={800} height={600} backgroundColor={0xFFFFFF}>
    <Bunny />
  </Stage>,
  document.getElementById("container")
);
