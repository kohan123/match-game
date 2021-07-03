import React, { useState, useEffect } from 'react';
import axios from "axios";
import BestPlayers from '../best-players';
import { bestPlayersInfo } from '../test-data';

const BestPage = props => {
    const url = "https://2yd9ryr7y2.execute-api.us-west-2.amazonaws.com/dev/best-players?limit=5";
    const [bestPlayers, setBestPlayers] = useState([]);
  
    // useEffect(async () => {
    //   const response = await axios.get(url, {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         }
    //   });
    //   const players = response.data.players;
    //   setBestPlayers(bestPlayers);
    // }, []);

    return (
        <div>
            <BestPlayers players={bestPlayersInfo}/>
        </div>
    );
};


export default BestPage;