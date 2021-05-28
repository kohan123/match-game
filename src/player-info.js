import React from "react";
import PropTypes from "prop-types";
import "./player-info.scss"

const PlayerInfo = ({player: {name, email, avatar, score}}) => {
    return <div className="playerClass">
        <div className="player_container">
        <img className="photo" src = {avatar} />
        <div className="info_person">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
        </div>
        </div>  
        <div className="score">
            <p>Score: <span>{score}</span></p>
        </div>
        </div>;
}


export default PlayerInfo;
