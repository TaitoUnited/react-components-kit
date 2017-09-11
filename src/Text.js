import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colorGetter from './colorGetter';

const Base = styled.span`
  font-size: ${props => props.size || '16px'};
  color: ${props => props.color ? colorGetter(props, props.color) : '#222'};
  ${props => props.lineh && `line-height: ${props.lineh};`}
  ${props => props.align && `text-align: ${props.align || 'initial'};`}
`;

const Span = Base.withComponent('span');
const Italic = Base.withComponent('i');
const Bold = Base.withComponent('strong');
const P = Base.withComponent('p');
const Paragraph = P.extend`
  line-height: 1.6;
  margin: 0;
`;
const Thin = Span.extend`
font-weight: lighter;
`;

const Text = ({ p, i, bold, thin, children, ...rest }) => {
  if (p) return <Paragraph {...rest}>{children}</Paragraph>;
  if (i) return <Italic {...rest}>{children}</Italic>;
  if (bold) return <Bold {...rest}>{children}</Bold>;
  if (thin) return <Thin {...rest}>{children}</Thin>;
  return <Span {...rest}>{children}</Span>;
};

Text.propTypes = {
  p: PropTypes.bool,
  i: PropTypes.bool,
  bold: PropTypes.bool,
  thin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
};

export default Text;
