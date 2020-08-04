import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap'
import './App.css';


class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      counter: 1
    };
  }

  render()
  {
    return (
      <div>
        <div className="App">
          <header className="App-header" style={{height: '100%'}}>
            <div>
              <CardDeck style={{display: 'flex', flexDirection: 'column', maxHeight:'80%'}}>
              {this.createCards()}
              </CardDeck>
            </div>
            <Button variant="primary" onClick={this.increment}>
              Next
          </Button>
          </header>
        </div>
      </div>
    );
  }

  createCards = () =>
  {

    let cardObjects =
    {
      1: { title: "Upkeep", description: "Untap, Draw" },
      2: { title: "Main Phase 1", description: "Play one land, any card you can cast, activate abilities on creatures" },
      3: { title: "Declare Attacks", description: "Play instants, activate abilities on creatures" },
      4: { title: "Declare Blocks", description: "Play instants, activate abilities on creatures" },
      5: { title: "Damage", description: "Play instants, activate abilities on creatures" },
      6: { title: "Main Phase 2", description: "Play one land if not played yet, any card you can cast, activate abilities on creatures" },
      7: { title: "End Step", description: "Play instants, activate abilities on creatures" },
    }

    let cards = Object.keys(cardObjects).map((key) =>
    {
      return <Card style={{ }} text="dark" className="mb-2" bg={this.state.counter == key ? "" : "secondary"}>
        <Card.Body>
          <Card.Title style={{fontSize: 30}}>{cardObjects[key].title}</Card.Title>
          <Card.Text style={{fontSize: 20}}>{cardObjects[key].description}</Card.Text>
        </Card.Body>
      </Card>
    })

    return cards;
  }

  increment = () =>
  {
    this.setState({ counter: this.state.counter < 7 ? this.state.counter + 1 : 1 })
    console.log(this.state.counter);
  }

}

export default App;
