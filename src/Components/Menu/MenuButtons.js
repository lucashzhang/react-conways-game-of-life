import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { startStop, randomFillBoard, clearBoard, savePattern, setCurrPattern } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class Menu extends React.Component {

    handleStart = () => {
        this.props.runGame(this.props.isRunning)

        if (!this.props.isRunning && this.props.score === 0) {
            this.props.savePattern()
        } else if (!this.props.isRunning) {
            this.props.unsetCurrPattern();
        }
    }

    render() {
        return <div className={this.props.className}>
            <Button variant="contained" color="primary" onClick={this.handleStart}>{this.props.isRunning ? "Stop" : "Start"}</Button>
            <Button variant="contained" color="primary" onClick={this.props.clearBoard}>Clear Pattern</Button>
            <Button variant="contained" color="primary" onClick={this.props.randomFill}>Random Pattern</Button>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        isRunning: state.startstop,
        score: state.board.score
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
        savePattern() {
            dispatch(
                savePattern()
            )
        },
        unsetCurrPattern() {
            dispatch(
                setCurrPattern('initial')
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
