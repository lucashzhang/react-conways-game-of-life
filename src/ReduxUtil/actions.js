import C from './constants';
import { batch } from 'react-redux';

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

export const updateGridSize = gridSize => {
    return {
        type: C.UPDATE_SIZE,
        payload: gridSize
    }
}

export const randomFillBoard = (gridSize) => {
    let arraySize = gridSize * gridSize;
    let newBoard = new Array(arraySize).fill(false);
    let numberFilled = Math.floor(Math.random() * (arraySize - gridSize * 3 + 1) + gridSize * 2)

    for (let i = 0; i < numberFilled; i++) {
        let j = Math.floor(Math.random() * arraySize);
        newBoard[j] = true;
    }

    return {
        type: C.UPDATE_BOARD,
        payload: newBoard
    }
}

export const clearBoard = gridSize => dispatch => {
    let arraySize = gridSize * gridSize;
    let newBoard = new Array(arraySize).fill(false);

    // replaces current board with an empty board, stops game
    batch(() => {
        dispatch(startStop(true))
        dispatch(updateBoard(newBoard))
        dispatch(updateScore(0))
    })
}

export const handleGridSlider = gridSize => dispatch => {
    let newBoard = new Array(gridSize * gridSize).fill(false);

    batch(() => {
        dispatch(updateGridSize(gridSize))
        dispatch(updateBoard(newBoard))
        dispatch(updateScore(0))
    })
}

export const toggleTorus = isTorus => {
    return {
        type: C.TOGGLE_TORUS,
        payload: !isTorus
    }
}

export const updateTimer = interval => {
    return {
        type: C.UPDATE_TIMER,
        payload: interval
    }
}

export const updateScore = score => {
    return {
        type: C.UPDATE_SCORE,
        payload: score
    }
}

export const incrementScore = (oldScore, numAlive) => {
    let newScore = oldScore + numAlive
    return {
        type: C.UPDATE_SCORE,
        payload: newScore
    }
}