import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import colorGetter from './colorGetter';

const textCss = css`
  font-size: ${props => props.size || '1rem'};
  ${props => props.lineh && `line-height: ${props.lineh};`};
  ${props => props.color && `color: ${colorGetter(props, props.color)};`}
`;
const Span = styled.span`
  ${textCss}
`;
const Paragraph = styled.p`
  ${textCss}
  line-height: 1.6;
  margin: 0;
`;
const Italic = styled.i`
  ${textCss}
`;
const Bold = styled.strong`
  ${textCss}
`;
const Thin = styled(Span)`
  font-weight: lighter;
`;

const Text = ({ el, children, ...rest }) => {
  if (el === 'p') return (<Paragraph {...rest}>{children}</Paragraph>);
  if (el === 'i') return (<Italic {...rest}>{children}</Italic>);
  if (el === 'strong') return (<Bold {...rest}>{children}</Bold>);
  if (el === 'thin') return (<Thin {...rest}>{children}</Thin>);
  return (<Span {...rest}>{children}</Span>);
};

Text.propTypes = {
  el: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
};

export default Text;
