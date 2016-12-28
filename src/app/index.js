/**
 * Created by Sestri4kina on 27.12.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PLAYER_X: 'X',
            PLAYER_O: 'O',
            currentTurn: 'X',
            board: ['', '', '', '', '', '', '', '', ''],
            winner: null
        }
    }

    render() {
        return (
            <div className="game-wrapper">
                <h1>Welcome to TicTacToe game!</h1>
                {this.state.winner ? <h3>{`And the winner is ${this.state.winner}`}</h3> : null}
                <div className="board">
                    {this.state.board.map((cell, index) => {
                        return <div onClick={() => this.handleClick(index)} className="square" key={index}>{cell}</div>
                    })}
                </div>
            </div>
        );
    }

    //custom functions
    handleClick(index){

    }
}

ReactDOM.render(<Game />, document.getElementById('app') );