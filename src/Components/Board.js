import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { updateBoard } from '../ReduxUtil/actions';
import updateGame from '../GameUtil'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interval: null,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isRunning !== this.props.isRunning && this.props.isRunning) {
            this.setState({
                interval: setInterval(() => this.updateBoard(this.props.board, this.props.gridSize), 50)
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
            {this.props.board.map((tile, i) => (
                <Button variant="contained" style={{
                    height: "10vh",
                    width: "10vh"
                }}
                    color={this.props.board[i] ? "primary" : "default"}
                    key = {i}
                    onClick={() => this.handleButtonClick(i)}>{i}</Button>
            ))}
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
