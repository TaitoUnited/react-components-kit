import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const propTypes = {
  depth: PropTypes.number,
  animDir: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  children: PropTypes.any,
};

function getDepth(props) {
  if (props.depth === 1) return '0px 2px 4px rgba(0,0,0,0.1)';
  if (props.depth === 2) return '0px 4px 16px rgba(0,0,0,0.2)';
  if (props.depth === 3) return '0px 6px 22px rgba(0,0,0,0.3)';
  return '0px 2px 4px rgba(0,0,0,0.1)';
}

function getCardAnimation(props) {
  let dir = 'translateY';
  let sign = -1;

  if (props.animDir === 'left' || props.animDir === 'right') dir = 'translateX';
  if (props.animDir === 'top' || props.animDir === 'bottom') dir = 'translateY';
  if (props.animDir === 'bottom' || props.animDir === 'right') sign = 1;

  return keyframes`
    from { opacity: 0; transform: ${dir}(${sign * 22}px); }
    to { opacity: 1; transform: ${dir}(0px); }
  `;
}

const CardEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #fff;
  border-radius: 4px;
  width: 100%;
  box-shadow: ${props => getDepth(props)};
`;

const Animated = CardEl.extend`
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.4s ease-in;
  animation: ${props => getCardAnimation(props)} 1s forwards;
  animation-delay: 0.2s;
`;

class Card extends Component {
  static Animated = Animated;

  render() {
    const { children, ...rest } = this.props;
    return <CardEl {...rest}>{children}</CardEl>;
  }
}

Card.propTypes = propTypes;

export default Card;
