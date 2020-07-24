import C from './constants';
import { combineReducers } from 'redux'

export const startstop = (state = false, action) => {
    switch (action.type) {
        case C.RUN_STOP:
            return action.payload;
        default:
            return state;
    }
}

export const boardTiles = (state = new Array(10000).fill(false), action) => {
    switch (action.type) {
        case C.UPDATE_BOARD:
            return action.payload;
        default:
            return state;
    }
}

export const gridSize = (state = 100, action) => {
    switch (action.type) {
        case C.UPDATE_SIZE:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    startstop,
    board: combineReducers({
        boardTiles,
        gridSize
    })
})