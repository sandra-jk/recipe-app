import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUtensils } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const RecipeCard = ({ recipe, addFavorite }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={recipe.image} alt={recipe.label} />
      <div className="card-body">
        <h5 className="card-title">{recipe.label}</h5>
        <p className="card-subtitle">{recipe.source}</p>
        <p className="card-text">{recipe.ingredientLines.join(', ')}</p>
        <div className="button-container">
          <a href={recipe.url} className="btn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faUtensils} /> 
          </a>
          <button className="btn-favorite" onClick={() => addFavorite(recipe)}>
            <FontAwesomeIcon icon={faHeart} /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
