import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../card/card-list';

const Game = ({cards}) => {
    return (
        <div>
            <CardList cards={cards}/>
        </div>
    );
};

Game.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Game;
