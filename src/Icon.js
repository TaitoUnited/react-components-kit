import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import colorGetter from './colorGetter';

const getIconClassname = (type, name) => {
  if (type === 'ion') return `ion-${name}`;
  if (type === 'fa') return `fa fa-${name}`;
  return `ion-${name}`;
};

const Icon = ({ type = 'ion', name, ...rest }) => {
  return <IconEl className={getIconClassname(type, name)} {...rest} />;
};

const IconEl = styled.i`
  line-height: 1;
  font-size: ${props => props.size || '18px'};
  color: ${props => props.color ? colorGetter(props, props.color) : '#222'};

  ${props => props.touchable && css`
    opacity: 1;
    transition: opacity 0.1s linear;

    &:active {
      opacity: 0.4;
    }
  `}
`;

Icon.propTypes = {
  type: PropTypes.oneOf(['ion', 'fa']),
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
