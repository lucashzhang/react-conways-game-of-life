import React from 'react';
import { connect } from 'react-redux';
import { handleTileClick, handleBoardTick, savePattern } from '../ReduxUtil/actions';
import '../CSS/Board.css';

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
        this.setGridDimensions();
        this.updateCanvas();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isRunning !== this.props.isRunning && this.props.isRunning) {
            this.setState({
                interval: setInterval(() => this.updateBoard(), this.props.timerInterval)
            })
        } else if (prevProps.isRunning !== this.props.isRunning && !this.props.isRunning) {
            clearInterval(this.state.interval)
        }
        if (prevProps.gridSize !== this.props.gridSize || prevProps.board !== this.props.board) {
            this.setGridDimensions();
            this.updateCanvas();
        }
        if (prevProps.timerInterval !== this.props.timerInterval && this.props.isRunning) {
            clearInterval(this.state.interval);
            this.setState({
                interval: setInterval(() => this.updateBoard(), this.props.timerInterval)
            })
        }
    }

    updateBoard() {
        this.props.handleBoardTick()
        this.updateCanvas();
    }

    setGridDimensions() {
        this.gridHeight = (this.canvasRef.current.height / this.props.gridSize);
        this.squareHeight = (this.gridHeight * 0.9);
    }

    updateCanvas(x = null, y = null) {
        const ctx = this.canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);

        this.props.board.forEach((row, i) => {
            row.forEach((tile, j) => {
                ctx.fillStyle = tile || (y === i && x === j) ? "#4A473E" : "#B3AE99";
                ctx.fillRect(j * this.gridHeight, i * this.gridHeight, this.squareHeight, this.squareHeight);
            })
        });
    }

    calcIndex(e) {
        let x = Math.floor((e.clientX - e.target.offsetLeft) / this.gridHeight);
        let y = Math.floor((e.clientY - e.target.offsetTop) / this.gridHeight);
        return {x, y}
    }

    handleHover(e) {
        let {x, y} = this.calcIndex(e)
        this.updateCanvas(x, y);
    }

    async handleClick(e) {
        let {x, y} = this.calcIndex(e)
        await this.props.handleTileClick(x, y)

        this.updateCanvas();
    }

    render() {
        return <canvas
            id="lucas-game-board"
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
        timerInterval: state.timer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleTileClick(x, y) {
            dispatch(
                handleTileClick(x, y)
            )
        },
        handleBoardTick() {
            dispatch(
                handleBoardTick()
            )
        },
        savePattern(board) {
            dispatch(
                savePattern(board)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
