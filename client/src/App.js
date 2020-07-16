import React from 'react';
import logo from './logo.svg';

import GameCard from './components/Card/Card'
import GameDie from './components/Die/Die'

function App() {
  return (
    <div>
      <GameDie></GameDie>
      <GameCard type = "Block"/>
      <GameCard type ="Counterblock"/>
      <GameCard type ="Reroll"/>
      <GameCard type ="Opponetreroll"/>
    </div>
  );
}

export default App;
