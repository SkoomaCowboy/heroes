import { Application } from "pixi.js"
import { VixiOptions, nodeTypes, Sprite, Group, PossibleNodes } from "./types"

PIXI.utils.skipHello()

function listenOnResize(game: any) {
    window.addEventListener("resize", () => {
        game.renderer.resize(window.innerWidth, window.innerHeight)
    })
}

let activeGame: any
function render(Component: JSX.Element, htmlCanvas: HTMLCanvasElement): void {
    if (activeGame) {
        activeGame.stage.removeChildren()
    } else {
        activeGame = new Application({ backgroundColor: 0x000000, view: htmlCanvas })
        activeGame.renderer.view.style.position = "absolute"
        activeGame.renderer.view.style.display = "block"
        activeGame.renderer.autoResize = true
        activeGame.renderer.resize(window.innerWidth, window.innerHeight)
        listenOnResize(activeGame)
    }
    draw(activeGame.stage, Component)
}

function draw(container: any, props: any) {}

class Component<P = {}, S = {}> {
    props: Readonly<{ render?: boolean }> & Readonly<P>
    state: S
    render(): void
}

export default {
    render,
    draw,
    Component,
}
