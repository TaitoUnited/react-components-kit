import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import color from 'color';

const CIRCLE_COMPLETE = 629;

const propTypes = {
  children: PropTypes.any,
  progress: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  color: PropTypes.string,
};

const clamp = (a, b, c) => Math.max(b, Math.min(c, a));

/* eslint-disable max-len */
const CircleProgress = ({
  progress = 0,
  size = '100px',
  color: c = 'blue',
  children,
}) => (
  <CircleWrapper size={size}>
    <Circle viewBox='-10 -10 220 220' progress={clamp(progress, 0, 100)} size={size}>
      <g fill='none' strokeWidth='3' transform='translate(100,100)'>
        <path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)' />
        <path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)' />
        <path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)' />
        <path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)' />
        <path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)' />
        <path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)' />
      </g>
    </Circle>
    <Circle viewBox='-10 -10 220 220' progress={clamp(progress, 0, 100)} size={size}>
      <path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' strokeDashoffset='629' />
    </Circle>
    <svg width='0' height='0'>
      <defs>
        <linearGradient id='cl1' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>
          <Stop stopColor={color(c).lighten(0.1).hsl().string()} />
          <Stop offset='100%' stopColor={color(c).hsl().string()} />
        </linearGradient>
        <linearGradient id='cl2' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='0' y2='1'>
          <Stop stopColor={color(c).hsl().string()} />
          <Stop offset='100%' stopColor={color(c).darken(0.2).hsl().string()} />
        </linearGradient>
        <linearGradient id='cl3' gradientUnits='objectBoundingBox' x1='1' y1='0' x2='0' y2='1'>
          <Stop stopColor={color(c).darken(0.2).hsl().string()} />
          <Stop offset='100%' stopColor={color(c).hsl().string()} />
        </linearGradient>
        <linearGradient id='cl4' gradientUnits='objectBoundingBox' x1='1' y1='1' x2='0' y2='0'>
          <Stop stopColor={color(c).hsl().string()} />
          <Stop offset='100%' stopColor={color(c).lighten(0.1).hsl().string()} />
        </linearGradient>
        <linearGradient id='cl5' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='0' y2='0'>
          <Stop stopColor={color(c).lighten(0.1).hsl().string()} />
          <Stop offset='100%' stopColor={color(c).darken(0.2).hsl().string()} />
        </linearGradient>
        <linearGradient id='cl6' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='0'>
          <Stop stopColor={color(c).darken(0.2).hsl().string()} />
          <Stop offset='100%' stopColor={color(c).lighten(0.1).hsl().string()} />
        </linearGradient>
      </defs>
    </svg>
    <InnerContent>
      {children}
    </InnerContent>
  </CircleWrapper>
);
/* eslint-enable max-len */

const CircleWrapper = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  display: inline-block;
  position: relative;
`;

const Circle = styled.svg`
  width: ${props => props.size};
  height: ${props => props.size};

  &:nth-child(2) {
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(-90deg);
  }
  &:nth-child(2) path {
    fill: none;
    stroke-width: 25;
    stroke-dasharray: ${CIRCLE_COMPLETE};
    stroke: #fff;
    opacity: 0.9;
    transition: stroke-dashoffset 0.2s ease;
    stroke-dashoffset: ${props => (CIRCLE_COMPLETE / 100) * props.progress};
  }
`;

const InnerContent = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stop = styled.stop`
  stop-color: ${props => props.stopColor};
`;

CircleProgress.propTypes = propTypes;

export default CircleProgress;
