import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // Not to be confused with input refs, this is a firebase ref that makes reference to a piece of data in the DB which will be useful in componentWillUnmount
    const { params } = this.props.match; // Take the props given by React Router
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    }); // Only sync the fished data of the current store

    // Reinstate localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    // Unlistens to changes in the database assigned in componentDidMount
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // Add our new fish to the new fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    // Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // Update that state
    fishes[key] = updatedFish;
    // Set that to state
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
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
