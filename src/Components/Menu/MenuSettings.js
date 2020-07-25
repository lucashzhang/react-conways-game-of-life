import React from 'react';
import { connect } from 'react-redux';
import { Slider, Switch } from '@material-ui/core';
import { handleGridSlider, updateTimer, toggleTorus } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class MenuSettings extends React.Component {
    constructor(props) {
        super(props);
        this.gridSize = this.props.gridSize;
        this.timerSpeed = this.props.timerSpeed;
    }

    render() {
        return <div className={this.props.className}>
            <div className="lucas-menu-options">
                <p>Grid Size</p>
                <Slider
                    defaultValue={this.gridSize}
                    step={1}
                    min={10}
                    max={100}
                    valueLabelDisplay="auto"
                    className="lucas-menu-control"
                    onChange={(e, value) => this.props.handleGridSlider(value)}
                />
            </div>
            <div className="lucas-menu-options">
                <p>Tick Interval (ms)</p>
                <Slider
                    defaultValue={this.timerSpeed}
                    step={10}
                    min={10}
                    max={1000}
                    valueLabelDisplay="auto"
                    className="lucas-menu-control"
                    onChange={(e, value) => this.props.handleTimerSlider(value)}
                />
            </div>
            <div className="lucas-menu-options">
                <p>Torus Mode</p>
                <Switch
                    color="default"
                    className="lucas-menu-control"
                    checked={this.props.isTorus}
                    onClick={() => this.props.handleTorus(this.props.isTorus)}
                />
            </div>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        gridSize: state.board.gridSize,
        isTorus: state.board.torusMode,
        timerSpeed: state.timer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGridSlider(gridSize) {
            dispatch(
                handleGridSlider(gridSize)
            )
        },
        handleTimerSlider(interval) {
            dispatch(
                updateTimer(interval)
            )
        },
        handleTorus(isTorus) {
            dispatch(
                toggleTorus(isTorus)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSettings)
