import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colorGetter from './colorGetter';

function getCursorType(props) {
  if (props.disabled) return 'not-allowed';
  return 'pointer';
}

const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${props => getCursorType(props)};
`;

const Icon = styled.i`
  font-size: ${props => props.size || '1.2rem'};
  color: ${props => colorGetter(props, props.color)
    || colorGetter(props, 'textColorDark')};
  border-radius: 50%;
  background-color: transparent;
  width: ${props => props.w || '32px'};
  height: ${props => props.h || '32px'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  ${props => props.hasBg && `background-color: ${
    colorGetter(props, props.bgColor || 'secondaryColorLighter')}`};

  &:active {
    background-color: ${props => colorGetter(props,
      props.bgColor || 'secondaryColorLight')};
  }
`;

const SubTitle = styled.span`
  margin-top: 8px;
  font-size: 10px;
  color: ${props => colorGetter(props, props.color)
    || colorGetter(props, 'textColorDark')};
`;

const IconButton = ({ subtitle, color, size, bg, className, ...rest }) => (
  <IconButtonWrapper {...rest}>
    <Icon className={className} color={color} size={size} hasBg={bg} />
    {subtitle &&
      <SubTitle color={color}>
        {subtitle}
      </SubTitle>
    }
  </IconButtonWrapper>
);

IconButton.propTypes = {
  subtitle: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  bg: PropTypes.bool,
};

export default IconButton;
