import React, { PropTypes, Component } from 'react';
import styled, { keyframes } from 'styled-components';
import colorGetter from './colorGetter';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${props => props.maxW && `max-width: ${props.maxW};`}
`;

const TextareaEl = styled.textarea`
  padding: 8px;
  font-size: 1rem;
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: 4px;
  margin-top: 8px;
  max-width: 100%;
  overflow: hidden;
  height: ${props => props.height || '30px'};
  background-color: ${props => colorGetter(props, 'greyLighter')};
  border: 1px solid ${props => colorGetter(props, 'greyLight')};
  color: ${props => colorGetter(props, 'textColorDark')};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${props =>
      colorGetter(props, 'primaryColorLightest')
    };
  }
  @media print {
    height: ${props => props.height ? 'auto' : '24px'};
    margin-bottom: 4px;
  }
`;

const ValidationMessage = styled.div`
  font-size: 0.7rem;
  color: ${props => colorGetter(props, 'errorColor')};
  margin-top: 8px;
  position: absolute;
  bottom: -16px;
  left: 0px;
  animation: ${fadeIn} 0.4s;
`;

const propTypes = {
  autoResize: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  validator: PropTypes.func,
  validationMessage: PropTypes.string,
  cacheValue: PropTypes.bool,
};

const getValidValue = (value) => {
  return value !== null ? value : '';
};

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      height: null,
      isValid: true,
      value: getValidValue(props.value),
    };
  }

  /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    if (this.props.autoResize && this.node) {
      this.setState({ height: `${this.node.scrollHeight}px` });
    }
  }
  /* eslint-enable react/no-did-mount-set-state */

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      const { value } = nextProps;
      this.resize(500);
      if (this.props.cacheValue) this.setState({ value });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.autoResize) return true;
    // If the input value has not changed do not re-render
    return this.props.cacheValue ?
      nextState.value !== this.state.value :
      nextProps.value !== this.props.value;
  }

  resize(timeout = 0) {
    if (this.props.autoResize && this.node) {
      if (!timeout) {
        this.setState({ height: `${this.node.scrollHeight}px` });
      } else {
        setTimeout(() =>
          this.setState({ height: `${this.node.scrollHeight}px` }),
          500,
        );
      }
    }
  }

  handleChange(evnt) {
    let isValid = true;

    if (this.props.validator) {
      isValid = this.props.validator(evnt.target.value);
      this.setState({ isValid });
    }

    if (this.props.autoResize && this.node) this.resize();

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
    const { onChange, ...rest } = this.props; // eslint-disable-line

    return (
      <TextareaWrapper {...rest}>
        <TextareaEl
          {...rest}
          innerRef={(node) => { this.node = node; }}
          onChange={this.handleChange}
          height={this.state.height}
          value={this.props.cacheValue ?
            getValidValue(this.state.value) :
            getValidValue(this.props.value)
          }
        />
        {!this.state.isValid &&
          <ValidationMessage>
            {this.props.validationMessage || 'Tarkista syötteesi!'}
          </ValidationMessage>
        }
      </TextareaWrapper>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = {
  autoResize: true,
  cacheValue: false,
};

export default Textarea;
