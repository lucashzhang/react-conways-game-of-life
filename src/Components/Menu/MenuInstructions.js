import React from 'react';
import { Link } from '@material-ui/core';
import '../../CSS/Menu.css';

class MenuInstructions extends React.Component {
    render() {
        return <div className={this.props.className}>
            <p><Link href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Conway's Game of Life</Link> is a zero player game that represents cellular automation.</p>
            <h4>Rules</h4>
            <ol>
                <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
            </ol>
            <p>
                Click on a board tile to toggle whether it is alive. A dark tile represents a live cell and a light tile represents a dead one.
                Press start to begin the automation
            </p>
        </div>
    }
}

export default MenuInstructions
