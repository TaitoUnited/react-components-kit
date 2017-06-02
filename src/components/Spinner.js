
import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import colorGetter from './colorGetter';

const circleAnim = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

const getIconSize = ({ small, medium, large }) => {
  if (small) return '16px';
  if (medium) return '64px';
  if (large) return '96px';
  return '32px';
};

const getBorderWidth = ({ small, medium, large }) => {
  if (small) return '1px';
  if (medium) return '4px';
  if (large) return '6px';
  return '2px';
};

const Circle = styled.div`
  width: ${props => getIconSize(props)};
  height: ${props => getIconSize(props)};
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  font-size: 0px;
  color: ${props => colorGetter(props, props.color) || '#333'};
`;

const CircleInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  float: none;
  width: ${props => getIconSize(props)};
  height: ${props => getIconSize(props)};
  background: transparent;
  border: ${props => getBorderWidth(props)} solid currentColor;
  border-bottom-color: transparent;
  border-Radius: 100%;
  animation: ${circleAnim} 0.75s linear infinite;
`;

const Spinner = ({ sm, md, lg, color }) => (
  <Circle
    small={sm}
    medium={md}
    large={lg}
    color={color}
  >
    <CircleInner
      small={sm}
      medium={md}
      large={lg}
    />
  </Circle>
);

Spinner.propTypes = {
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  color: PropTypes.string,
};

export default Spinner;
