import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Players from './components/Players';
import { getData } from './hooks/getData';

function App() {

 const [playerData, updatePlayerData] = useState([]);

 useEffect(() => {
   getData('http://localhost:5000/api/players',updatePlayerData)
 },[])
 
  return (
    <div className="App">
      <Players
      data={playerData}
      />
      
    </div>
  );
}

export default App;
