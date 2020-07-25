import C from './constants';
import { batch } from 'react-redux';
import updateGame from '../GameUtil';

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
    let newBoard = new Array(gridSize).fill(false).map(() => new Array(gridSize).fill(false));

    let numberToFill = Math.floor(Math.random() * (gridSize * gridSize - 6 * gridSize) + 5 * gridSize)

    for (let i = 0; i < numberToFill; i++) {
        let x = Math.floor(Math.random() * gridSize);
        let y = Math.floor(Math.random() * gridSize);

        newBoard[x][y] = false;
    }

    batch(() => {
        dispatch(startStop(true))
        dispatch(updateBoard(newBoard))
        dispatch(updateScore(0))
    })
}

export const clearBoard = () => (dispatch, getState) => {
    let gridSize = getState().board.gridSize;
    let newBoard = new Array(gridSize).fill(false).map(() => new Array(gridSize).fill(false));

    // replaces current board with an empty board, stops game
    batch(() => {
        dispatch((setCurrPattern("initial")));
        dispatch(startStop(true))
        dispatch(updateBoard(newBoard))
        dispatch(updateScore(0))
    })
}

export const handleGridSlider = gridSize => dispatch => {

    dispatch(updateGridSize(gridSize))
    dispatch(clearBoard())
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
    let currBoard = getState().board

    if (!getState().board.savedPatterns.some(p => JSON.stringify(p.board) === JSON.stringify(currBoard))) {
        batch(() => {
            dispatch({
                type: C.SAVE_PATTERN,
                payload: {
                    date: currDate,
                    board: currBoard.boardTiles,
                    gridSize: currBoard.gridSize,
                    score: currBoard.score,
                    isTorus: currBoard.torusMode
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
        dispatch(toggleTorus(!pattern.isTorus));
        dispatch(updateGridSize(pattern.gridSize));
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

export const handleTileClick = (x, y) => (dispatch, getState) => {
    let newBoard = getState().board.boardTiles.map((row) => row.slice())
    newBoard[y][x] = !newBoard[y][x];
    batch(() => {
        dispatch(updateBoard(newBoard));
        dispatch(startStop(true));
        dispatch(updateScore(0));
    })
}

export const handleBoardTick = () => (dispatch, getState) => {
    const board = getState().board
    let { nextBoard, numAlive } = updateGame(board.boardTiles, board.gridSize, board.torusMode)

    batch(() => {
        dispatch(updateBoard(nextBoard))
        dispatch(incrementScore(board.score, numAlive))
    })
    if (numAlive === 0) {
        dispatch(startStop(true))
    }
}