import React from 'react';
import { connect } from 'react-redux';
import { Slider, Switch } from '@material-ui/core';
import { handleGridSlider, updateTimer, toggleTorus } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class MenuSettings extends React.Component {
    render() {
        return <div className={this.props.className}>
            <div className="lucas-menu-options">
                <p>Grid Size</p>
                <Slider
                    defaultValue={10}
                    step={1}
                    min={10}
                    max={100}
                    valueLabelDisplay="auto"
                    className="lucas-menu-control"
                    onChange={(e, value) => this.props.handleGridSlider(value)}
                />
            </div>
            <div className="lucas-menu-options">
                <p>Timer Speed</p>
                <Slider
                    defaultValue={500}
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
        isTorus: state.torusMode
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
