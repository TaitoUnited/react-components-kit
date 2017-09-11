import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Icon, Tooltip, createTheme } from 'react-components-kit';

import { getColorData } from './utils';
import ThemeChanger from './components/ThemeChanger';
import Sidemenu from './components/Sidemenu';
import Sections from './components/Sections';

const themeOverrides = {
  dividerSpaceHorizontal: '32px',
  dividerSpaceVertical: '24px',
};

class App extends Component {
  state = {
    theme: {...createTheme(), ...themeOverrides},
    colorPanelOpen: false,
  };

  updateThemeColor = (colorName, newColorValue) => {
    const { group, isBaseColor } = getColorData(colorName);
    // base colors, e.g. primaryColor
    if (isBaseColor) {
      this.setState(prevState => ({
        theme: {
          ...prevState.theme,
          ...createTheme({
            primary: prevState.theme.primaryColor,
            secondary: prevState.theme.secondaryColor,
            error: prevState.theme.errorColor,
            success: prevState.theme.successColor,
            warn: prevState.theme.warnColor,
            grey: prevState.theme.grey,
            [group]: newColorValue,
          }),
        }
      }));
    } else {
      this.setState(prevState => ({
        theme: {
          ...prevState.theme,
          [colorName]: newColorValue,
        },
      }));
    }

  }

  closeColorPanel = () => {
    this.setState({ colorPanelOpen: false });
  }

  openColorPanel= () => {
    this.setState({ colorPanelOpen: true });
  }

  render() {
    const { theme, colorPanelOpen } = this.state;

    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppWrapper column>
            <ThemeChanger
              theme={theme}
              isOpen={colorPanelOpen}
              updateThemeColor={this.updateThemeColor}
              close={this.closeColorPanel}
            />

            <ThemeColorChangerButton>
              <Tooltip content='Change theme colors'>
                <Fab onClick={this.openColorPanel}>
                  <Icon color='#fff' name='android-color-palette' size='24px' />
                </Fab>
              </Tooltip>
            </ThemeColorChangerButton>

            <Content>
              <Sidemenu />
              <Sections />
            </Content>

          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

const AppWrapper = styled(Layout)`
  position: relative;
  background: #fff;
`;
const ThemeColorChangerButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 99;
`;
const Fab = styled.button`
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: tomato;
  color: #fff;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.3);
`;
const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export default App;
