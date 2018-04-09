import state from "./engine/state"

interface stateInterface {
    x: number
    y: number
}

const defaultState: stateInterface = {
    x: 100,
    y: 235,
}

export default state(defaultState)
