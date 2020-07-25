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

export const randomFillBoard = () => (dispatch, getState) => {
    let gridSize = getState().board.gridSize;
    let arraySize = gridSize * gridSize;
    let newBoard = new Array(arraySize).fill(false);
    let numberFilled = Math.floor(Math.random() * (arraySize - gridSize * 3 + 1) + gridSize * 2)

    for (let i = 0; i < numberFilled; i++) {
        let j = Math.floor(Math.random() * arraySize);
        newBoard[j] = true;
    }

    batch(() => {
        dispatch(startStop(true))
        dispatch(updateBoard(newBoard))
        dispatch(updateScore(0))
    })
}

export const clearBoard = () => (dispatch, getState) => {
    let gridSize = getState().board.gridSize;
    let arraySize = gridSize * gridSize;
    let newBoard = new Array(arraySize).fill(false);

    // replaces current board with an empty board, stops game
    batch(() => {
        dispatch((setCurrPattern("initial")));
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

export const setCurrPattern = pattern => {
    return {
        type: C.SELECT_PATTERN,
        payload: pattern
    }
}

export const savePattern = () => (dispatch, getState) => {
    let currDate = new Date()
    let currScore = getState().board.score
    let currBoard = [...getState().board.boardTiles]

    if (!getState().board.savedPatterns.some(p => JSON.stringify(p.board) === JSON.stringify(currBoard))) {
        batch(() => {
            dispatch({
                type: C.SAVE_PATTERN,
                payload: {
                    date: currDate,
                    board: currBoard,
                    score: currScore
                }
            })
            dispatch(setCurrPattern(currDate.toString()))
        })
    }
    if (getState().startstop) {
        dispatch(setCurrPattern('initial'))
    }
}

export const handleRadio = pattern => dispatch => {
    batch(() => {
        dispatch(updateBoard(pattern.board));
        dispatch(setCurrPattern(pattern.date.toString()));
        dispatch(updateScore(pattern.score));
    })
}

export const handlePatternDelete = date => (dispatch, getState) => {
    let currPattern = getState().board.currPattern;
    dispatch({
        type: C.DELETE_PATTERN,
        payload: date
    })
    // Move save as needed
    if (currPattern === date.toString()) {
        if (getState().board.savedPatterns.length > 0) {
            let nextPattern = getState().board.savedPatterns[0];
            dispatch(handleRadio(nextPattern))
        } else {
            dispatch(clearBoard())
        }
    }
}

export const handleTileClick = index => (dispatch, getState) => {
    let newBoard = [...getState().board.boardTiles];
    newBoard[index] = !newBoard[index];
    batch(() => {
        dispatch(updateBoard(newBoard));
        dispatch(startStop(true));
        dispatch(updateScore(0));
    })
}