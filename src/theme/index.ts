import {rgba, darken, lighten} from 'polished';

const standardDarker = 0.1;
const standardLighter = 0.1;
const standardOpactiy = 0.5;
const standardRadius = '2px';
const baseUnit = 5;

export const namedColors = {
  light: {
    white: '#fff',
    black: '#494949',
    bgColor: '#fff',
    fontColor: '#494949',
    positiveColor: '#00B391',
    neutralColor: '#50A2FF',
    warningColor: '#D49A00',
    negativeColor: '#D40000',
    quietColor: '#EEEEEE',
  }
}

export const lightTheme = {
  name: 'lightTheme',
  namedColors: { ...namedColors['light'] },
  standardOpactiy,
  standardLighter,
  standardDarker,
  standardRadius,
  baseUnit,

  // This is an intential duplicate of `neutralColorTranslucent`
  focusHaloColor: rgba(namedColors['light'].neutralColor, standardOpactiy),

  // Neutral colors
  neutralColor: namedColors['light'].neutralColor,
  neutralColorInverted: namedColors['light'].white,
  neutralColorDarker: darken(standardDarker, namedColors['light'].neutralColor),
  neutralColorLighter: lighten(standardLighter, namedColors['light'].neutralColor),
  neutralColorTranslucent: rgba(namedColors['light'].neutralColor, standardOpactiy),

  // Negative colors
  negativeColor: namedColors['light'].negativeColor,
  negativeInverted: namedColors['light'].white,
  negativeColorDarker: darken(standardDarker, namedColors['light'].negativeColor),
  negativeColorLighter: lighten(standardLighter, namedColors['light'].negativeColor),
  negativeColorTranslucent: rgba(namedColors['light'].negativeColor, standardOpactiy),

  // Positive Colors
  positiveColor: namedColors['light'].positiveColor,
  positiveColorInverted: namedColors['light'].white,
  positiveColorDarker: darken(standardDarker, namedColors['light'].positiveColor),
  positiveColorLighter: lighten(standardLighter, namedColors['light'].positiveColor),
  positiveColorTranslucent: rgba(namedColors['light'].positiveColor, standardOpactiy),

  // Warning Colors
  warningColor: namedColors['light'].warningColor,
  warningColorInverted: namedColors['light'].white,
  warningColorDarker: darken(standardDarker, namedColors['light'].warningColor),
  warningColorLighter: lighten(standardLighter, namedColors['light'].warningColor),
  warningColorTranslucent: rgba(namedColors['light'].warningColor, standardOpactiy),

  // Warning Colors
  quietColor: namedColors['light'].quietColor,
  quietColorInverted: namedColors['light'].black,
  quietColorDarker: darken(standardDarker, namedColors['light'].quietColor),
  quietColorLighter: lighten(standardLighter, namedColors['light'].quietColor),
  quietColorTranslucent: rgba(namedColors['light'].quietColor, standardOpactiy),
}

console.log(lightTheme);
