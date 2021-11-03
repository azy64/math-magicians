import React, { useState } from 'react';
import BarDisplay from './BarDisplay';
import Button from './Button';
import '../css/Calculator.css';
import calculate from '../logic/calculate';

const clickHandler = async (txt, compute, setCompute) => {
  setCompute(calculate(compute, txt));
};

const addButton = (compute, setCompute) => {
  const tab = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const tmp = [];
  let i = 0;
  tab.forEach((signe) => {
    if (signe === '+' || signe === '=' || signe === '-' || signe === '÷' || signe === 'x') tmp.push(<Button key={i} calculate={compute} setCalculate={setCompute} content={clickHandler} width="73px" color="#F4924B" text={signe} />);
    else if (signe === '0') tmp.push(<Button calculate={compute} setCalculate={setCompute} key={i} content={clickHandler} width="148px" color="#E0E0E0" text={signe} />);
    else tmp.push(<Button key={i} calculate={compute} setCalculate={setCompute} content={clickHandler} width="73px" color="#E0E0E0" text={signe} />);
    i += 1;
  });
  return tmp;
};
const Calculator = () => {
  const init = {
    total: null,
    next: null,
    operation: null,
  };
  const [compute, setCompute] = useState(init);
  const { next, total } = compute;
  const tmp = next || total || 0;
  return (
    <div className="section-calc">
      <div>
        <h1>Let &lsquo Do some math !</h1>
      </div>
      <div className="calculator">
        <BarDisplay content={`${tmp}`} />
        {addButton(compute, setCompute)}
      </div>
    </div>

  );
};

export default Calculator;
