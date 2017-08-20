import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import colorGetter from './colorGetter';

const propTypes = {
  autoResize: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  validator: PropTypes.func,
  validationMessage: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  cacheValue: PropTypes.bool,
  label: PropTypes.string,
  stackedLabel: PropTypes.bool,
  containerStyles: PropTypes.object,
  inputStyles: PropTypes.object,
  labelStyles: PropTypes.object,
};

// `null` values are not valid input values.
const getValidValue = value => value !== null ? value : '';

class TextField extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true,
      isFocused: false,
      value: getValidValue(props.value),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      const { value } = nextProps;

      this.validate(value);

      if (this.props.cacheValue) this.setState({ value });
    }
  }

  getValue = () => {
    return this.props.cacheValue
      ? getValidValue(this.state.value)
      : getValidValue(this.props.value);
  };

  validate = (value) => {
    if (!this.props.validator) return;
    this.setState({ isValid: this.props.validator(value) });
  }

  handleChange = (event) => {
    this.props.onChange(event);
    this.validate(event.target.value);

    if (this.props.cacheValue) {
      this.setState({ value: event.target.value });
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  handleLabelClick = () => {
    const { isFocused } = this.state;
    const value = this.getValue();

    if (!isFocused && !value) {
      this.setState({ isFocused });
      this._input.focus();
    }
  };

  render() {
    const {
      label,
      validator,
      stackedLabel,
      inputStyles,
      labelStyles,
      containerStyles,
      validationMessage,
      ...rest // placeholder text etc
    } = this.props;

    const { isFocused, isValid } = this.state;
    const value = this.getValue();
    const labelUp = stackedLabel || isFocused || value;

    return (
      <InputWrapper hasValidation={!!validator} style={containerStyles}>
        {label &&
          <Label
            up={labelUp}
            style={labelStyles}
            onClick={this.handleLabelClick}
          >
            {label}
          </Label>
        }

        <InputEl
          {...rest}
          value={value}
          style={inputStyles}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          innerRef={(node) => { this._input = node; }}
        />

        {!!validator && !isValid &&
          <ValidationMessage>
            {validationMessage}
          </ValidationMessage>
        }
      </InputWrapper>
    );
  }
}

const padV = 16;
const padH = 16;
const labelSize = 14;
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${props => props.hasValidation && 'margin-bottom: 18px;'}
`;
const Label = styled.label`
  display: inline-block;
  flex: none;
  align-self: flex-start;
  color: inherit;
  cursor: text;
  font-size: ${labelSize}px;
  will-change: transform;
  transition: transform 0.3s cubic-bezier(.06,.67,.32,.82);
  transform: translate(${padH}px, ${(1.333 * labelSize) + padV}px);
  ${props => props.up && css`
    transform: scale(0.8) translate(-2px, -2px);
  `}
`;
const InputEl = styled.input`
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  padding: ${padV}px ${padH}px;
  color: ${props => colorGetter(props, 'textColorDark')};
  background-color: ${props => colorGetter(props, 'greyLightest')};
  border: 1px solid ${props => props.error
    ? colorGetter(props, 'errorColor')
    : colorGetter(props, 'greyLight')
  };
  
  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  &:focus {
    box-shadow: 0px 0px 2px ${props => colorGetter(props, 'primaryColorLight')};
  }
`;
const ValidationMessage = styled.div`
  font-size: 14px;
  margin-top: 8px;
  position: absolute;
  bottom: -18px;
  left: 0px;
  animation: ${fadeIn} 0.4s;
  color: ${props => colorGetter(props, 'errorColor')};
`;

TextField.propTypes = propTypes;
TextField.defaultProps = {
  autoResize: false,
  cacheValue: false,
  validationMessage: 'Tarkista syötteesi!',
  containerStyles: {},
  inputStyles: {},
  labelStyles: {},
};

export default TextField;
