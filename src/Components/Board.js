import React from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../ReduxUtil/actions';
import updateGame from '../GameUtil';
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
                interval: setInterval(() => this.updateBoard(this.props.board, this.props.gridSize), this.props.timerInterval)
            })
        } else if (prevProps.isRunning !== this.props.isRunning && !this.props.isRunning) {
            clearInterval(this.state.interval)
            this.props.updateBoard(this.props.board)
        }
        if (prevProps.gridSize !== this.props.gridSize || prevProps.board !== this.props.board) {
            this.setGridDimensions();
            this.updateCanvas();
        }
        if (prevProps.timerInterval !== this.props.timerInterval && this.props.isRunning) {
            clearInterval(this.state.interval);
            this.setState({
                interval: setInterval(() => this.updateBoard(this.props.board, this.props.gridSize), this.props.timerInterval)
            })
        }
    }

    updateBoard(board, gridSize) {
        const newBoard = updateGame(board, gridSize)
        this.props.updateBoard(newBoard)
        // this.setState({
        //     board: newBoard
        // })
        this.updateCanvas();
    }

    randomFill() {
        let randomBoard = [...this.props.board]
        for (let i = 0; i < randomBoard.length; i++) {
            if (Math.random() > 0.6) {
                randomBoard[i] = true
            }
        }
        
    }

    setGridDimensions() {
        this.gridHeight = (this.canvasRef.current.height / this.props.gridSize);
        this.squareHeight = (this.gridHeight * 0.9);
    }

    updateCanvas(idx = null) {
        const ctx = this.canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);

        this.props.board.forEach((tile, i) => {
            ctx.fillStyle = tile || (idx != null && idx === i) ? "#4A473E" : "#B3AE99";
            ctx.fillRect((i % this.props.gridSize) * this.gridHeight, Math.floor(i / this.props.gridSize) * this.gridHeight, this.squareHeight, this.squareHeight);
        });
    }

    calcIndex(e) {
        let xCoord = Math.floor((e.clientX - e.target.offsetLeft) / this.gridHeight);
        let yCoord = Math.floor((e.clientY - e.target.offsetTop) / this.gridHeight);
        return xCoord + yCoord * this.props.gridSize;
    }

    handleHover(e) {
        let i = this.calcIndex(e)

        this.updateCanvas(i);
    }

    async handleClick(e) {
        let i = this.calcIndex(e)

        let newBoard = [...this.props.board];
        newBoard[i] = !newBoard[i]
            await this.props.updateBoard(newBoard)
            // await this.setState({
            //     board: newBoard
            // })
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
        timerInterval: state.timer
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
