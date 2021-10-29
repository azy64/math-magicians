import React from 'react';
import '../css/BarDisplay.css';
import PropTypes from 'prop-types';

export default class BarDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { content } = this.props;
    return (
      <div className="bar-display">
        <div className="writting">
          {content}
        </div>
      </div>
    );
  }
}
BarDisplay.propTypes = {
  content: PropTypes.string.isRequired,
};
