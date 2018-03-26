import * as Pixi from "pixi.js"
import { PossibleNodes, nodeTypes, SpriteNode, GroupNode } from "./types"

export default function render(container: Pixi.Container, nodes: PossibleNodes[]) {
    nodes.forEach(node => {
        // TODO maybe rewrite to switch or iterate over nodeTypes enum
        if (node.type === nodeTypes.sprite) {
            const sprite = Pixi.Sprite.fromImage((<SpriteNode>node).texture)

            container.addChild(sprite)

            sprite.anchor.set(0.5)

            sprite.x = node.x
            sprite.y = node.y
        }
        if (node.type === nodeTypes.group) {
            const newContainer = new PIXI.Container()
            container.addChild(newContainer)

            newContainer.x = node.x
            newContainer.y = node.y

            render(newContainer, (<GroupNode>node).children)
        }
    })
}
