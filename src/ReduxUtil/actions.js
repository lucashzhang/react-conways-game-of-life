import C from './constants';

export const startStop = isRunning => {
    return {
        type: C.RUN_STOP,
        payload: !isRunning
    }
}

export const updateBoard = board => {
    return {
        type: C.UPDATE_BOARD,
        payload: board
    }
}