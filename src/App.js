import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeCard from './components/RecipeCard';
import './App.css';

const App = () => {
  const APP_ID = '7e51f4ee';
  const APP_KEY = 'cfd0b058c130da02b7e5fed6657f2964';
  const [food_recipes, setfood_recipes] = useState([]);
  const [search_recipe, setSearch_recipe] = useState('');
  const [search_query, setSearch_Query] = useState('chicken');

  useEffect(() => {
    getRecipesFunction();
  }, [search_query]);

  const getRecipesFunction = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setfood_recipes(data.hits);
  };

  const updateSearchFunction = (e) => {
    setSearch_recipe(e.target.value);
  };

  const getSearchFunction = (e) => {
    e.preventDefault();
    setSearch_Query(search_recipe);
    setSearch_recipe('');
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
                <>
                  <form onSubmit={getSearchFunction} className="search-bar-container">
                    <div className="search-bar">
                      <input
                        type="text"
                        name="search"
                        value={search_recipe}
                        onChange={updateSearchFunction}
                        placeholder="Search for recipes..."
                      />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                  <div className="recipes-container">
                    {food_recipes.map((recipe) => (
                      <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
                    ))}
                  </div>
                </>
              }
            />
            <Route
              path="/about"
              element={
                <div className="about-container">
                  <h2>About Recipe Finder</h2>
                  <p>This is a simple app to find recipes.</p>
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
