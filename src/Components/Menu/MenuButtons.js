import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { startStop, randomFillBoard, clearBoard } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class Menu extends React.Component {
    render() {
        return <div className={this.props.className}>
            <Button variant="contained" onClick={() => this.props.clearBoard(this.props.gridSize)}>Clear Pattern</Button>
            <Button variant="contained" onClick={() => this.props.randomFill(this.props.gridSize)}>Random Pattern</Button>
            <Button variant="contained" fullWidth onClick={() => this.props.runGame(this.props.isRunning)}>{this.props.isRunning ? "Stop" : "Start"}</Button>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        isRunning: state.startstop,
        gridSize: state.board.gridSize
    }
}

const mapDispatchToProps = dispatch => {
    return {
        runGame(isRunning) {
            dispatch(
                startStop(isRunning)
            )
        },
        randomFill(gridSize) {
            dispatch(
                randomFillBoard(gridSize)
            )
        },
        clearBoard(gridSize) {
            dispatch(
                clearBoard(gridSize)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
