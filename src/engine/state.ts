import { evolve, Evolver } from "ramda"

interface anyState<T> {
    state: T
    evolve: (transformations: any) => void
    listen: (callback: (state: T) => void) => () => void
}

export let allStates: anyState<any>[] = []

export default <StateInterface>(defaultState: StateInterface) => {
    type evolveState = (transformations: any) => void
    type callback = (state?: StateInterface, oldState?: StateInterface) => void
    type listen = (callback: callback) => () => void

    interface State {
        state: StateInterface
        evolve: evolveState
        listen: listen
    }

    const stateContainer: State = {
        state: defaultState,
        evolve: evolveState,
        listen,
    }

    allStates.push(stateContainer)

    let listenerList: callback[] = []
    function listen(callback: callback) {
        listenerList = listenerList.concat(callback)

        // listen usually returns a function that allows a user to stop listening
        return function unlisten() {
            listenerList = listenerList.filter(fn => fn !== callback)
        }
    }

    function evolveState(evolver: any) {
        const oldState = stateContainer.state

        stateContainer.state = evolve(evolver, stateContainer.state)

        listenerList.forEach(callback => callback(stateContainer.state, oldState))
    }

    return stateContainer
}
