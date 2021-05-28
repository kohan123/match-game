import React from "react";
import "./card.scss";
import PropTypes from "prop-types";
import img from "../assets/card.png";


const Card = ({image}) => {
    return <div style={{backgroundImage: `url(${image})`}} className="cards">
    </div>
};

Card.defaultProps = {
    text: img
  }
  
  Card.propTypes = {
    image: PropTypes.string
  }

export default Card;