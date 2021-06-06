import React from 'react';
import PropTypes from 'prop-types';
import ButtonClick from '../button-click';


const RegistrationPlayer = props => {

    const url = "http://ec2-34-219-121-49.us-west-2.compute.amazonaws.com:5000/players";
    const addNewUser = async() => {
        const formData = new FormData();
        formData.append("name", "Olga");
        formData.append("email", "olga@gmail.com");
        const response = await axios.post(url, formData);
      }
    return (
        <div>
           <ButtonClick className="blueButton" text="ADD USER" onClick={addNewUser}/>
           <ButtonClick className="witeButton" text="CANCEL"/>
        </div>
    );
};

RegistrationPlayer.propTypes = {
    
};

export default RegistrationPlayer;