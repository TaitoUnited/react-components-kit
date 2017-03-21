/* eslint-disable max-len */

import Color from 'color';

/**
 * Theme variables
 */

const basePrimary = '#2490ec';
const baseSecondary = '#b57bff';
const baseError = '#ea4444';
const baseSuccess = '#5bde4e';
const baseWarn = '#ffb741';

export const infoColor = '#99d5f5';
export const textColorDark = '#222';
export const textColorLight = '#fff';

export const greyLightest = '#f7f7f7';
export const greyLighter = '#f2f2f2';
export const greyLight = '#eee';
export const greyDark = '#ccc';
export const greyDarker = '#888';
export const greyDarkest = '#666';

// Base `Color` can be used to create additional variations
export const primaryBaseColor = Color(basePrimary);
export const primaryColor = Color(basePrimary).hsl().string();
export const primaryColorLight = Color(basePrimary).lighten(0.3).hsl().string();
export const primaryColorLighter = Color(basePrimary).lighten(0.6).hsl().string();
export const primaryColorLightest = Color(basePrimary).lighten(0.8).hsl().string();
export const primaryColorDark = Color(basePrimary).darken(0.2).hsl().string();
export const primaryColorDarker = Color(basePrimary).darken(0.4).hsl().string();
export const primaryColorDarkest = Color(basePrimary).darken(0.6).hsl().string();

export const secondaryBaseColor = Color(baseSecondary);
export const secondaryColor = Color(baseSecondary).hsl().string();
export const secondaryColorLight = Color(baseSecondary).lighten(0.1).hsl().string();
export const secondaryColorLighter = Color(baseSecondary).lighten(0.2).hsl().string();
export const secondaryColorLightest = Color(baseSecondary).lighten(0.3).hsl().string();
export const secondaryColorDark = Color(baseSecondary).darken(0.2).hsl().string();
export const secondaryColorDarker = Color(baseSecondary).darken(0.4).hsl().string();
export const secondaryColorDarkest = Color(baseSecondary).darken(0.6).hsl().string();

export const errorBaseColor = Color(baseError);
export const errorColor = Color(baseError).hsl().string();
export const errorColorLight = Color(baseError).lighten(0.2).hsl().string();
export const errorColorLighter = Color(baseError).lighten(0.4).hsl().string();
export const errorColorLightest = Color(baseError).lighten(0.6).hsl().string();
export const errorColorDark = Color(baseError).darken(0.2).hsl().string();
export const errorColorDarker = Color(baseError).darken(0.4).hsl().string();
export const errorColorDarkest = Color(baseError).darken(0.6).hsl().string();

export const warnBaseColor = Color(baseWarn);
export const warnColor = Color(baseWarn).hsl().string();
export const warnColorLight = Color(baseWarn).lighten(0.2).hsl().string();
export const warnColorLighter = Color(baseWarn).lighten(0.3).hsl().string();
export const warnColorLightest = Color(baseWarn).lighten(0.5).hsl().string();
export const warnColorDark = Color(baseWarn).darken(0.2).hsl().string();
export const warnColorDarker = Color(baseWarn).darken(0.3).hsl().string();
export const warnColorDarkest = Color(baseWarn).darken(0.5).hsl().string();

export const successBaseColor = Color(baseSuccess);
export const successColor = Color(baseSuccess).hsl().string();
export const successColorLight = Color(baseSuccess).lighten(0.2).hsl().string();
export const successColorLighter = Color(baseSuccess).lighten(0.4).hsl().string();
export const successColorLightest = Color(baseSuccess).lighten(0.6).hsl().string();
export const successColorDark = Color(baseSuccess).darken(0.2).hsl().string();
export const successColorDarker = Color(baseSuccess).darken(0.4).hsl().string();
export const successColorDarkest = Color(baseSuccess).darken(0.6).hsl().string();

/* eslint-enable max-len */
