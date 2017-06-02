import React, { PropTypes } from 'react';
import styled from 'styled-components';

import colorGetter from './colorGetter';

const CIRCLE_COMPLETE = 629;

const CircleWrapper = styled.div`
  display: inline-block;
  position: relative;
`;
const Circle = styled.svg`
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};

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
`;
const Stop = styled.stop`
  stop-color: ${props => colorGetter(props, props.stopColor)}
`;

const propTypes = {
  children: PropTypes.any,
  progress: PropTypes.number.isRequired,
  size: PropTypes.string,
};

/* eslint-disable max-len */
const CircleProgress = ({ progress, size = 200, children }) => {
  return (
    <CircleWrapper>
      <Circle viewBox='-10 -10 220 220' progress={progress} size={size}>
        <g fill='none' strokeWidth='3' transform='translate(100,100)'>
          <path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)' />
          <path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)' />
          <path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)' />
          <path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)' />
          <path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)' />
          <path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)' />
        </g>
      </Circle>
      <Circle viewBox='-10 -10 220 220' progress={progress} size={size}>
        <path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' strokeDashoffset='629' />
      </Circle>
      <svg width='0' height='0'>
        <defs>
          <linearGradient id='cl1' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>
            <Stop stopColor='secondaryColorLight' />
            <Stop offset='100%' stopColor='secondaryColor' />
          </linearGradient>
          <linearGradient id='cl2' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='0' y2='1'>
            <Stop stopColor='secondaryColor' />
            <Stop offset='100%' stopColor='secondaryColorDark' />
          </linearGradient>
          <linearGradient id='cl3' gradientUnits='objectBoundingBox' x1='1' y1='0' x2='0' y2='1'>
            <Stop stopColor='secondaryColorDark' />
            <Stop offset='100%' stopColor='secondaryColor' />
          </linearGradient>
          <linearGradient id='cl4' gradientUnits='objectBoundingBox' x1='1' y1='1' x2='0' y2='0'>
            <Stop stopColor='secondaryColor' />
            <Stop offset='100%' stopColor='secondaryColorLight' />
          </linearGradient>
          <linearGradient id='cl5' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='0' y2='0'>
            <Stop stopColor='secondaryColorLight' />
            <Stop offset='100%' stopColor='secondaryColorDark' />
          </linearGradient>
          <linearGradient id='cl6' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='0'>
            <Stop stopColor='secondaryColorDark' />
            <Stop offset='100%' stopColor={'secondaryColorLight'} />
          </linearGradient>
        </defs>
      </svg>
      <InnerContent>
        {children}
      </InnerContent>
    </CircleWrapper>
  );
};
/* eslint-enable max-len */

CircleProgress.propTypes = propTypes;

export default CircleProgress;
