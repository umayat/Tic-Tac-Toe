/*
	Top level component that renders Game.
*/

import React from 'react';
import Game from './Game';
import './App.css';

const App = () => {
   return (
      <div>
        <h1 className="heading">TIC-TAC-TOE</h1>
        <Game />
      </div>
   )
}

export default App;