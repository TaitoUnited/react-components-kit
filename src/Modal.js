import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';

const DURATION = 200;
const ESC = 27;

// Static components has to be defined before class
const Body = styled.div`
  padding: 16px;
  flex: 1;
`;
const Footer = styled.div`
  border-top: 1px solid #f5f5f5;
  padding: 16px 16px 0px 16px;
  margin: 0px -16px;
  display: flex;
  justify-content: flex-end;
`;

class Modal extends PureComponent {
  static Body = Body;
  static Footer = Footer;

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    animateFromBottom: PropTypes.bool,
    disableBackdropAction: PropTypes.bool,
    contentStyles: PropTypes.object,
    backdropBg: PropTypes.string,
    children: PropTypes.any,
  };

  static defaultProps = {
    contentStyles: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      window.addEventListener('keydown', this.handleKeyDown);
    } else {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  handleKeyDown = ({ keyCode }) => {
    if (keyCode === ESC) this.props.hide();
  }

  render() {
    const {
      visible,
      hide,
      animateFromBottom,
      disableBackdropAction,
      contentStyles,
      children,
      backdropBg,
    } = this.props;

    return (
      <Transition in={visible} timeout={DURATION} mountOnEnter unmountOnExit>
        {(state) => {
          const show = state === 'entered';
          const dir = animateFromBottom ? 1 : -1;
          
          return (
            <Wrapper>
              <Main visible={show} dir={dir} style={contentStyles}>
                {children}
              </Main>
              <Backdrop
                visible={show}
                onClick={!disableBackdropAction && hide}
                bg={backdropBg}
              />
            </Wrapper>
          );
        }}
      </Transition>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : props.dir * 80}px);
  transition: all ${DURATION * 2}ms ease;
  width: calc(100% - 16px);
  max-width: 460px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 24px rgba(0,0,0,0.3);
  z-index: 101;
  display: flex;
  flex-direction: column;
`;

const Backdrop = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity ${DURATION}ms ease-in;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.bg || 'rgba(0,0,0,0.5)'};
  z-index: 100;
`;

export default Modal;
