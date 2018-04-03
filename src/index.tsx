import vixi from "./engine/index"
import state from "@state"
import Obstacle from "@assets/obstacle.png"

const view = document.getElementById("container") as HTMLCanvasElement

interface Props {

}

class Test extends vixi.Component<Props> {
    state = {
        rotation: 0,
    }

    onTick(delta: number) {
        this.state.rotation += delta * 0.05
    }
    onClick() {
        this.state.rotation += 0.5
    }

    render() {
        const sprites = [
            {
                click: this.onClick,
                x: 15,
                y: 100,
                rotation: this.state.rotation,
                texture: Obstacle,
            },
        ]

        return (
            <group>
                {/* simple sprite */}
                <sprite
                    click={this.onClick}
                    x={15}
                    y={100}
                    rotation={this.state.rotation}
                    texture={Obstacle}
                />
                {/* sprite that should not be rendered */}
                <sprite
                    render={false}
                    click={this.onClick}
                    x={150}
                    y={100}
                    rotation={this.state.rotation}
                    texture={Obstacle}
                />
                {/* Component inside component example */}
                <Test render={false} />
                {/* groups can be nested */}
                <group>
                    <sprite />
                </group>
                {/* Dynamic list like particles (available only for sprites now) */}
                <list data={sprites} component={Test} />
                <text />
            </group>
        )
    }
}

vixi.render(<Test />, view)
