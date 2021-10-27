import React from 'react';
import '../css/BarDisplay.css';

export default class BarDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bar-display">
        <div className="writting">
          0000
        </div>
      </div>
    );
  }
}
