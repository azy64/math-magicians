import React from 'react';
import PropTypes from 'prop-types';
import '../css/Button.css';

const Button = ({ width, text, color }) => {
  const styles = { backgroundColor: `${color}`, width: `${width}` };
  return (
    <div style={styles} className="button">
      <span className="text">{text}</span>
    </div>
  );
};

Button.propTypes = {
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
