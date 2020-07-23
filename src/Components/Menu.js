import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { startStop } from '../ReduxUtil/actions';

class Menu extends React.Component {
    render() {
        return <Button
            onClick={() => this.props.onButtonClick(this.props.isRunning)}
            color={this.props.isRunning ? "secondary" : "default"}
        >
            Start/Stop</Button>
    }
}


const mapStateToProps = state => {
    return {
        isRunning: state.startstop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick(isRunning) {
            dispatch(
                startStop(isRunning)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
