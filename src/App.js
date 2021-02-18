import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const APP_ID = '3a547a51';
  const APP_KEY = 'e98a86b97809066fae951c6fdbac1abf';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('effect has been run');
  });

  return (
    <div className="App">
    <form className="searchForm" >
      <input className="searchInput" type="text" />
      <button className="searchBtn" type="submit" >Search</button>
    </form>
    <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
