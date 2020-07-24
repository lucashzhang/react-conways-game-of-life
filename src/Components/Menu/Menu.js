import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import MenuButtons from './MenuButtons'
import MenuSettings from './MenuSettings'
import { startStop } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class Menu extends React.Component {
    render() {
        return <div className="lucas-menu">
            <Accordion square>
                <AccordionSummary>Settings</AccordionSummary>
                <AccordionDetails><MenuSettings className="lucas-menu-settings"></MenuSettings></AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary>Previous Patterns</AccordionSummary>
                <AccordionDetails>lorem ipsum</AccordionDetails>
            </Accordion>
            <MenuButtons className="lucas-menu-buttons"></MenuButtons>
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
