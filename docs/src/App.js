import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Icon, Tooltip, createTheme } from 'react-components-kit';

import { getColorData } from './utils';
import ThemeChanger from './components/ThemeChanger';
import Sidemenu from './components/Sidemenu';
import Sections from './components/Sections';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: createTheme(),
      colorPanelOpen: false,
    };
  }

  updateThemeColor = (colorName, newColorValue) => {
    const { group, isBaseColor } = getColorData(colorName);
    // base colors, e.g. primaryColor
    if (isBaseColor) {
      this.setState(prevState => ({
        theme: {
          ...createTheme({
            primary: prevState.theme.primaryColor,
            secondary: prevState.theme.secondaryColor,
            error: prevState.theme.errorColor,
            success: prevState.theme.successColor,
            warn: prevState.theme.warnColor,
            grey: prevState.theme.grey,
            [group]: newColorValue,
          }),
          infoColor: prevState.theme.infoColor,
          textColorDark: prevState.theme.textColorDark,
          textColorLight: prevState.theme.textColorLight,
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
                  <Icon className='ion-android-color-palette' size='24px' />
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
`;
// const Logo = styled.img`
//   width: 30px;
//   height: auto;
//   margin-left: 16px;
// `;
const ThemeColorChangerButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
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
