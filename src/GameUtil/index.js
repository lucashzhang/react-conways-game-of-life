export default (board, gridSize, isTorus) => {
    let nextBoard = new Array(gridSize).fill(false).map(() => new Array(gridSize).fill(false));
    let numAlive = gridSize * gridSize;

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            let alivePops = countPop(y, x, board, gridSize, isTorus);
            if (board[y][x] && alivePops >= 2 && alivePops <= 3) {
                nextBoard[y][x] = true
            } else if (!board[y][x] && alivePops === 3) {
                nextBoard[y][x] = true
            } else {
                numAlive--;
            }
        }
    }
    return { nextBoard, numAlive };
}

function countPop(y, x, board, gridSize, isTorus) {

    return isAliveSpot(y - 1, x - 1, board, gridSize, isTorus)
        + isAliveSpot(y - 1, x + 0, board, gridSize, isTorus)
        + isAliveSpot(y - 1, x + 1, board, gridSize, isTorus)
        + isAliveSpot(y + 0, x - 1, board, gridSize, isTorus)
        + isAliveSpot(y + 0, x + 1, board, gridSize, isTorus)
        + isAliveSpot(y + 1, x - 1, board, gridSize, isTorus)
        + isAliveSpot(y + 1, x + 0, board, gridSize, isTorus)
        + isAliveSpot(y + 1, x + 1, board, gridSize, isTorus);
}

function isAliveSpot(y, x, board, gridSize, isTorus) {
    if (isTorus) {
        if (x >= gridSize) {
            x -= gridSize;
        } else if (x < 0) {
            x += gridSize;
        }
        if (y >= gridSize) {
            y -= gridSize;
        } else if (y < 0) {
            y += gridSize;
        }
    }
    if (y >= 0 && x < gridSize && y >= 0 && y < gridSize) {
        if (board[y][x]) {
            return 1;
        }
    }
    return 0;
}