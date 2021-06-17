import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonClick from '../button-click';
import Modal from './modal';
import { NavLink } from "react-router-dom";
import "./header.scss";
import questions from "../assets/navigation/question.png";
import settings from "../assets/navigation/settings.png";
import vector from "../assets/navigation/star.jpg";

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const openFn = () => {
        setIsOpen(true);
    }
    const closeFn = () => {
        setIsOpen(false);
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
           {isOpen === true && <Modal isOpen={isOpen} onClose={closeFn} />}
        </div>
    );
};
 Header.propTypes = {
    
};

export default Header;