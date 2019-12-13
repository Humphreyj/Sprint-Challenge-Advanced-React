import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Players from './components/Players';

function App() {

 const [playerData, updatePlayerData] = useState([]);

 useEffect(() => {
   axios
   .get('http://localhost:5000/api/players')
   .then(res => {
     console.log(res.data);
     updatePlayerData(res.data)
   })
   .catch(err => {
     console.error(err);
   })
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
