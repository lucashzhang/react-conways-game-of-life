import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { startStop, randomFillBoard, clearBoard, savePattern } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class Menu extends React.Component {

    handleStart = () => {
        if (!this.props.isRunning) {
            this.props.savePattern()
        }

        this.props.runGame(this.props.isRunning)
    }

    render() {
        return <div className={this.props.className}>
            <Button variant="contained" onClick={this.props.clearBoard}>Clear Pattern</Button>
            <Button variant="contained" onClick={this.props.randomFill}>Random Pattern</Button>
            <Button variant="contained" fullWidth onClick={this.handleStart}>{this.props.isRunning ? "Stop" : "Start"}</Button>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        isRunning: state.startstop,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        runGame(isRunning) {
            dispatch(
                startStop(isRunning)
            )
        },
        randomFill() {
            dispatch(
                randomFillBoard()
            )
        },
        clearBoard() {
            dispatch(
                clearBoard()
            )
        },
        savePattern(board) {
            dispatch(
                savePattern(board)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
