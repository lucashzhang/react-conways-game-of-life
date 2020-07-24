import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import MenuButtons from './MenuButtons'
import MenuSettings from './MenuSettings'
import MenuScore from './MenuScore'
import '../../CSS/Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: "instructions"
        }
    }

    handleAccordion = (panel) => (event, isExpanded) => {
        if (isExpanded) {
            this.setState({
                expanded: panel
            })
        } else {
            this.setState({
                expanded: false
            })
        }
    }

    render() {
        return <div className="lucas-menu">
            <MenuScore></MenuScore>
            <Accordion square expanded={this.state.expanded === 'instructions'} onChange={this.handleAccordion('instructions')}>
                <AccordionSummary>Instructions</AccordionSummary>
                <AccordionDetails>lorem ipsum dolors</AccordionDetails>
            </Accordion>
            <Accordion square expanded={this.state.expanded === 'settings'} onChange={this.handleAccordion('settings')}>
                <AccordionSummary>Settings</AccordionSummary>
                <AccordionDetails><MenuSettings className="lucas-menu-settings"></MenuSettings></AccordionDetails>
            </Accordion>
            <Accordion square expanded={this.state.expanded === 'patterns'} onChange={this.handleAccordion('patterns')}>
                <AccordionSummary>Previous Patterns</AccordionSummary>
                <AccordionDetails>lorem ipsum</AccordionDetails>
            </Accordion>
            <MenuButtons className="lucas-menu-buttons"></MenuButtons>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
