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

export interface SpriteOptions {
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

export interface SpriteNode extends SpriteOptions {
    type: nodeTypes
}

export interface GroupOptions {
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

export interface GroupNode extends GroupOptions {
    type: nodeTypes
    children: PossibleNodes[]
}

export type PossibleNodes = SpriteNode | GroupNode
