import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map((card) => <Card image={card.image} backImage={card.backImage}/>)}
        </div>
    );
};

CardList.propTypes = {
   cards: PropTypes.array.isRequired 
};

export default CardList;