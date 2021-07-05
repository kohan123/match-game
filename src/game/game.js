import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../card/card-list';
import { useSelector } from 'react-redux';

const Game = ({cards}) => {
    const difficulty = useSelector((state) => state.levelList);
    return (
        <div>
            <CardList cards={cards} difficulty={difficulty} />
        </div>
    );
};

Game.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Game;
