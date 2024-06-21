import RecipeCard from '../components/RecipeCard'; 

const Favorites = ({ favorites, removeFavorite }) => {
  return (
    <div className="favorites-container">
      <h2>Your Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="recipes-container">
          {favorites.map((favorite) => (
            <div key={favorite.label} className="favorite-item">
              <RecipeCard recipe={favorite} showAddFavoriteButton={false} />
              <button onClick={() => removeFavorite(favorite.label)} className="btn-remove">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
