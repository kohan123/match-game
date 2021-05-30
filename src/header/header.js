import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonClick from '../button-click';
import Modal from './modal';

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
           <ButtonClick className="new_player" text="Registr new Player"/>
           <Modal isOpen={isOpen} onClose="" /> 
        </div>
    );
};
 Header.propTypes = {
    
};

export default Header;