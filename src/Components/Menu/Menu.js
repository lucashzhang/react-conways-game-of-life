import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionSummary, AccordionDetails, Button } from '@material-ui/core';
import MenuButtons from './MenuButtons'
import { startStop } from '../../ReduxUtil/actions';
import '../../CSS/Menu.css';

class Menu extends React.Component {
    render() {
        return <div className="lucas-menu">
            <Accordion square style={{backgroundColor: "#4A473E", color: "white"}}>
                <AccordionSummary>Settings</AccordionSummary>
                <AccordionDetails>lorem ipsum</AccordionDetails>
            </Accordion>
            <Accordion square style={{backgroundColor: "#4A473E", color: "white"}}>
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
