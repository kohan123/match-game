import React from 'react';
import { useDispatch } from 'react-redux';
import { levelList } from '../action/level-list';



const Display = () => {
 const dispatch = useDispatch();
  const changeDificulty = (event) => {
    const valueDificulty = event.target.value;
    const action = levelList(valueDificulty); 
    dispatch(action);
  }
    return (
        <div>
          <select onChange= {changeDificulty}>
	        <option value="easy">easy</option>
	        <option value="medium">medium</option>
	        <option value="hard">hard</option>
          </select>
        </div>
    );
};


export default Display;