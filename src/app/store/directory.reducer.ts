import { Directory } from '../models/directory';
import { empty } from 'rxjs';
import * as directoryActions from './directory.actions';

export class State {
    entity: Directory;
    isLoading: boolean;
    isLoaded: boolean;
}

export const defaultState = (): State => ({
    entity: null ,
    isLoading: false ,
    isLoaded: false
});

export const initialState: State = defaultState();

export function reducer(state = initialState, action: directoryActions.Actions): State {
    switch (action.type) {

        case directoryActions.UPDATE_DIRECTORY_RESULTS:
            return {
                ...state,
                entity: action.payload
            };

        case directoryActions.GET_DIRECTORY_DATA:
            return {
                ...state,
               isLoading: true
            };

        case directoryActions.EXECUTE_SUCCESS:
            return {
                ...state,
               isLoading: false ,
               isLoaded: true
            };

        case directoryActions.EXECUTE_FAIL:
            return {
                ...state,
               isLoaded: false
            };

       default:
            return state;
    }
}
