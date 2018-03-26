import lape from "lape"

interface stateInterface {
    x: number
    y: number
}

const defaultState: stateInterface = {
    x: 200,
    y: 235,
}

export default lape(defaultState)
