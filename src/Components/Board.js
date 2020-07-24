import React from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../ReduxUtil/actions';
import updateGame from '../GameUtil'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interval: null,
            board: this.props.board
        }
        this.canvasRef = React.createRef();
        this.gridHeight = 0;
        this.squareHeight = 0;
    }

    componentDidMount() {
        this.gridHeight = Math.floor(this.canvasRef.current.height / this.props.gridSize);
        this.squareHeight = Math.floor(this.gridHeight * 0.9);
        this.updateCanvas();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isRunning !== this.props.isRunning && this.props.isRunning) {
            this.setState({
                interval: setInterval(() => this.updateBoard(this.state.board, this.props.gridSize), 50)
            })
        } else if (prevProps.isRunning !== this.props.isRunning && !this.props.isRunning) {
            clearInterval(this.state.interval)
            this.props.updateBoard(this.state.board)
        }
    }

    updateBoard(board, gridSize) {
        const newBoard = updateGame(board, gridSize)
        this.setState({
            board: newBoard
        })
        this.updateCanvas();
    }

    randomFill() {
        let randomBoard = [...this.state.board]
        for (let i = 0; i < randomBoard.length; i++) {
            if (Math.random() > 0.6) {
                randomBoard[i] = true
            }
        }
    }

    updateCanvas(idx = null) {
        const ctx = this.canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, 700, 700);

        this.state.board.forEach((tile, i) => {
            ctx.fillStyle = tile || (idx != null && idx === i) ? "#000000" : "#EEEEEE";
            ctx.fillRect((i % this.props.gridSize) * this.gridHeight, Math.floor(i / this.props.gridSize) * this.gridHeight, this.squareHeight, this.squareHeight);
        });
    }

    handleHover(e) {
        let xCoord = Math.floor((e.clientX - e.target.offsetLeft) / this.gridHeight);
        let yCoord = Math.floor((e.clientY - e.target.offsetTop) / this.gridHeight);
        let i = xCoord + yCoord * this.props.gridSize;
        console.log(xCoord, yCoord)

        this.updateCanvas(i);
    }

    async handleClick(e) {
        let xCoord = Math.floor((e.clientX - e.target.offsetLeft) / this.gridHeight);
        let yCoord = Math.floor((e.clientY - e.target.offsetTop) / this.gridHeight);
        xCoord = xCoord >= this.props.gridSize || xCoord < 0 ? -1 : xCoord;
        yCoord = yCoord >= this.props.gridSize || yCoord < 0 ? -1 : yCoord;
        let i = xCoord + yCoord * this.props.gridSize;

        let newBoard = [...this.state.board];
        newBoard[i] = !newBoard[i]
            await this.props.updateBoard(newBoard)
            await this.setState({
                board: newBoard
            })
            console.log("Clicking:", xCoord, yCoord);
            this.updateCanvas();
    }

    render() {
        return <canvas
            onMouseMove={(e) => this.handleHover(e)}
            onClick={(e) => this.handleClick(e)}
            onMouseLeave={() => this.updateCanvas()}
            ref={this.canvasRef}
            width={700}
            height={700}
        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.board.boardTiles,
        gridSize: state.board.gridSize,
        isRunning: state.startstop,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBoard(board) {
            dispatch(
                updateBoard(board)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
