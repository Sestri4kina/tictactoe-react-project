/**
 * Created by Sestri4kina on 28.12.2016.
 */
import React from 'react';

class AddPlayerName extends React.Component {
    render(){
        return(
            <div id="name-wrapper">
                <form className="player" onSubmit={this.handleSubmit.bind(this )}>
                    <input type="text" required ref="playerName" />
                    <input type="submit" value="Add your name" />
                </form>
            </div>
        );
    }
    //custom functions
    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.playerName.value);
    }
}

export default AddPlayerName;


