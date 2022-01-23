import React from 'react';
import './style.css';

function Recipe(props) {
  return(
    <div className='mycard'>
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>Calories: {props.calories}</p>
        <ul>
            {props.ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ul>
        
    </div>
  );
}

export default Recipe;