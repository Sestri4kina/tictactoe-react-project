/**
 * Created by Sestri4kina on 27.12.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

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
            <div>
                <h1>Welcome to TicTacToe game!</h1>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('app') );