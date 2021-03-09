import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    const {name, nationality, image, budget} = props.player;
    const imageStyle = {height:'100px'};
    const playerStyle = {border: '1px solid blue', margin: '10px', padding: '10px'};
    const buttonStyle = { backgroundColor: 'rgba(255, 187, 0, 0.932)', width: '150px', height: '30px', border: '1px solid darkgray'}
    const handleAddPlayer = props.handleAddPlayer
   // console.log(props)
    return (
        <div style ={playerStyle}>
            <h4>This is {name}</h4>
            <img style={imageStyle} src={image} alt=""/>
            <p> <small>Nationality {nationality}</small> </p>
            <p>Hiring Price: {budget}</p>
            <button style={buttonStyle} onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faFutbol} /> Add Player</button>
        </div>
    );
};

export default Player;