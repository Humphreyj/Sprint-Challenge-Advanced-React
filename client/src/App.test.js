import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App, {playerData,updatePlayerData, getData} from './App';
import Player from './components/Player';


it('renders without crashing', () => {
  
  const container =  render(<App />);
  
  
  
});

it('Renders player', () => {
  
   render(<Player />);

});




test('test', () => {
  expect(2).toBe(2);
})