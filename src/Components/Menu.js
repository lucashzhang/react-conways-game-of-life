import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { runGame } from '../ReduxUtil/actions';

class Menu extends React.Component {
    render() {
        return <Button
            onClick={() => this.props.onButtonClick(this.props.isRunning, this.props.board)}
            color={this.props.isRunning ? "secondary" : "default"}
        >
            Start/Stop</Button>
    }
}


const mapStateToProps = state => {
    return {
        board: state.board,
        isRunning: state.startstop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick(isRunning, board) {
            dispatch(
                runGame(isRunning, board)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
