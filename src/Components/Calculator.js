import React, { Component } from 'react';
import BarDisplay from './BarDisplay';
import Button from './Button';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  addButton =() => {
    const tab = ['AC', '+/-', '%', '÷', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const tmp = [];
    tab.forEach((signe) => {
      if (signe === '+' || signe === '=' || signe === '-' || signe === '÷' || signe === '*') tmp.push(<Button width="73px" color="#F4924B" text={signe} />);
      else if (signe === '0') tmp.push(<Button width="148px" color="#E0E0E0" text={signe} />);
      else tmp.push(<Button width="73px" color="#E0E0E0" text={signe} />);
    });
    return tmp;
  }

  render() {
    return (
      <div>
        <BarDisplay />
        {this.addButton()}
      </div>
    );
  }
}
