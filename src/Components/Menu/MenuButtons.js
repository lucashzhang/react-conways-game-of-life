import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { startStop } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class Menu extends React.Component {
    render() {
        return <div className={this.props.className}>
            <Button variant="contained" onClick={() => this.props.runGame(this.props.isRunning)}>{this.props.isRunning ? "Stop" : "Start"}</Button>
            <Button variant="contained" >Save Pattern</Button>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        isRunning: state.startstop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        runGame(isRunning) {
            dispatch(
                startStop(isRunning)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
