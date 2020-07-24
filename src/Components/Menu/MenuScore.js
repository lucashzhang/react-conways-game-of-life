import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { startStop, randomFillBoard, clearBoard } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class MenuScore extends React.Component {
    render() {
        return <div className={this.props.className}>
            <h4>Score:</h4>
            <h1>{this.props.score}</h1>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        score: state.board.score
    }
}

export default connect(mapStateToProps)(MenuScore)
