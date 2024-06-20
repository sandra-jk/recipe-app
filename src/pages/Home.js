import React from 'react';
import RecipeCard from '../components/RecipeCard';

const Home = ({ searchRecipe, setSearchRecipe, getSearch, isLoading, isError, foodRecipes, addFavorite }) => {
  return (
    <>
      <form onSubmit={getSearch} className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            value={searchRecipe}
            onChange={(e) => setSearchRecipe(e.target.value)}
            placeholder="Search for recipes..."
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong. Please try again.</p>}
      <div className="recipes-container">
        {foodRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            addFavorite={addFavorite}
            showAddFavoriteButton={true}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
