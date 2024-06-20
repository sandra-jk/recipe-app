import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About'; 
import './App.css';
import { loadFavorites, saveFavorites } from './utils/localStorage'; 

const App = () => {
  const APP_ID = '7e51f4ee';
  const APP_KEY = 'cfd0b058c130da02b7e5fed6657f2964';

  const [foodRecipes, setFoodRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');
  const [searchQuery, setSearchQuery] = useState('chicken');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [favorites, setFavorites] = useState(loadFavorites());

  const getRecipes = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFoodRecipes(data.hits);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const getSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchRecipe);
    setSearchRecipe('');
  };

  const addFavorite = (recipe) => {
    if (!favorites.some((fav) => fav.label === recipe.label)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (label) => {
    setFavorites(favorites.filter((fav) => fav.label !== label));
  };

  return (
    <Router>
      <div className="bg-primary min-h-screen font-sans">
        <Header />
        <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchRecipe={searchRecipe}
                  setSearchRecipe={setSearchRecipe}
                  getSearch={getSearch}
                  isLoading={isLoading}
                  isError={isError}
                  foodRecipes={foodRecipes}
                  addFavorite={addFavorite}
                />
              }
            />
            <Route path="/about" element={<About />} /> 
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} removeFavorite={removeFavorite} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
