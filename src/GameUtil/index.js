export default (board, gridSize) => {
    let nextBoard = []
    board.forEach((item, index) => {
        if (countAlive(index, board, gridSize) === 3) {
            nextBoard.splice(index, 1, true);
        } else if (item && countAlive(index, board, gridSize) === 2) {
            nextBoard.splice(index, 1, true);
        } else {
            nextBoard.splice(index, 1, false);
        }
    });
    return nextBoard
}

function countAlive(idx, board, gridSize) {
    let aliveCount = 0;
    if (idx - (gridSize + 1) >= 0 && idx - (gridSize + 1) <= (gridSize * gridSize - 1)
        && Math.floor((idx - (gridSize + 1)) / (gridSize)) !== Math.floor(idx / (gridSize))
        && board[idx - (gridSize + 1)]) {
        aliveCount++;
    }
    if ((idx - (gridSize) >= 0 && idx - (gridSize) <= (gridSize * gridSize - 1)
        && Math.floor((idx - (gridSize)) / (gridSize)) !== Math.floor(idx / (gridSize))
        && board[idx - (gridSize)])) {
        aliveCount++;
    }
    if (idx - (gridSize - 1) >= 0 && idx - (gridSize - 1) <= (gridSize * gridSize - 1)
        && Math.floor((idx - (gridSize - 1)) / (gridSize)) !== Math.floor(idx / (gridSize))
        && board[idx - (gridSize - 1)]) {
        aliveCount++;
    }
    if (idx - 1 >= 0 && idx - 1 <= (gridSize * gridSize - 1)
        && Math.floor((idx - 1) / (gridSize)) === Math.floor(idx / (gridSize))
        && board[idx - 1]) {
        aliveCount++;
    }
    if (idx + (gridSize + 1) >= 0 && idx + (gridSize + 1) <= (gridSize * gridSize - 1)
        && Math.floor((idx + (gridSize + 1)) / (gridSize)) !== Math.floor(idx / (gridSize))
        && board[idx + (gridSize + 1)]) {
        aliveCount++;
    }
    if ((idx + (gridSize) >= 0 && idx + (gridSize) <= (gridSize * gridSize - 1)
        && Math.floor((idx + (gridSize)) / (gridSize)) !== Math.floor(idx / (gridSize))
        && board[idx + (gridSize)])) {
        aliveCount++;
    }
    if (idx + (gridSize - 1) >= 0 && idx + (gridSize - 1) <= (gridSize * gridSize - 1)
        && Math.floor((idx + (gridSize - 1)) / (gridSize)) !== Math.floor(idx / (gridSize))
        && board[idx + (gridSize - 1)]) {
        aliveCount++;
    }
    if (idx + 1 >= 0 && idx + 1 <= (gridSize * gridSize - 1)
        && Math.floor((idx + 1) / (gridSize)) === Math.floor(idx / (gridSize))
        && board[idx + 1]) {
        aliveCount++;
    }
    return aliveCount;
}