import React from 'react';
import Display from '../level-list/display';
import { useSelector } from "react-redux";


const Main = () => {
    const difficulty = useSelector((state) => state.levelList);
    return (
        <div>
           <h1>About the game</h1>
           <h2>Сложность: {difficulty}</h2>
        </div>
    );
};



export default Main;