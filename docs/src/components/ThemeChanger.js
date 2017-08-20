import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import {
  Heading,
  LineSeparator,
  Layout,
  Box,
  Icon,
  Padder,
  Text,
} from 'react-components-kit';

import { getColorData, getColorName } from '../utils';

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

const rank = color => [
  'Darkest', 'Darker', 'Dark', 'Light', 'Lighter', 'Lightest'
].indexOf(color[0]);
    
const sortShades = shades => Object.entries(shades).sort(
  (a, b) => rank(a) - rank(b)
);

class ThemeChanger extends Component {
  state = {
    selected: null,
  }

  selectColorBox = (colorName) => {
    this.setState({ selected: colorName });
  }

  exportTheme = () => {
    const { theme } = this.props;
    const data = {};

    Object.entries(theme)
      .filter(([colorName]) => colorName.indexOf('Base') === -1)
      .forEach(([colorName, colorValue]) => { data[colorName] = colorValue; });

    const json = JSON.stringify(data, null, 2);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(json);
    const el = document.getElementById('downloadTheme');

    el.setAttribute('href', dataStr);
    el.setAttribute('download', 'theme.json');
    el.click();
  }

  render() {
    const { theme } = this.props;

    // Group colors by baseColor, and Filter 'Base' colors because
    // they are Color objects
    const baseColors = {};
    const derivedColors = {};
    const otherColors = [];

    Object.entries(theme)
      .filter(([colorName]) => colorName.indexOf('Base') === -1)
      .forEach(([colorName, colorValue]) => {
        const { group, lightness, isBaseColor } = getColorData(colorName);

        if (group === 'text' || group === 'info') {
          otherColors.push([colorName, colorValue]);
          return;
        }
        if (isBaseColor) {
          baseColors[group] = colorValue;
        } else {
          derivedColors[group] = {
            ...derivedColors[group],
            [lightness]: colorValue,
          }
        }
      });

    return (
      <ThemeChangerWrapper isOpen={this.props.isOpen}>
        <ThemeChangerPanel isOpen={this.props.isOpen}>
          <Layout column align='center'>
            <Box flex='1'>
              <Heading el='h2'>
                {this.state.selected || 'Choose color to change'}
              </Heading>
            </Box>
            <Box>
              <Layout column align='center'>
                <Box>
                  <ExportThemeBtn onClick={this.exportTheme}>
                    <Icon className='ion-ios-download' size='24px' color='#fff' />
                  </ExportThemeBtn>
                </Box>
                <Padder vert='8px' />
                <Box>
                  <Text size='12px' color='#666'>
                    Download theme (JSON)
                  </Text>
                </Box>
              </Layout>
            </Box>
          </Layout>

          <LineSeparator horizontal />

          <Layout row>
            <Layout column w='48px'>
              {Object.entries(baseColors).map(([group, value]) => {
                const colorName = getColorName({ group, lightness: '' });
                return (
                  <ColorBox
                    color={value}
                    label={colorName}
                    onClick={() => this.selectColorBox(colorName)}
                    selected={this.state.selected === colorName}
                    key={colorName}
                  />
                );
              })}
            </Layout>

            <LineSeparator vertical />

            <div>
              {Object.entries(derivedColors).map(([group, shades]) =>
                <Layout row>
                  {sortShades(shades).map(([lightness, value]) => {
                    const colorName = getColorName({ group, lightness });
                    return (
                      <ColorBox
                        color={value}
                        label={colorName}
                        onClick={() => this.selectColorBox(colorName)}
                        selected={this.state.selected === colorName}
                        key={colorName}
                      />
                    );
                  })}
                </Layout>
              )}
            </div>
          </Layout>

          <Padder vert='16px' />

          <Colors>
            {otherColors.map(([colorName, colorValue]) =>
              <ColorBox
                color={colorValue}
                label={colorName}
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
        <a id='downloadTheme' style={{ display: 'none' }} />
      </ThemeChangerWrapper>
    );
  }
}

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
  width: 420px;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #fff;
  padding: 16px;
  transition: transform 0.3s ease-in;
  will-change: transform;
  transform: translateX(${props => props.isOpen ? '0px' : '420px'});
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
  margin: 4px;
  border-radius: 4px;
  background-color: ${props => props.color};
  ${props => props.selected && 'border: 2px solid #222;'}
`;
const ColorPicker = styled.div`
  width: 100%;
  margin-top: 32px;
`;
const ExportThemeBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

ThemeChanger.propTypes = {
  updateThemeColor: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ThemeChanger;
