// import React from 'react';
import styled from 'styled-components';
import colorGetter from './colorGetter';

const getBgColor = (props) => {
  if (props.primary) return colorGetter(props, 'primaryColorLightest');
  if (props.secondary) return colorGetter(props, 'secondaryColorLightest');
  if (props.error) return colorGetter(props, 'errorColorLightest');
  if (props.success) return colorGetter(props, 'successColorLightest');
  return colorGetter(props, 'greyLightest');
};

const getBorderColor = (props) => {
  if (props.primary) return colorGetter(props, 'primaryColor');
  if (props.secondary) return colorGetter(props, 'secondaryColor');
  if (props.error) return colorGetter(props, 'errorColor');
  if (props.success) return colorGetter(props, 'successColor');
  return colorGetter(props, 'greyDark');
};

const getColor = (props) => {
  if (props.primary) return colorGetter(props, 'primaryColorDarker');
  if (props.secondary) return colorGetter(props, 'secondaryColorDarker');
  if (props.error) return colorGetter(props, 'errorColorDarker');
  if (props.success) return colorGetter(props, 'successColorDarker');
  return colorGetter(props, 'greyDarker');
};

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  border-radius: 4px;
  height: 22px;
  padding: 0px 6px;
  color: ${props => getColor(props)};
  background-color: ${props => getBgColor(props)};
  border: 1px solid ${props => getBorderColor(props)};
`;

export default Badge;
