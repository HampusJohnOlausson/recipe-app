import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';

function App() {

  const APP_ID = '3a547a51';
  const APP_KEY = 'e98a86b97809066fae951c6fdbac1abf';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pasta');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    
  };

  const updateSearch = e => {
   setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 className="title">What are you up for today?</h1>
    <form onSubmit={getSearch} className="searchForm" >
      <input className="searchInput" placeholder="Search recipe..." type="text" value={search} onChange={updateSearch} />
      <button className="searchBtn" type="submit" >Search</button>
    </form>
    <div className="infoContainer">
    {recipes.map(recipe => (
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
    ))}
    </div>
    </div>
  );
}

export default App;
