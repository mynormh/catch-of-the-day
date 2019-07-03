import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // One way to bind custom methods to the instance of the component
  // constructor() {
  //   super()
  //   // Explicitly bind our own methods to the instance of the Component
  //   this.goToStore = this.goToStore.bind(this);
  // }
  myInput = React.createRef();

  // Bind custom method to the instance of the component using class property and arrow function
  goToStore = event => {
    // Stop the form from submitting and reloading the page
    event.preventDefault();
    // Get the text from the input
    const storeName = this.myInput.current.value;
    // Change the route
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            placeholder="Store Name"
            defaultValue={getFunName()}
            required
          />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
