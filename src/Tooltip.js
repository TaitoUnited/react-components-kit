import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const ARROW_HEIGHT = 6;

class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    content: PropTypes.any,
    color: PropTypes.string,
    bg: PropTypes.string,
    elevation: PropTypes.number,
    bottom: PropTypes.bool,
  }

  static defaultProps = {
    content: 'Tooltip default content',
    elevation: 99,
    bg: '#333',
    color: '#fff',
  }

  state = {
    tooltipVisible: false,
    leftPosition: null,
  };

  handleMouseLeave = () => {
    this.setState({ tooltipVisible: false });
  }

  handleMouseEnter = () => {
    const tipNode = this.tooltipRef;
    const tipWrapNode = this.tooltipWrapRef;
    const pos = -(tipNode.offsetWidth / 2) + (tipWrapNode.offsetWidth / 2);

    this.setState({ tooltipVisible: true, leftPosition: pos });
  }

  render() {
    const { content, children, bottom, bg, color, elevation } = this.props;
    const { tooltipVisible, leftPosition } = this.state;

    return (
      <TooltipContainer
        innerRef={(ref) => { this.tooltipWrapRef = ref; }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <TooltipBubble
          bg={bg}
          color={color}
          elevation={elevation}
          bottom={bottom}
          leftPosition={leftPosition || 0}
          visible={tooltipVisible}
          innerRef={(ref) => { this.tooltipRef = ref; }}
        >
          <TooltipArrow bg={bg} color={color} bottom={bottom} />
          {content}
        </TooltipBubble>
        {children}
      </TooltipContainer>
    );
  }
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  border: none;
  background: none;
  padding: 0;
`;
const TooltipBubble = styled.div`
  position: absolute;
  text-align: center;
  display: inline-block;
  border-radius: 4px;
  min-height: 32px;
  min-width: 100px;
  padding: 8px;
  line-height: 1.5;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0px 1px 6px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, opacity 0.3s ease;
  z-index: ${props => props.elevation};
  left: ${props => `${props.leftPosition}px`};
  color: ${props => props.color};
  background-color: ${props => props.bg};
  border-color: ${props => props.bg};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ?
    'translateY(0px)' :
    `translateY(${props.bottom ? -10 : 10}px)`
  };
  ${props => !props.visible && 'pointer-events: none;'}
  ${props => !props.bottom && `bottom: calc(100% + ${ARROW_HEIGHT + 6}px);`};
  ${props => props.bottom && `top: calc(100% + ${ARROW_HEIGHT + 6}px);`};
`;

const TooltipArrow = styled.span`
  width: 0px;
  height: 0px;
  position: absolute;
  border-top: ${`${ARROW_HEIGHT}px solid`};
  border-left: ${`${ARROW_HEIGHT}px solid transparent`};
  border-right: ${`${ARROW_HEIGHT}px solid transparent`};
  border-top-color: ${props => props.bg};
  left: ${`calc(50% - ${ARROW_HEIGHT}px)`};
  ${props => !props.bottom && `bottom: -${ARROW_HEIGHT}px;`}
  ${props => props.bottom && css`
    transform: rotate(180deg);
    top: -${ARROW_HEIGHT}px;
  `}
`;

export default Tooltip;
