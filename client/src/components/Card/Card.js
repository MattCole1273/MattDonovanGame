import Card from 'react-bootstrap/Card';
import React from 'react';


function GameCard(props) {
    function renderCardText(type){
        switch(type){
            case 'Block':
                return 'Blocks opponets reroll';
            case 'Counterblock':
                return 'Block and opponets block'
            case 'Reroll':
                return 'Reroll your die';
            case 'Opponetreroll':
                return 'Reroll opponets die'
        }
    }

    return (
    <Card style={{ width:'15rem', height:'20rem' }}>
  <Card.Body>
    <Card.Title>{props.type}</Card.Title>
    <Card.Text>
     { renderCardText(props.type) }
    </Card.Text>
  </Card.Body>
</Card>
  );
}

export default GameCard