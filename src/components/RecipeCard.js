import React from 'react';

const RecipeCard = ({ recipe }) => {
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
        <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="btn">
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
