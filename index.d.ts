declare module "*.png" {
    const val: any
    export default val
}

interface sprite {
    x?: number
    y?: number
    width?: number
    height?: number
    anchor?: number
    rotation?: number
    alpha?: number
    blendMode?: number
    texture: string //Pixi.Texture
    filters?: string
    click?: () => void
    render?: boolean
}

interface group {
    x?: number
    y?: number
    width?: number
    height?: number
    anchor?: number
    rotation?: number
    alpha?: number
    blendMode?: number
    filters?: string
    click?: () => void
    children: JSX.Element | JSX.Element[]
}

interface list {
    data?: any[]
    component: "sprite" | any
}

interface text {
    children: string
}

declare namespace JSX {
    interface Element {
        name: string | ElementClass
        props: any
        children: Element[]
    }

    interface IntrinsicElements {
        sprite: sprite
        group: group
        list: list
        text: text
    }

    interface ElementClass {
        render: any
    }

    interface ElementAttributesProperty {
        props: Readonly<any> & { render: boolean }
    }

    interface ElementChildrenAttribute {
        children: {}
    }
}
declare const module: any

declare interface VixiComponentStrict<P = {}, S = {}> {
    props?: Readonly<P>
    state?: Readonly<S>
    onTick?(delta: number): void
    render(): any
}

declare interface VixiComponent extends VixiComponentStrict<any, any> {}

declare function h(): void
