import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import operate from '../src/logic/operate';
import calculate from '../src/logic/calculate';
import Home from '../src/Components/Home';
import NavBar from '../src/Components/NavBar';
import Button from '../src/Components/Button';
import BarDisplay from '../src/Components/BarDisplay';
import Quote from '../src/Components/Quote';
import Calculator from '../src/Components/Calculator';

describe('testing operate and calculate function', () => {
  test('testing  for string number', () => {
    expect(operate('3', '6', '+')).toBe('9');
  });
  test('testing  for numbers', () => {
    expect(operate(3, 6, '+')).toBe('9');
  });
  test('testing an unknown operation goes as expected', () => {
    expect(() => operate('4', '6', '}')).toThrow();
    expect(() => operate('4', '6', '[')).toThrow(Error);
  });
  test('testing calculate function', () => {
    const ob = { next: '6', operation: '+', total: null };
    expect(calculate(ob, '6')).toEqual({ next: '66', operation: '+', total: null });
  });
  test('testing calculate function when doing operation =', () => {
    const ob = { next: '6', operation: '+', total: '5' };
    expect(calculate(ob, '=')).toEqual({ next: null, operation: null, total: '11' });
  });
  test('testing calculate function when doing AC operation =', () => {
    const ob = { next: '6', operation: '+', total: '5' };
    expect(calculate(ob, 'AC')).toEqual({ next: null, operation: null, total: null });
  });
  test('testing calculate function when doing +/- operation =', () => {
    const ob = { next: '6', operation: '+', total: '5' };
    expect(calculate(ob, '+/-')).toEqual({ next: '-6', operation: '+', total: '5' });
  });
  it('renders correctly for Home component', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly for Button component', () => {
    const tree = renderer
      .create(<Button
        width="100px"
        text="1"
        color="blue"
        content={(x) => x}
        calculate={{ total: null, next: null }}
        setCalculate={(x) => x}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for BarDisplay component', () => {
    const tree = renderer
      .create(<BarDisplay content="12" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly for Quote component', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly for NavBar component', () => {
    const tree = renderer
      .create(<Router><NavBar /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly Calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return the sum of two number form UI', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('none');
    expect(result.innerHTML).toBe('21');
  });
});
