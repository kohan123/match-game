import React from 'react';
import PropTypes from 'prop-types';
import ButtonClick from '../button-click';
import "./modal.scss";


const Modal = ({ isOpen, onClose}) => {
    return (
        <div className="modal_window">
            <h3>Registr new Player</h3>
            <form className="inputs">
                <input id="inpt_1" type="text" name="name" placeholder="John Doe" />
                <input id="inpt_2" type="text" name="email" placeholder="email format" />
                <input id="inpt_3" type="text" name="website" placeholder="//johndoe.com/" required/>
            </form>
            <img src="https://smashinglogo.com/static/img/virtual-designers/peter.gif" />
            <div>
                <ButtonClick className="blueButton" text="ADD USER" />
                <ButtonClick className="witeButton" text="CANCEL" />
            </div>
        </div>
    );
};

Modal.propTypes = {
    
};

export default Modal;