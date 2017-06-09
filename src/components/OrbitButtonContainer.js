import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';

const propTypes = {
  children: PropTypes.array.isRequired,
  main: PropTypes.any,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  radius: PropTypes.number,
  size: PropTypes.string,
  bgColor: PropTypes.string,
};

export class PivotButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const { active } = this.state;
    const { onClick, main, radius, bgColor, ...rest } = this.props;

    return (
      <ButtonWrapper>
        <Main
          onClick={() => {
            this.setState({ active: true });
            if (onClick) onClick();
          }}
        >
          {main || (<IconButton
            className={this.props.icon}
            bgColor={bgColor}
            bg
            {...rest}
          />)}
        </Main>
        {React.Children.map(this.props.children,
          (child) => {
            return React.cloneElement(child, {
              radius: child.props.radius || radius || 32,
              bgColor: child.props.bgColor || bgColor,
              active,
              onClick: () => {
                this.setState({ active: false });
                if (child.props.onClick) child.props.onClick();
              },
            });
          })}
      </ButtonWrapper>
    );
  }
}

const toRad = angle => (angle / 180) * Math.PI;
const calcX = (angle, radius) => Math.cos(toRad(angle)) * radius;
const calcY = (angle, radius) => Math.sin(toRad(angle)) * radius;

const getAngle = (angle) => {
  if (typeof angle === 'number') return angle;
  const names = { 'north': -90, 'south': 90, 'east': 0, 'west': 180 };
  return names[angle] || 0;
};

// Styled components
const ButtonWrapper = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
`;

export const OrbitButton = styled(IconButton)`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.2s, transform 0.2s ease-out;
  transform: ${props => `
    translateX(${props.active
      ? calcX(getAngle(props.angle), props.radius) : 0}px)
    translateY(${props.active
      ? calcY(getAngle(props.angle), props.radius) : 0}px);`
  };
  transition-delay: ${props => props.delay || '0s'};
`;

const Main = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`;


PivotButton.propTypes = propTypes;
