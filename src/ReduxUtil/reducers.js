import C from './constants';
import { combineReducers } from 'redux'


export const board = (state = 'Testing', action) => {
    switch (action.type) {
        case C.CHANGE_BOARD:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    board
})