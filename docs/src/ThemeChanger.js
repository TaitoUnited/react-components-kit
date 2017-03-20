import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const ThemeChangerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  ${props => !props.isOpen && 'pointer-events: none;'}
`;
const ThemeChangerPanel = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #fff;
  padding: 16px;
  transition: transform 0.3s ease-in;
  will-change: transform;
  transform: translateX(${props => props.isOpen ? '0px' : '400px'});
  ${props => props.isOpen && 'box-shadow: 0px 0px 12px rgba(0,0,0,0.5);'}
  z-index: 999998;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999997;
  background-color: rgba(0,0,0,0.2);
  opacity: 0;
  transition-delay: 100;
  transition: opacity 0.2s ease;
  ${props => props.isOpen && 'opacity: 1;'}
`;
const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ColorBoxWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
  margin-right: 8px;
  border: 3px solid white;
  ${props => props.selected && 'border-color: slategrey;'}
  background-color: ${props => props.color};
`;
const ColorPicker = styled.div`
  width: 100%;
  margin-top: 32px;
`;


class ColorBox extends Component {
  shouldComponentUpdate(nextProps) {
    if ((nextProps.color !== this.props.color) ||
        (nextProps.selected !== this.props.selected)
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { color, selected } = this.props;
    return (
      <ColorBoxWrapper
        color={color}
        onClick={this.props.onClick}
        selected={selected}
      />
    );
  }
}


class ThemeChanger extends Component {
  constructor(props) {
    super(props);
    this.selectColorBox = this.selectColorBox.bind(this);
    this.state = {
      selected: null,
    }
  }

  selectColorBox(colorName) {
    this.setState({ selected: colorName });
  }

  render() {
    const { theme } = this.props;
    const colors = Object.entries(theme).sort((a, b) => {
      return a[0] < b[0];
    })

    return (
      <ThemeChangerWrapper isOpen={this.props.isOpen}>
        <ThemeChangerPanel isOpen={this.props.isOpen}>
          <Colors>
            {colors.map(([colorName, colorValue]) =>
              <ColorBox
                color={colorValue}
                onClick={() => this.selectColorBox(colorName)}
                selected={this.state.selected === colorName}
                key={colorName}
              />
            )}
          </Colors>
          <ColorPicker>
            {this.state.selected &&
              <SketchPicker
                color={
                  this.props.theme[this.state.selected] || '#fff'
                }
                onChangeComplete={(color, event) =>
                  this.props.updateThemeColor(
                    this.state.selected,
                    color.hex
                  )
                }
              />
            }
          </ColorPicker>
        </ThemeChangerPanel>

        <Backdrop onClick={this.props.close} isOpen={this.props.isOpen} />
      </ThemeChangerWrapper>
    );
  }
}

ThemeChanger.propTypes = {
  updateThemeColor: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ThemeChanger;
