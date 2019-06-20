import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector">
          <h2>Please Enter A Store</h2>
          <input
            type="text"
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
