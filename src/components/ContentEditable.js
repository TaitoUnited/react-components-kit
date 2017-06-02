import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* eslint-disable react/no-danger */

class ContentEditable extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.html !== this.ref.innerHTML;
  }

  handleChange() {
    const html = this.ref.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({ target: { value: html } });
    }
    this.lastHtml = html;
  }

  render() {
    return (
      <span
        ref={(ref) => { this.ref = ref; }}
        onInput={this.handleChange}
        onBlur={this.handleChange}
        contentEditable
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      />
    );
  }
}

/* eslint-enable react/no-danger */

ContentEditable.propTypes = {
  html: PropTypes.string,
  onChange: PropTypes.func,
};

export default ContentEditable;
