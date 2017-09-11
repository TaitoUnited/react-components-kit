import Color from 'color';

/**
 * Theme variables
 */

// Base `Color` can be used to create additional variations
function createTheme(baseColors = {}) {
  const {
    primary = '#2490ec',
    secondary = '#b57bff',
    error = '#ea4444',
    success = '#5bde4e',
    warn = '#ffb741',
    grey = '#ccc',
  } = baseColors;

  const theme = {};

  theme.primaryBaseColor = Color(primary);
  theme.primaryColor = Color(primary).hsl().string();
  theme.primaryColorLight = Color(primary).lighten(0.3).hsl().string();
  theme.primaryColorLighter = Color(primary).lighten(0.6).hsl().string();
  theme.primaryColorLightest = Color(primary).lighten(0.8).hsl().string();
  theme.primaryColorDark = Color(primary).darken(0.2).hsl().string();
  theme.primaryColorDarker = Color(primary).darken(0.4).hsl().string();
  theme.primaryColorDarkest = Color(primary).darken(0.6).hsl().string();

  theme.secondaryBaseColor = Color(secondary);
  theme.secondaryColor = Color(secondary).hsl().string();
  theme.secondaryColorLight = Color(secondary).lighten(0.1).hsl().string();
  theme.secondaryColorLighter = Color(secondary).lighten(0.2).hsl().string();
  theme.secondaryColorLightest = Color(secondary).lighten(0.3).hsl().string();
  theme.secondaryColorDark = Color(secondary).darken(0.2).hsl().string();
  theme.secondaryColorDarker = Color(secondary).darken(0.4).hsl().string();
  theme.secondaryColorDarkest = Color(secondary).darken(0.6).hsl().string();

  theme.errorBaseColor = Color(error);
  theme.errorColor = Color(error).hsl().string();
  theme.errorColorLight = Color(error).lighten(0.2).hsl().string();
  theme.errorColorLighter = Color(error).lighten(0.4).hsl().string();
  theme.errorColorLightest = Color(error).lighten(0.6).hsl().string();
  theme.errorColorDark = Color(error).darken(0.2).hsl().string();
  theme.errorColorDarker = Color(error).darken(0.4).hsl().string();
  theme.errorColorDarkest = Color(error).darken(0.6).hsl().string();

  theme.warnBaseColor = Color(warn);
  theme.warnColor = Color(warn).hsl().string();
  theme.warnColorLight = Color(warn).lighten(0.2).hsl().string();
  theme.warnColorLighter = Color(warn).lighten(0.3).hsl().string();
  theme.warnColorLightest = Color(warn).lighten(0.5).hsl().string();
  theme.warnColorDark = Color(warn).darken(0.2).hsl().string();
  theme.warnColorDarker = Color(warn).darken(0.3).hsl().string();
  theme.warnColorDarkest = Color(warn).darken(0.5).hsl().string();

  theme.successBaseColor = Color(success);
  theme.successColor = Color(success).hsl().string();
  theme.successColorLight = Color(success).lighten(0.2).hsl().string();
  theme.successColorLighter = Color(success).lighten(0.4).hsl().string();
  theme.successColorLightest = Color(success).lighten(0.6).hsl().string();
  theme.successColorDark = Color(success).darken(0.2).hsl().string();
  theme.successColorDarker = Color(success).darken(0.4).hsl().string();
  theme.successColorDarkest = Color(success).darken(0.6).hsl().string();

  /* eslint-disable newline-per-chained-call */
  theme.greyBaseColor = Color(grey);
  theme.grey = Color(grey).hsl().string();
  theme.greyLightest = Color(grey).lighten(0.20).grayscale().hsl().string();
  theme.greyLighter = Color(grey).lighten(0.15).grayscale().hsl().string();
  theme.greyLight = Color(grey).lighten(0.1).grayscale().hsl().string();
  theme.greyDark = Color(grey).darken(0.2).grayscale().hsl().string();
  theme.greyDarker = Color(grey).darken(0.3).grayscale().hsl().string();
  theme.greyDarkest = Color(grey).darken(0.5).grayscale().hsl().string();
  /* eslint-enable newline-per-chained-call */

  theme.infoColor = '#99d5f5';
  theme.textColorDark = '#222';
  theme.textColorLight = '#fff';
  theme.gutterSize = '16px';
  theme.dividerColor = '#ddd';
  theme.dividerSpaceHorizontal = '16px';
  theme.dividerSpaceVertical = '16px';

  return theme;
}

export default createTheme;
