import React, { useState, useEffect } from 'react';
import axios from "axios";
import BestPlayers from '../best-players';

const BestPage = props => {
    const url = "http://ec2-34-219-121-49.us-west-2.compute.amazonaws.com:5000/players";
    const [bestPlayers, setBestPlayers] = useState([]);
  
    useEffect(async () => {
      const response = await axios.get(url);
      const players = response.data.players;
      setBestPlayers(players);
    }, []);

    return (
        <div>
            <BestPlayers players={bestPlayers}/>
        </div>
    );
};


export default BestPage;