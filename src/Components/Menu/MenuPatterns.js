import React from 'react';
import { connect } from 'react-redux';
import { Radio, IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { handlePatternDelete, handleRadio, savePattern } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class MenuSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSave = () => {
        this.props.savePattern();
    }

    render() {
        return <div className={this.props.className} onMouseOut={this.resetPattern}>
            <Button variant="contained" fullWidth onClick={this.handleSave}>Save Current Pattern</Button>
            <div className="lucas-menu-saved-patterns">
                {this.props.history.map((pattern) => (
                    <div className="lucas-menu-options" key={pattern.date.toString()}>
                        <Radio
                            checked={this.props.currPattern === pattern.date.toString()}
                            onChange={() => this.props.handleRadioChange(pattern)}
                        ></Radio>
                        <h4>{pattern.date.toString().slice(0, -33)}</h4>
                        <IconButton className="lucas-menu-control" onClick={() => this.props.handlePatternDelete(pattern.date)}><DeleteIcon></DeleteIcon></IconButton>
                    </div>
                ))}
            </div>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        history: state.board.savedPatterns,
        currPattern: state.board.currPattern,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleRadioChange(pattern) {
            dispatch(
                handleRadio(pattern)
            )
        },
        handlePatternDelete(date) {
            dispatch(
                handlePatternDelete(date)
            )
        },
        savePattern() {
            dispatch(
                savePattern()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSettings)
