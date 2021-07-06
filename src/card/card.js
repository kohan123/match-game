import React, { useState } from "react";
import "./card.scss";
import PropTypes from "prop-types";



const Card = ({image, backImage}) => {
    const [isFlip, setIsFlip] = useState(false);
    const flipFn = () => {
      setIsFlip(true);
      setTimeout(() => {
        setIsFlip(false);
      },3000);
    }
    
    return <div onClick={flipFn} className={`flip-card ${isFlip === true ? "flip" : ""}`}>
    <div className="flip-card-inner">
      <div style={{backgroundImage: `url(${backImage})`}} className="flip-card-front"/>
      <div style={{backgroundImage: `url(${image})`}} className="flip-card-back"/>
    </div>
  </div>
};

Card.defaultProps = {
    
  }
  
  Card.propTypes = {
    image: PropTypes.string.isRequired,
    backImage: PropTypes.string.isRequired
  }

export default Card;