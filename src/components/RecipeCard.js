import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const RecipeCard = ({ recipe, addFavorite, showAddFavoriteButton }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={recipe.image}
        alt={recipe.label}
      />
      <div className="card-body">
        <h2 className="card-title">{recipe.label}</h2>
        <h3 className="card-subtitle">{recipe.dishType ? recipe.dishType[0] : 'Dish Type'}</h3>
        <p className="card-text">
          <strong>Ingredients:</strong>
          {recipe.ingredientLines.map((ingredient, index) => (
            <span key={index} className="block">{ingredient}</span>
          ))}
        </p>
        <div className="button-container">
          <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="btn">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> 
          </a>
          {showAddFavoriteButton && (
            <button onClick={() => addFavorite(recipe)} className="btn-favorite">
              <FontAwesomeIcon icon={faHeart} /> 
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
