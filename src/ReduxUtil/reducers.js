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

export const boardTiles = (state = new Array(10).fill(false).map(() => new Array(10).fill(false)), action) => {
    switch (action.type) {
        case C.UPDATE_BOARD:
            return action.payload;
        default:
            return state;
    }
}

export const gridSize = (state = 10, action) => {
    switch (action.type) {
        case C.UPDATE_SIZE:
            return action.payload;
        default:
            return state;
    }
}

export const savedPatterns = (state = [], action) => {
    switch (action.type) {
        case C.SAVE_PATTERN:
            return state.concat(action.payload).sort((a, b) => b.date - a.date)
        case C.DELETE_PATTERN:
            return state.filter(pattern => pattern.date !== action.payload)
        default:
            return state
    }
}

export const currPattern = (state = "initial", action) => {
    switch (action.type) {
        case C.SELECT_PATTERN:
            return action.payload;
        default:
            return state
    }
}

export const score = (state = 0, action) => {
    switch (action.type) {
        case C.UPDATE_SCORE:
            return action.payload;
        default:
            return state;
    }
}

export const timer = (state = 500, action) => {
    switch (action.type) {
        case C.UPDATE_TIMER:
            return action.payload;
        default:
            return state;
    }
}

export const torusMode = (state = false, action) => {
    switch (action.type) {
        case C.TOGGLE_TORUS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    startstop,
    timer,
    board: combineReducers({
        boardTiles,
        gridSize,
        score,
        savedPatterns,
        currPattern,
        torusMode,
    })
})