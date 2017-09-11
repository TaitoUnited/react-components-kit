# Component Docs

## Theming
Use [ThemeProvider](https://github.com/styled-components/styled-components#theming)
from styled-components to change the default theme.

```javascript
import { ThemeProvider } from 'styled-components';
import { Button } from 'react-components-kit';

const theme = {
  primaryColor: '#a600cc',
  primaryColorLight: '#db3bff',
  primaryColorLighter: '#e98aff',
  primaryColorLightest: '#f5c6ff',
  primaryColorDark: '#82199a',
  primaryColorDarker: '#6d0086',
  primaryColorDarkest: '#4a005a',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button primary>New colors yey!</Button>
    </ThemeProvider>
  );
}
```

The possible colors with to change are:
* **primaryColor**
* **secondaryColor**
* **errorColor**
* **warnColor**
* **successColor**
* **grey**

With these suffixes: `Light`, `Lighter`, `Lightest`, `Dark`, `Darker`, `Darkest`.

The remaining colors without suffixes to change are:
* **infoColor**
* **textColorDark**
* **textColorLight**

Check out the default theme variables in [createTheme.js](components/createTheme.js).

## Button

## Badge

## Card

## CircleProgress

## Form

## Heading

## Layout

## LineSeparator

## LoadingOverlay

## Padder

## PlaceholderRows

## Spinner

## SquareLoader

## Text

## ToggleSwitch

## Tooltip

## withRipple
