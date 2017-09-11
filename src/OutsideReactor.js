import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.any,
  onClickedOutside: PropTypes.func.isRequired,
};

class OutsideReactor extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClickedOutside();
    }
  };

  render() {
    const { children, onClickedOutside, ...rest } = this.props; // eslint-disable-line
    return (
      <div {...rest} ref={(node) => { this.wrapperRef = node; }}>
        {children}
      </div>
    );
  }
}

OutsideReactor.propTypes = propTypes;

export default OutsideReactor;
