import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const APP_ID = '3a547a51';
  const APP_KEY = 'e98a86b97809066fae951c6fdbac1abf';

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
    <form className="searchForm" >
      <input className="searchInput" type="text" />
      <button className="searchBtn" type="submit" >Search</button>
    </form>
    </div>
  );
}

export default App;
