/*
 * Colors are named like this: <group>Color<lightness>
 * Lightness may be blank, and 'Color' will be omitted with grey shades, eg. greyLight
 * Basecolors are all colors without a lightness, except for infoColor
*/

export const getColorData = colorName => {
  if (colorName.indexOf('Color') === -1) {
    return {
      group: 'grey',
      isBaseColor: colorName === 'grey',
      lightness: colorName.slice(4),
    };
  }

  const [group, lightness] = colorName.split('Color');

  return {
    group,
    lightness,
    colorName,
    isBaseColor: lightness === '' && group !== 'info' && group !== 'text',
  };
}

export const getColorName = colorData => {
  const { group, lightness } = colorData;

  return `${group}${group === 'grey' ? '' : 'Color'}${lightness}`;
}

export const ignoredThemeProps = [
  'infoColor',
  'textColorDark',
  'textColorLight',
  'gutterSize',
  'dividerColor',
  'dividerSpaceHorizontal',
  'dividerSpaceVertical',
];
