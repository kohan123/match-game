import React from 'react';
//import Display from '../level-list/display';
import { useSelector } from "react-redux";
import Game from '../game/game';


const Main = () => {
    const difficulty = useSelector((state) => state.levelList);
    const gameState = useSelector((state) => state.game);
    return (
        <div>
            {gameState.isStarted === false && 
            <div>
                <h1>About the game</h1>
                <h2>Сложность: {difficulty}</h2>
           </div>}
            {gameState.isStarted === true && <Game cards={gameState.cards}/>}
        </div>
    );
};



export default Main;