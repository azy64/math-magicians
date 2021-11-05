import React from 'react';
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
        <div className="writting" role="none">
          {content}
        </div>
      </div>
    );
  }
}
BarDisplay.propTypes = {
  content: PropTypes.string.isRequired,
};
