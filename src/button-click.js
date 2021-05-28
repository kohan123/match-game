import React from "react";
import PropTypes from "prop-types";
import "./button-click.scss";

const ButtonClick = ({className, text, onClick}) => { 
    return <button className={className} onClick={onClick}>{text}</button>;

};

ButtonClick.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};

export default ButtonClick;