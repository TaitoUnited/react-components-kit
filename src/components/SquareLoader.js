import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

const squareLoaderAnim = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(180deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
`;

const squareLoaderInnerAnim = keyframes`
  0% { height: 0; }
  25% { height: 0; }
  50% { height: 100%; }
  75% { height: 100%; }
  100% { height: 0; }
`;

const SquareLoaderWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-size: 0;
  color: #fff;
  width: 32px;
  height: 32px;
  ${props => props.dark && 'color: #333;'}
  ${props => props.sm && 'width: 16px;'}
  ${props => props.sm && 'height: 16px;'}
  ${props => props.md && 'width: 64px;'}
  ${props => props.md && 'height: 64px;'}
  ${props => props.lg && 'width: 96px;'}
  ${props => props.lg && 'height: 96px;'}
`;

const Block = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
  width: 100%;
  height: 100%;
  background: transparent;
  border-width: 2px;
  border-radius: 0;
  animation: ${squareLoaderAnim} 2s infinite ease;
  ${props => props.sm && 'border-width: 1px;'}
  ${props => props.md && 'border-width: 4px;'}
  ${props => props.lg && 'border-width: 6px;'}

  &:after {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    content: "";
    background-color: currentColor;
    animation: ${squareLoaderInnerAnim} 2s infinite ease-in;
  }
`;

const SquareLoader = props => (
  <SquareLoaderWrapper {...props}>
    <Block {...props} />
  </SquareLoaderWrapper>
);

SquareLoader.propTypes = {
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  dark: PropTypes.bool,
};

export default SquareLoader;
