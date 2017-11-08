import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import colorGetter from './colorGetter';
import withRipple from './withRipple';


function getBgColor(props) {
  let color = colorGetter(props, 'primaryColor');
  let colorDark = colorGetter(props, 'primaryColorDark');

  // Determine color based on props
  if (props.secondary) {
    color = colorGetter(props, 'secondaryColor');
    colorDark = colorGetter(props, 'secondaryColorDark');
  }
  if (props.danger) {
    color = colorGetter(props, 'errorColor');
    colorDark = colorGetter(props, 'errorColorDark');
  }
  if (props.success) {
    color = colorGetter(props, 'successColor');
    colorDark = colorGetter(props, 'successColorDark');
  }
  if (props.outline || props.clear) {
    color = 'transparent';
    colorDark = 'transparent';
  }

  /* eslint-disable max-len */
  return `background: ${color}; background: linear-gradient(to bottom, ${color} 0%, ${colorDark} 100%);`;
  /* eslint-enable max-len */
}

function getHoverColor(props) {
  let color = colorGetter(props, 'primaryColorDark');
  if (props.secondary) color = colorGetter(props, 'secondaryColorDark');
  if (props.danger) color = colorGetter(props, 'errorColorDark');
  if (props.success) color = colorGetter(props, 'successColorDark');
  if (props.clear) color = 'transparent';

  return color;
}

function getActiveColor(props) {
  let color = colorGetter(props, 'primaryColorDarker');
  if (props.secondary) color = colorGetter(props, 'secondaryColorDarker');
  if (props.danger) color = colorGetter(props, 'errorColorDarker');
  if (props.success) color = colorGetter(props, 'successColorDarker');

  return color;
}

function getColor(props) {
  if (props.primary) return colorGetter(props, 'primaryColor');
  if (props.secondary) return colorGetter(props, 'secondaryColor');
  if (props.danger) return colorGetter(props, 'errorColor');
  if (props.success) return colorGetter(props, 'successColor');
  return colorGetter(props, 'primaryColor'); // default
}

const ButtonWrapper = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  font-weight: normal;
  border-style: solid;
  border-width: ${props => props.outline && !props.clear ? '1px' : '0px'};
  border-radius: 4px;
  border-color: ${props => getColor(props)};
  color: ${props => props.outline || props.clear ? getColor(props) : '#fff'};
  ${props => getBgColor(props)};
  ${props => !props.flat && !props.outline && css`
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  `}
  ${props => (!props.outline && !props.clear && !props.flat) && css`
    box-shadow: 1px 3px 6px rgba(0,0,0,0.1);
  `}
  ${props => props.flat && !props.clear && !props.outline && css`
    background: ${getColor(props)};
  `}
  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `};
  ${props => props.small && css`
    padding: 4px 8px;
    font-size: 12px;
  `}
  ${props => props.large && css`
    padding: 12px 20px;
    font-size: 24px;
  `}

  &:hover {
    background: ${props => getHoverColor(props)};
    ${props => !props.clear && 'color: #fff;'}
    ${props => !props.disabled && 'cursor: pointer;'}
  }

  &:active {
    background: ${props => !props.clear && getActiveColor(props)};
    color: ${props => props.clear && getActiveColor(props)};
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${props => props.disabled && 'pointer-events: none;'};
`;

const Button = ({ children, ...rest }) => (
  <ButtonWrapper {...rest}>
    <ButtonContent disabled={rest.disabled}>
      {children}
    </ButtonContent>
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.any,
};

export default withRipple(Button);
