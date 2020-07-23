import C from './constants';
import { updateOneTick } from '../GameUtil'

export const runGame = (isRunning, board) => (dispatch => {
    console.log('dispatching')
    dispatch({
        type: C.RUN_STOP,
        payload: !isRunning
    })

    if (!isRunning) {
        updateOneTick();
    }
})

export const changeBoardTile = (toChange, board) => {

    let newBoard = [...board];
    newBoard[toChange] = !newBoard[toChange];

    return {
        type: C.CHANGE_BOARD,
        payload: newBoard
    }
}