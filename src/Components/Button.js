import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickHandler = (e) => {
    const txt = e.target.firstChild.textContent;
    const { content, calculate, setCalculate } = this.props;
    content(txt, calculate, setCalculate);
  }

  parseStringOp = (str) => {
    const op = [];
    const str1 = [...str];
    // we get the opration in order and get numbers
    for (let i = 0; i < str1.length; i += 1) {
      if (str1[i] === '+') op.push('+');
      if (str1[i] === '-') op.push('-');
      if (str1[i] === '÷') op.push('÷');
      if (str1[i] === 'x') op.push('x');
      if (str1[i] === '%') op.push('%');
    }

    const reg = /[+\-÷x%]/ig;
    let tmp = str.replace(reg, ' ');
    tmp = tmp.split(' ');
    return tmp;
  }

  render() {
    const { width, text, color } = this.props;
    const styles = { backgroundColor: `${color}`, width: `${width}` };
    return (
      <div style={styles} className="button" onClick={this.clickHandler} role="button" tabIndex="0" onKeyPress={this.clickHandler}>
        <span className="text">{text}</span>
      </div>
    );
  }
}

Button.propTypes = {
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  content: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  calculate: PropTypes.object.isRequired,
  setCalculate: PropTypes.func.isRequired,
};

export default Button;
