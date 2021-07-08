import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const CardList = ({ cards, difficulty }) => {
    return (
        <div className={`card_list ${difficulty}`}>
            {cards.map((card) => <Card isGuessed={card.isGuessed === true} key={card.id} id={card.id} image={card.image} backImage={card.backImage}/>)}
        </div>
    );
};
 
CardList.defaultProps = {
    difficulty: "easy" 
}

CardList.propTypes = {
   cards: PropTypes.array.isRequired,
   difficulty: PropTypes.string 
};

export default CardList;