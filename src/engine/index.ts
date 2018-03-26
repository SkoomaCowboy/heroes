import * as Pixi from "pixi.js"
import {
    VixiOptions,
    nodeTypes,
    SpriteOptions,
    SpriteNode,
    GroupOptions,
    GroupNode,
    PossibleNodes,
} from "./types"
import render from "./render"

PIXI.utils.skipHello()
function listenOnResize(game: any) {
    window.addEventListener("resize", () => {
        game.renderer.resize(window.innerWidth, window.innerHeight)
    })
}

let activeGame: any
export function Vixi(vixiOptions: VixiOptions, ...nodes: PossibleNodes[]): void {
    if (activeGame) {
        vixiOptions.state._reset()
        activeGame.stage.removeChildren()
    } else {
        activeGame = new PIXI.Application(vixiOptions)
        activeGame.renderer.view.style.position = "absolute"
        activeGame.renderer.view.style.display = "block"
        activeGame.renderer.autoResize = true
        activeGame.renderer.resize(window.innerWidth, window.innerHeight)
        listenOnResize(activeGame)
    }
    render(activeGame.stage, nodes)
}

export function Sprite(spriteOptions: SpriteOptions): SpriteNode {
    return {
        type: nodeTypes.sprite,
        ...spriteOptions,
    }
}

export function Group(groupOptions: GroupOptions, ...nodes: PossibleNodes[]): GroupNode {
    return {
        type: nodeTypes.group,
        ...groupOptions,
        children: nodes,
    }
}

// export function Text(spriteOptions: TextOptions): Node {

// }

// export function List(array, iterator): Node{

// }

// export function If(predicate: boolean, whenTrue: , whenFalse): Node{

// }
