import { Application } from "pixi.js"
import { VixiOptions, nodeTypes, Sprite, Group, PossibleNodes } from "./types"

PIXI.utils.skipHello()

function listenOnResize(game: any) {
    window.addEventListener("resize", () => {
        game.renderer.resize(window.innerWidth, window.innerHeight)
    })
}

abstract class Component<P = {}, S = {}> {
    props?: Readonly<{ render?: boolean }> & Readonly<P>
    state?: S
    constructor() {
        console.log(this)
    }
    abstract render(): any
}

let activeGame: any
function render(App: any, htmlCanvas: HTMLCanvasElement): void {
    if (activeGame) {
        activeGame.stage.removeChildren()
    } else {
        activeGame = new Application({ backgroundColor: 0xfadd00, view: htmlCanvas })
        activeGame.renderer.view.style.position = "absolute"
        activeGame.renderer.view.style.display = "block"
        activeGame.renderer.autoResize = true
        activeGame.renderer.resize(window.innerWidth, window.innerHeight)
        listenOnResize(activeGame)
    }
    init(activeGame.stage, App)
}

// don't you just love a good state machine? provided by your local skooma dealer.

function init(container: any, Component: any) {
    const currentObject = new Component()
    const tree = currentObject.render()
    container.addChild(tree)
}

function draw(nodeName: any, props: any, ...children: any[]) {
    if (nodeName === "group") {
        const container = new PIXI.Container()
        children.forEach(child => {
            if (!child) return // TODO remove when all cases implemented
            container.addChild(child)
        })
        return container
    }
    if (nodeName === "sprite") {
        const sprite = PIXI.Sprite.fromImage(props.texture)
        sprite.x = props.x
        sprite.y = props.y
        return sprite
    }
    if (nodeName === "list") {
    }
    if (nodeName === "text") {
    }
    if (nodeName instanceof Component) {
    }
}

/*
  0. Set yourself globally as an active class
  1. contructor calls render
  2. render calls vixi.draw('sprite', props)
    3. if first
      4. draw function creates a sprite and returns sprite (to be used as children or in return)
      4. add yourself to the list that will be called when updating
    3. draw function update current sprite
  2. render calls vixi.draw(Class, props)
    3. If first - Class constructs itself, return obj.tree to be used as children
      4. add obj to the list that will be called when updating
    3. If already exists, call obj.update(newProps)

  group
  text
  list

  if render={false}

  tickers
  
*/

export default {
    render,
    draw,
    Component,
}
