import React from "react";
import "./card.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addStep } from "../action/game";



const Card = ({image, backImage, isGuessed, id, isFliped}) => {
    const dispatch = useDispatch();
    const allSteps = useSelector((state) => state.game.steps);

    const pickCard = () => {
      const action =  addStep(id, image, allSteps);
      if (isFliped === false) {
        dispatch(action);
      }
    }
    
    return <div onClick={pickCard} className={`flip-card ${isFliped === true ? "flip" : ""} ${isGuessed ? "guessed" : ""}`}>
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