import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function GameDie() {
    const [count, setCount] = useState(0)
   
    function rollDie() {
       const maxRoll = Math.floor(6);
       const minRoll = Math.ceil(1);
       const roll = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;
       setCount(roll)
   }
    return (
    <Button size='sm' variant='secondary' onClick={rollDie}>
       {count === 0 ? "Roll" : count}
    </Button>
  );
}

export default GameDie