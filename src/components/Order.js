import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  };

  // renderOrder acts as a sort of render() function just to declutter the render function
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    // Check fish first in case it hasn't loaded from rebase yet
    const isAvailable = fish && fish.status === 'available';
    // Create an object for transition options that are used more than once
    const orderTransitionOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 }
    };
    // Make sure the fish is loaded before it continues, by rendering null it will exit immediately (avoiding blinking unavailable state)
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...orderTransitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...orderTransitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              {/* By making the count the key for CSSTransition it will create two different spans one for the new count and one for the previous one. */}
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
