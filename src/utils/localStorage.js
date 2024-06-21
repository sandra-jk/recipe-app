export const loadFavorites = () => {
    try {
      const serializedFavorites = localStorage.getItem('favorites');
      return serializedFavorites ? JSON.parse(serializedFavorites) : [];
    } catch (e) {
      console.warn('Could not load favorites from local storage', e);
      return [];
    }
  };
  
  export const saveFavorites = (favorites) => {
    try {
      const serializedFavorites = JSON.stringify(favorites);
      localStorage.setItem('favorites', serializedFavorites);
    } catch (e) {
      console.warn('Could not save favorites to local storage', e);
    }
  };
  