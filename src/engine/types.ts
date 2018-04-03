import * as Pixi from "pixi.js"

export interface VixiOptions extends Pixi.RendererOptions {
    state: any
}

export enum nodeTypes {
    sprite = "sprite",
    group = "group",
    text = "text",
    list = "list",
    if = "if",
}

export interface Sprite {
    x: number
    y: number
    width?: number
    height?: number
    anchor?: Pixi.ObservablePoint
    rotation?: number
    alpha?: number
    blendMode?: number
    texture: string //Pixi.Texture
    filters?: string
}

export interface Group {
    x: number
    y: number
    width?: number
    height?: number
    anchor?: Pixi.ObservablePoint
    rotation?: number
    alpha?: number
    blendMode?: number
    filters?: string
}

export type PossibleNodes = Sprite | Group