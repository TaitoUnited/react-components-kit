import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const propTypes = {
  onToggle: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired,
  innerLeft: PropTypes.any,
  innerRight: PropTypes.any,
  borderColor: PropTypes.string,
  bgToggled: PropTypes.string,
  bg: PropTypes.string,
};

const ToggleSwitch = ({
  isToggled,
  onToggle,
  innerLeft,
  innerRight,
  ...rest
}) => (
  <Wrapper>
    <Slider onClick={onToggle} isToggled={isToggled} {...rest}>
      <Ball {...rest} />
      <RippleBg visible={isToggled} {...rest} />

      {innerLeft && <LabelLeft>{innerLeft}</LabelLeft>}
      {innerRight && <LabelRight>{innerRight}</LabelRight>}
    </Slider>
  </Wrapper>
);

// Styled components

const WIDTH = 60;
const PAD = 4;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Ball = styled.div`
  z-index: 3;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 999px;
  box-shadow: 0px 1px 1px #fff inset, 0px 1px 1px rgba(0, 0, 0, 0.25);
  transition: width 0.2s ease, transform 0.3s cubic-bezier(1,.19,.15,.7);
  transition-delay: 0.1s;
  will-change: transform;
  height: ${(WIDTH / 2) - (PAD * 2)}px;
  width: ${(WIDTH / 2) - (PAD * 2)}px;

  &:active {
    background-color: #eee;
  }
`;

const LabelBase = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  transition: transform: 0.2s ease;
  display: flex;
  align-items: center;
`;

const LabelLeft = LabelBase.extend`
  left: 10px;
`;

const LabelRight = LabelBase.extend`
  right: 10px;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  height: ${WIDTH / 2}px;
  width: ${WIDTH}px;
  border-radius: 999px;
  padding: ${PAD}px;
  background-color: ${props => props.bg};
  border: 1px solid ${props => props.isToggled
    ? props.bgToggled
    : props.borderColor
  };

  ${props => props.isToggled && css`
    ${Ball} {
      transform: translateX(${WIDTH - (WIDTH / 2)}px);
    }

    ${LabelRight} {
      transform: translateX(${WIDTH}px);
    }
  `}

  ${props => !props.isToggled && css`
    ${LabelLeft} {
      transform: translateX(-${WIDTH}px);
    }
  `}
`;

const RippleBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  transform: scale(${props => props.visible ? 10 : 0});
  background-image: radial-gradient(
    circle,
    ${props => props.bgToggled} 10%,
    transparent 10.01%
  );
`;

ToggleSwitch.propTypes = propTypes;

ToggleSwitch.defaultProps = {
  borderColor: '#ccc',
  bgToggled: '#22e222',
  bg: '#f5f5f5',
};

export default ToggleSwitch;
