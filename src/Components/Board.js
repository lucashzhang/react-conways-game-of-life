import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridListTile, Button } from '@material-ui/core';
import { changeBoardTile } from '../ReduxUtil/actions';

class Board extends React.Component {
    render() {
        return <GridList cols={100} rows={100} style={{width: "100vh"}}>
            {this.props.board.map((tile, i) => (
                <GridListTile key={i} style={{width: "10vh", height:"10vh"}}>
                    <Button variant="contained" style={{
                        height: "100%",
                        width: "100%"
                    }}
                    color={this.props.board[i] ? "primary" : "default"}
                    onClick={()=>this.props.onButtonClick(i, this.props.board)}>{i}</Button>
                </GridListTile>
            ))}
        </GridList>
    }
}

{/* <GridListTile key={i}
    onClick={() => this.props.onButtonClick(i, this.props.board)}
    style={{
        backgroundColor: this.props.board[i] ? "grey" : "white",
        borderColor: "black",
        borderStyle: "dotted",
        height: "100px",
        width: "100px"
    }}>
</GridListTile> */}

const mapStateToProps = state => {
    return {
        board: state.board
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick(index, board) {
            dispatch(
                changeBoardTile(index, board)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
