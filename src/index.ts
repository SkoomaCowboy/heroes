import { Vixi, Sprite, Group } from "./engine/index"

import state from "@state"

import Obstacle from "@assets/obstacle.png"

const view = <HTMLCanvasElement>document.getElementById("container")

Vixi(
    { view, state,  },
    Group(
        { x: 1, y: 55 },
        Sprite({ x: 150, y: 0, texture: Obstacle }),
        Sprite({ x: 450, y: 0, texture: Obstacle }),
        Sprite({ x: 940, y: 0, texture: Obstacle }),
        Sprite({ x: 750, y: 0, texture: Obstacle }),
    ),
    // Text({}),
    // Group({},

    // )
    // List(array, (val) =>)
    // If(bool, true, false)
)
