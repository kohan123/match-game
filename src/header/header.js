import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import ButtonClick from '../button-click';
import Modal from './modal';
import { NavLink } from "react-router-dom";
import "./header.scss";
import questions from "../assets/navigation/question.png";
import settings from "../assets/navigation/settings.png";
import vector from "../assets/navigation/star.jpg";
import { useDispatch } from 'react-redux';
import { gameStart } from '../action/game';
import { useSelector } from "react-redux";

const Header = props => {
    const difficulty = useSelector((state) => state.levelList);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const openFn = () => {
        setIsOpen(true);
    }
    const closeFn = () => {
        setIsOpen(false);
    }

    const startGame = () => {
       const action = gameStart(difficulty);
       dispatch(action); 
    }

    return (
        <div className="header">
            <section className="button_section">
                <h1 className="header_title">MATCH</h1>
                <ButtonClick className="match" text="MATCH"/>
            </section>
            
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="selected"><img src={questions}/> About Game</NavLink></li>
                    <li><NavLink to="/best-players"activeClassName="selected"><img src={vector}/>Best Score</NavLink></li>
                    <li><NavLink to="/settings" activeClassName="selected"><img src={settings}/>Game Settings</NavLink></li>
                </ul>
            </nav>
           <ButtonClick className="witeButton" text="Register new Player" onClick={openFn}/>
           <ButtonClick className="game" text="Start Game" onClick={startGame}/>
           {isOpen === true && <Modal isOpen={isOpen} onClose={closeFn} />}
        </div>
    );
};
 Header.propTypes = {
    
};

export default Header;