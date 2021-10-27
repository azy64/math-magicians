import './css/App.css';
import React from 'react';
import Calculator from './Components/Calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
