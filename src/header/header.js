import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonClick from '../button-click';
import Modal from './modal';
import { Link } from "react-router-dom";

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const openFn = () => {
        setIsOpen(true);
    }
    const closeFn = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/best-players">Best Score</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
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