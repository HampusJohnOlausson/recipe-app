import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';

function App() {

  const APP_ID = '3a547a51';
  const APP_KEY = 'e98a86b97809066fae951c6fdbac1abf';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    
  };

  return (
    <div className="App">
    <form className="searchForm" >
      <input className="searchInput" type="text" />
      <button className="searchBtn" type="submit" >Search</button>
    </form>
    {recipes.map(recipe => (
      <Recipe 
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}/>
    ))}
    </div>
  );
}

export default App;
