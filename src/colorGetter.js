import createTheme from './createTheme';

const defaultTheme = createTheme();

/* colorGetter =======
 *
 * We can use this helper function to grab given color value from either
 * the theme object if it is defined or the default theme variables.
 */

export default function colorGetter(props, colorName) {
  return props.theme
    ? props.theme[colorName] || defaultTheme[colorName] || colorName
    : defaultTheme[colorName] || colorName;
}
