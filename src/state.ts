import {setState} from 'lape'

const defaultState = {
    test: false,
    deep: {
        nest: 'wow'
    }
}

setState(defaultState)