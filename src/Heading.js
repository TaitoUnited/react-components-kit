import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colorGetter from './colorGetter';

const HeadingEl = styled.h1`
  color: ${props => props.color ? colorGetter(props, props.color) : '#222'};
  font-weight: ${props => props.sub ? 500 : 700};
  ${props => props.size && `font-size: ${props.size};`}
`;

const H2 = HeadingEl.withComponent('h2');
const H3 = HeadingEl.withComponent('h3');
const H4 = HeadingEl.withComponent('h4');
const H5 = HeadingEl.withComponent('h5');

const Heading = ({ h2, h3, h4, h5, children, ...rest }) => {
  if (h2) return <H2 {...rest}>{children}</H2>;
  if (h3) return <H3 {...rest}>{children}</H3>;
  if (h4) return <H4 {...rest}>{children}</H4>;
  if (h5) return <H5 {...rest}>{children}</H5>;
  return <HeadingEl {...rest}>{children}</HeadingEl>;
};

Heading.propTypes = {
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  sub: PropTypes.bool,
  children: PropTypes.any,
};

export default Heading;
