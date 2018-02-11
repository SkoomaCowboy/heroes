declare module 'lape' {
    import { Evolver } from 'ramda'
   
    interface stateInterface {
        test: boolean,
        deep: {
            nest: string
        }
    }
 
    export var state: stateInterface

    export function setState(state: stateInterface): void;

    export function evolveState(transformations: Evolver<stateInterface>): void;
   
    export function listen(callback: (state: stateInterface) => void):()=> void
}