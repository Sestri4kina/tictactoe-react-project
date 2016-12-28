/**
 * Created by Sestri4kina on 28.12.2016.
 */
import React from 'react';
import './css/add-player-name.css';

class AddPlayerName extends React.Component {
    render(){
        return(
            <form id="name-wrapper" onSubmit={this.handleSubmit.bind(this )}>
                 <input type="text" required ref="playerName" />
                 <input type="submit" value="Add your name" />
            </form>

        );
    }
    //custom functions
    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.playerName.value);
    }
}

export default AddPlayerName;


