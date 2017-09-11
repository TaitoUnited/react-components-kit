import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import color from 'color';

const ESC = 27;

class Drawer extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    side: PropTypes.oneOf(['left', 'right']),
    bg: PropTypes.string,
    useGradient: PropTypes.bool,
    children: PropTypes.any,
  };

  static defaultProps = {
    bg: '#fff',
    side: 'right',
    useGradient: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      window.addEventListener('keydown', this.handleKeyDown);
    } else {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  handleKeyDown = ({ keyCode }) => {
    if (keyCode === ESC) this.props.toggleDrawer();
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <div>
        <Menu {...rest}>
          <Head side={rest.side}>
            <CloseButton onClick={this.props.toggleDrawer}>
              &times;
            </CloseButton>
          </Head>

          {children}
        </Menu>

        {rest.isOpen && <Backdrop onClick={this.props.toggleDrawer} />}
      </div>
    );
  }
}

const menuOnLeft = ({ side }) => side === 'left';
const menuOnRight = ({ side }) => side === 'right';
const getDir = ({ side }) => side === 'right' ? 1 : -1;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Head = styled.div`
  display: flex;
  justify-content: ${props => menuOnLeft(props) ? 'flex-end' : 'flex-start'};
  padding: 4px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 0.7;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.4s;
  z-index: 99;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  ${props => menuOnRight(props) && 'right: 0;'}
  ${props => menuOnLeft(props) && 'left: 0;'}
  width: 360px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.5);
  opacity: ${props => props.isOpen ? 1 : 0};
  transform: translateX(${props => props.isOpen ? 0 : getDir(props) * 360}px);
  transition: transform 0.4s cubic-bezier(0.2, 0.71, 0.14, 0.91);
  background: ${props => props.bg};
  background: ${props => props.useGradient && `linear-gradient(
    to bottom,
    ${props.bg} 0%,
    ${color(props.bg).darken(0.2).hsl().string()} 100%
  )`};
  
  @media (max-width: 400px) {
    width: 300px;
    transform: translateX(${props => props.isOpen ? 0 : getDir(props) * 300}px);
  }
`;

export default Drawer;
