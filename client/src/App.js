import React from 'react';
import logo from './logo.svg';

import GameCard from './components/Card/Card'

function App() {
  return (
    <div>
      <GameCard type = "Block"></GameCard>
      <GameCard type ="Counterblock" ></GameCard>
      <GameCard type ="Reroll"></GameCard>
      <GameCard type ="Opponetreroll"></GameCard>
    </div>
  );
}

export default App;
