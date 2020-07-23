import C from './constants';

export const changeBoard = (board) => {
    return {
        type: C.CHANGE_BOARD,
        payload: board
    }
}