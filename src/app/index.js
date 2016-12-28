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
        if(this.state.board[index] === '' && !this.state.winner){
            this.state.board[index] = this.state.currentTurn;
            this.setState({
                board: this.state.board,
                currentTurn: this.state.currentTurn === this.state.PLAYER_X ? this.state.PLAYER_O : this.state.PLAYER_X,
                winner: this.checkForWinner()
            });
        }
    }

    checkForWinner() {
        var currentTurn = this.state.currentTurn;
        var symbols = this.state.board;
        var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        return winningCombinations.find((combination) => {
            if( symbols[combination[0]] !== '' &&
                symbols[combination[1]] !== '' &&
                symbols[combination[2]] !== '' &&
                symbols[combination[0]] === symbols[combination[1]] &&
                symbols[combination[1]] === symbols[combination[2]]){
                return currentTurn;
            } else {
                return false;
            }

        });
    }
}

ReactDOM.render(<Game />, document.getElementById('app') );