import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import colorGetter from './colorGetter';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  validationMessage: PropTypes.string,
  validator: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  cacheValue: PropTypes.bool,
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
      <InputWrapper style={containerStyles}>
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
          notValid={!!validator && !isValid}
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
const fontSize = 16;

// paddings + font size + border
const inputHeight = (padV * 2) + fontSize + 2;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const Label = styled.label`
  display: inline-block;
  line-height: 1;
  flex: none;
  align-self: flex-start;
  color: inherit;
  cursor: text;
  font-size: ${labelSize}px;
  will-change: transform;
  transition: transform 0.3s cubic-bezier(.06,.67,.32,.82);
  transform: translate(${padH}px, ${(inputHeight / 2) + (labelSize / 2)}px);
  transform-origin: left;
  ${props => props.up && css`
    transform: scale(0.8) translate(4px, -6px);
  `}
`;
const InputEl = styled.input`
  font-size: ${fontSize}px;
  line-height: 1;
  border-radius: 3px;
  outline: none;
  padding: ${padV}px ${padH}px;
  color: ${props => colorGetter(props, 'textColorDark')};
  background-color: ${props => colorGetter(props, 'greyLightest')};
  border: 1px solid ${props => props.notValid
    ? colorGetter(props, 'errorColor')
    : colorGetter(props, 'greyLight')
  };
  ${props => props.notValid && 'margin-bottom: 16px;'}
  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  &:focus {
    box-shadow: 0px 0px 2px ${props => colorGetter(props, 'primaryColorLight')};
  }
`;
const ValidationMessage = styled.div`
  font-size: 12px;
  position: absolute;
  bottom: -6px;
  left: 8px;
  animation: ${fadeIn} 0.4s;
  color: ${props => colorGetter(props, 'errorColor')};
`;

TextField.propTypes = propTypes;
TextField.defaultProps = {
  cacheValue: false,
  validationMessage: 'Tarkista syötteesi!',
  containerStyles: {},
  inputStyles: {},
  labelStyles: {},
};

export default TextField;
