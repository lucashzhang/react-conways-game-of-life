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

export const clearBoard = gridSize => {
    let arraySize = gridSize * gridSize;
    let newBoard = new Array(arraySize).fill(false);

    return {
        type: C.UPDATE_BOARD,
        payload: newBoard
    }
}

export const handleGridSlider = gridSize => dispatch => {
    let newBoard = new Array(gridSize * gridSize).fill(false);

    batch(() => {
        dispatch(updateGridSize(gridSize))
        dispatch(updateBoard(newBoard))
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