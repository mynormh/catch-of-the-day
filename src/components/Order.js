import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  // renderOrder acts as a sort of render() function just to declutter the render function
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    // Check fish first in case it hasn't loaded from rebase yet
    const isAvailable = fish && fish.status === 'available';
    // Make sure the fish is loaded before it continues, by rendering null it will exit immediately (avoiding blinking unavailable state)
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : 'fish'} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      // We check fish first in case fish is deleted entirely from state (e.g. from DevTools) or not loaded yet from rebase
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
