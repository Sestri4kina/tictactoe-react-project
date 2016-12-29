/**
 * Created by Sestri4kina on 27.12.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AddPlayerName from './add-player-name';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: ['X', 'O'],
            playersNames: [],
            currentTurn: 'X',
            board: ['', '', '', '', '', '', '', '', ''],
            winner: null
        }
    }

    render() {
        return (
            <div className="game-wrapper">
                <PageHeader id="header-h1"> Welcome to TicTacToe game! </PageHeader>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12}  md={4}>
                            <AddPlayerName onAdd={this.onAdd.bind(this)}/>
                            <h3>The 'X' player is {this.state.playersNames[0]}</h3>
                            <h3>The 'O' player is {this.state.playersNames[1]}</h3>
                            {this.state.winner ? <h3 id="congrats">{`Congratulations, ${this.state.currentTurn === 'O' ? this.state.playersNames[0] : this.state.playersNames[1]}! You are the winner!`}</h3> : null}
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <div className="board">
                                {this.state.board.map((cell, index) => {
                                    return <div onClick={() => this.handleClick(index)} className="square" key={index}>{cell}</div>
                                })}
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <footer>
                            <p>&copy; Practice makes perfect</p>
                        </footer>
                    </Row>
                </Grid>
            </div>
        );
    }

    //custom functions
    handleClick(index){
        if(this.state.board[index] === '' && !this.state.winner){
            this.state.board[index] = this.state.currentTurn;
            this.setState({
                board: this.state.board,
                currentTurn: this.state.currentTurn === this.state.players[0] ? this.state.players[1] : this.state.players[0],
                winner: this.checkForWinner()
            });
        }
    }

    checkForWinner() {
        var winnerPlayer = this.state.playersNames[0] ? this.state.playersNames[1] : this.state.playersNames[0];
        var symbols = this.state.board;
        var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        return winningCombinations.find((combination) => {
            if( symbols[combination[0]] !== '' &&
                symbols[combination[1]] !== '' &&
                symbols[combination[2]] !== '' &&
                symbols[combination[0]] === symbols[combination[1]] &&
                symbols[combination[1]] === symbols[combination[2]]){
                return winnerPlayer;
            } else {
                return false;
            }

        });
    }

    onAdd(name){
        var updPlayersNames = this.state.playersNames;
        updPlayersNames.push(name);
        this.setState({
            playersNames: updPlayersNames
        });
    }

}

ReactDOM.render(<Game />, document.getElementById('app') );