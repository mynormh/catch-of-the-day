import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // Add our new fish to the new fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    // No need to create a copy of state first because it will contain only the sampleFishes
    console.log(sampleFishes);
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // Take a copy of state
    const order = { ...this.state.order };
    // Add to order or update order (short circuit with order.fish1 if it exists or not)
    order[key] = order[key] + 1 || 1;
    // Call setState to update state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood market" age={500} cool={true} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              // We pass the fish data using the details prop and assign to it the respective element of the array using key
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
