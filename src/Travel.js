import React from 'react';

const Travel = props => (
  <div>  
    <p>{props.destination}</p>
    <p>{props.country}</p>
    <img src={props.image} alt={props.character} />
    <p>{props.distance}</p>
    <hr></hr>
  </div>
);

export default Travel;