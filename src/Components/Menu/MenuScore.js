import React from 'react';
import { connect } from 'react-redux';
import '../../CSS/Menu.css';

class MenuScore extends React.Component {
    render() {
        return <div className={this.props.className}>
            <h1>Score: {this.props.score < 9999999 ? this.props.score : this.props.score.toExponential(7)}</h1>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        score: state.board.score
    }
}

export default connect(mapStateToProps)(MenuScore)
