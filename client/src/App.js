import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Players from './components/Players';
import { getData } from './hooks/getData';

function App({url}) {

 const [playerData, updatePlayerData] = useState([]);

 useEffect(() => {
   getData('http://localhost:5000/api/players',updatePlayerData)
   
 },[])
 
  return (
    <div className="App" >
      <h1 className="title" data-testid='header'>Women's World Cup 2018</h1>
      <Players
      data={playerData}
      data-testid='resolved'
      />
      
    </div>
  );
 
  
 
  
}

export default App;
