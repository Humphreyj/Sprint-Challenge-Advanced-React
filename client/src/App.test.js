import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { render,cleanup,waitForElement, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App, {playerData,updatePlayerData,data, getData} from './App';
import Player from './components/Player';
import axiosMock from 'axios';

afterEach(cleanup);


it('renders without crashing', () => {
  
  const {container} =  render(<App />);
  
});

  it('Renders player', () => {
  
   const player =  render(<Player />);
  expect(player.textContent).toBeFalsy();
  expect(data).toBeFalsy();

  
});

test('Title Is Rendered and correct', () => {
  const container = render(<App />)
  container.getByTestId('header');
})





