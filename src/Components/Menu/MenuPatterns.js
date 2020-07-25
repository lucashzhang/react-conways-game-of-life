import React from 'react';
import { connect } from 'react-redux';
import { Radio, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { patternMouseOver, handleRadio } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class MenuSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    resetPattern = () => {
        // TODO
    }

    handleMouseOver = (board) => {
        this.props.patternMouseOver(board)
    }

    handleRadioChange = (pattern) => {
        this.props.handleRadioChange(pattern)
        this.basePattern = pattern
    }

    render() {
        return <div className={this.props.className} onMouseOut={this.resetPattern}>
            {this.props.history.map((pattern) => (
                <div className="lucas-menu-options"
                    onMouseOver={() => this.handleMouseOver(pattern.board)}
                >
                    <Radio
                        checked={this.props.currPattern === pattern.date.toString()}
                        onChange={() => this.handleRadioChange(pattern)}
                    ></Radio>
                    <h4>{pattern.date.toString().slice(0, -33)}</h4>
                    <IconButton className="lucas-menu-control"><DeleteIcon></DeleteIcon></IconButton>
                </div>
            ))}
        </div>
    }
}


const mapStateToProps = state => {
    return {
        history: state.board.savedPatterns,
        currPattern: state.board.currPattern
    }
}

const mapDispatchToProps = dispatch => {
    return {
        patternMouseOver(board) {
            dispatch(
                patternMouseOver(board)
            )
        },
        handleRadioChange(pattern) {
            dispatch(
                handleRadio(pattern)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSettings)
