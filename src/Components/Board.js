import React from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../ReduxUtil/actions';
import updateGame from '../GameUtil'

import { Stage, Layer, Rect } from 'react-konva';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interval: null,
            board: this.props.board
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isRunning !== this.props.isRunning && this.props.isRunning) {
            this.setState({
                interval: setInterval(() => this.updateBoard(this.props.board, this.props.gridSize), 20)
            })
        } else if (prevProps.isRunning !== this.props.isRunning && !this.props.isRunning) {
            clearInterval(this.state.interval)
        }
    }

    updateBoard(board, gridSize) {
        const newBoard = updateGame(board, gridSize)
        this.props.updateBoard(newBoard)
    }

    handleButtonClick(i) {
        let newBoard = [...this.props.board];
        newBoard[i] = !newBoard[i]
        this.props.updateBoard(newBoard)

    }

    render() {
        return <div style={{ width: "100vh" }}>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {this.props.board.map((tile, i) => (
                        <Rect x={20 + (i % this.props.gridSize) * 11}
                            y={20 + Math.floor(i / this.props.gridSize) * 11}
                            width={10}
                            height={10}
                            key={i}
                            fill={this.props.board[i] ? "blue" : "grey"}
                            onClick={() => this.handleButtonClick(i)}
                        >
                        </Rect>
                    ))}
                </Layer>
            </Stage>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        board: state.board.boardTiles,
        gridSize: state.board.gridSize,
        isRunning: state.startstop
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
