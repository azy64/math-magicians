import React, { Component } from 'react';
import BarDisplay from './BarDisplay';
import Button from './Button';
import '../css/Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
  }

  clickHandler = (txt) => {
    this.setState((state) => calculate(state, txt));
  }

  addButton =() => {
    const tab = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const tmp = [];
    let i = 0;
    tab.forEach((signe) => {
      if (signe === '+' || signe === '=' || signe === '-' || signe === '÷' || signe === 'x') tmp.push(<Button key={i} content={this.clickHandler} width="73px" color="#F4924B" text={signe} />);
      else if (signe === '0') tmp.push(<Button key={i} content={this.clickHandler} width="148px" color="#E0E0E0" text={signe} />);
      else tmp.push(<Button key={i} content={this.clickHandler} width="73px" color="#E0E0E0" text={signe} />);
      i += 1;
    });
    return tmp;
  }

  render() {
    const { next, total } = this.state;
    const tmp = next || total || 0;
    return (
      <div className="calculator">
        <BarDisplay content={`${tmp}`} />
        {this.addButton()}
      </div>
    );
  }
}
