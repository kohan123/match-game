import React from "react";
import PropTypes from "prop-types"
import PlayerInfo from "./player-info";

const BestPlayers = ({players}) => {
    return <div id="best_player">
        <h1>Best players</h1>
        { players.map(player => <PlayerInfo key={player.name} player = {player}/>) }
    </div>
};


export default BestPlayers;