import React, { useState } from "react";
import "./card.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addStep } from "../action/game";



const Card = ({image, backImage, isGuessed, id}) => {
    const dispatch = useDispatch();
    const allSteps = useSelector((state) => state.game.steps);
    const [isFlip, setIsFlip] = useState(false);

    const onFlip = () => {
      setIsFlip(true);
      setTimeout(() => {
        setIsFlip(false);
      },3000);
    };

    const pickCard = () => {
      const action =  addStep(id, image, allSteps);
      dispatch(action);
     

      onFlip();
    }
    
    return <div onClick={pickCard} className={`flip-card ${isFlip === true ? "flip" : ""} ${isGuessed ? "guessed" : ""}`}>
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
    backImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }

export default Card;