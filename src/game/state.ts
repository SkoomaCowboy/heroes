import {setState} from 'lape'

export interface stateInterface {
    test: boolean
}

const defaultState = {
    test: false,
    deep: {
        nest: 'wow'
    }
}

setState(defaultState)