import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import colorGetter from './colorGetter';

// Styled components
const ToggleSwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Toggle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  background-color: ${props => colorGetter(props, props.bgClear)};
  height: ${props => (props.width / 2)}px;
  width: ${props => props.width}px;
  border-radius: ${props => props.width / 4}px;
  padding: ${props => props.padding}px;
  border: 1px solid ${props => props.toggled ?
    colorGetter(props, props.bgToggled) :
    colorGetter(props, props.borderColor)
  };
`;

const ToggleBall = styled.div`
  z-index: 3;
  border-radius: 50%;
  background-color: ${props => colorGetter(props, props.ballColor)};
  box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
  transition: transform 0.3s cubic-bezier(1,.19,.15,.7);
  transition-delay: 0.1s;
  will-change: transform;
  border: 1px solid ${props => colorGetter(props, props.borderColor)};
  height: ${props => (props.width / 2) - (props.padding * 2)}px;
  width: ${props => (props.width / 2) - (props.padding * 2)}px;
  transform: ${props => props.toggled ?
    `translateX(${props.width - (props.width / 2)}px)` :
    'translateX(0px)'
  };

  &:active {
    background-color: ${props => colorGetter(props, props.ballColorActive)};
  }
`;

const RippleBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  background-image: radial-gradient(
    circle, ${props =>
      colorGetter(props, props.bgToggled)} 10%, transparent 10.01%
  );
  transform: ${props => props.visible ?
    'scale(10, 10)' :
    'scale(0, 0)'
  };
`;

const InnerLabel = styled.span`
  font-size: ${props => props.size};
  color: ${props => colorGetter(props, props.color)};
  position: absolute;
  z-index: 2;
  ${props => props.left && 'left: 10px;'};
  ${props => props.right && 'right: 10px;'};
`;

const OuterLabel = styled.span`
  font-size: ${props => props.size};
  color: ${props => colorGetter(props, props.color)};
  position: absolute;
  top: 0px;
  transform: translateY(calc(-100% - 8px));
  width: 100%;
  text-align: center;
`;

const propTypes = {
  innerLabelLeft: PropTypes.string,
  innerLabelRight: PropTypes.string,
  innerLabelColor: PropTypes.string,
  innerLabelSize: PropTypes.string,
  outerLabel: PropTypes.string,
  outerLabelColor: PropTypes.string,
  outerLabelSize: PropTypes.string,
  initial: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  ballColor: PropTypes.string.isRequired,
  ballColorActive: PropTypes.string.isRequired,
  bgToggled: PropTypes.string.isRequired,
  bgClear: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggled: props.initial || false,
    };
  }

  toggle() {
    // Update local state first and then call toggle handler
    this.setState(state => ({ toggled: !state.toggled }),
      () => this.props.onToggle(this.state.toggled),
    );
  }

  render() {
    return (
      <ToggleSwitchWrapper>

        {this.props.outerLabel &&
          <OuterLabel
            size={this.props.outerLabelSize}
            color={this.props.outerLabelColor}
          >
            {this.props.outerLabel}
          </OuterLabel>
        }

        <Toggle
          onClick={this.toggle}
          toggled={this.state.toggled}
          {...this.props}
        >
          <ToggleBall
            toggled={this.state.toggled}
            {...this.props}
          />
          <RippleBg
            visible={this.state.toggled}
            {...this.props}
          />

          {this.props.innerLabelLeft &&
            <InnerLabel
              left
              size={this.props.innerLabelSize}
              color={this.props.innerLabelColor}
            >
              {this.props.innerLabelLeft}
            </InnerLabel>
          }
          {this.props.innerLabelRight &&
            <InnerLabel
              right
              size={this.props.innerLabelSize}
              color={this.props.innerLabelColor}
            >
              {this.props.innerLabelRight}
            </InnerLabel>
          }
        </Toggle>
      </ToggleSwitchWrapper>
    );
  }
}


ToggleSwitch.propTypes = propTypes;

const green = '#22e222';
const lightGrey = '#f5f5f5';
const grey = '#ddd';
const white = '#fff';
const black = '#222';

ToggleSwitch.defaultProps = {
  initial: false,
  width: 80,
  padding: 3,
  ballColor: white,
  ballColorActive: lightGrey,
  bgToggled: green,
  bgClear: white,
  borderColor: grey,
  innerLabelSize: '12px',
  innerLabelColor: black,
  outerLabelSize: '16px',
  outerLabelColor: black,
};

export default ToggleSwitch;
