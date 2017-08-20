import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import colorGetter from './colorGetter';

const CHAR_WIDTH = 16;

const propTypes = {
  autoResize: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  validator: PropTypes.func,
  validationMessage: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.bool,
  cacheValue: PropTypes.bool,
};

const getValidValue = (value) => {
  return value !== null ? value : '';
};

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
      isValid: true,
      value: getValidValue(props.value),
    };
  }

  /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    // NOTE: in order to get auto rezise working
    // we need to set the state in componentDidMount.
    if (this.props.autoResize) {
      const { value } = this.props;
      const w = typeof value === 'number' ?
        value.toString().length :
        value.length;

      this.setState({ width: `${w * CHAR_WIDTH}px` });
    }
  }
  /* eslint-enable react/no-did-mount-set-state */


  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      const { value } = nextProps;

      if (this.props.autoResize) {
        const w = typeof value === 'number' ?
          value.toString().length :
          value.length;

        this.setState({ width: `${w * CHAR_WIDTH}px` });
      }

      if (this.props.cacheValue) this.setState({ value });
      // if (this.props.validator) this.validate(value);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // If input has to auto-resize we need to re-render
    if (this.props.autoResize) return true;

    // If the input value has not changed do not re-render
    return this.props.cacheValue ?
      nextState.value !== this.state.value :
      nextProps.value !== this.props.value;
  }

  resize = () => {
    if (this.props.autoResize) {
      const { value } = this.props;
      const w = typeof value === 'number' ?
        value.toString().length :
        value.length;

      this.setState({ width: `${w * CHAR_WIDTH}px` });
    }
  }

  validate = (value) => {
    if (!this.props.validator(value)) {
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
  }

  handleChange = (evnt) => {
    let isValid = true;

    if (this.props.validator) {
      isValid = this.props.validator(evnt.target.value);
      this.setState({ isValid });
    }

    if (this.props.autoResize) this.resize();

    if (this.props.cacheValue) {
      this.setState({ value: evnt.target.value });
      // Don't call onChange if value is invalid
      if (isValid) this.props.onChange(evnt);
    } else {
      // TODO Should we not call onChange here if value is invalid?
      this.props.onChange(evnt);
    }
  }

  render() {
    // NOTE: `null` values are not valid input values.
    // Also remove onChange so that it is not given to subcomponents.
    const { onChange, ...rest } = this.props; // eslint-disable-line

    return (
      <InputWrapper {...rest} width={this.state.width}>
        <InputEl
          {...rest}
          onChange={this.handleChange}
          value={this.props.cacheValue
            ? getValidValue(this.state.value)
            : getValidValue(this.props.value)
          }
        />
        {!this.state.isValid &&
          <ValidationMessage>
            {this.props.validationMessage || 'Tarkista syötteesi!'}
          </ValidationMessage>
        }
      </InputWrapper>
    );
  }
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  position: relative;
  width: ${props => props.width || '100%'};
  ${props => props.validator && 'margin-bottom: 18px;'}
  ${props => props.maxW && `max-width: ${props.maxW};`}
  ${props => props.noMargin && 'margin: 0;'}
`;
const InputEl = styled.input`
  padding: 8px;
  font-size: 1rem;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${props => colorGetter(props, props.bg)
    || colorGetter(props, 'greyLighter')};
  color: ${props => colorGetter(props, 'textColorDark')};
  border: 1px solid ${props => props.error
    ? colorGetter(props, 'errorColor')
    : colorGetter(props, 'greyLight')
  };

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${props => colorGetter(props, 'primaryColorLight')};
  }
`;
const ValidationMessage = styled.div`
  font-size: 0.7rem;
  color: ${props => colorGetter(props, 'errorColor')};
  margin-top: 8px;
  position: absolute;
  bottom: -18px;
  left: 0px;
  animation: ${fadeIn} 0.4s;
`;

Input.propTypes = propTypes;
Input.defaultProps = {
  autoResize: false,
  cacheValue: false,
};

export default Input;
