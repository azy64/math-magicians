import operate from '../src/logic/operate';
import calculate from '../src/logic/calculate';

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
});
