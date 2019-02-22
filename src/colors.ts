import changeShade from './utils/changeShade';
import hex2Rgba from './utils/hex2Rgba';

const standardDarker = -0.5;
const standardLighter = 0.5;
const standardOpactiy = 0.5;

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

export const theme = {
  light: {
    namedColors: { ...namedColors['light'] },

    // This is an intential duplicate of `neutralColorTranslucent`
    focusHaloColor: hex2Rgba(namedColors['light'].neutralColor, standardOpactiy),

    // Neutral colors
    neutralColor: namedColors['light'].neutralColor,
    neutralColorInverted: namedColors['light'].white,
    neutralColorDarker: changeShade(namedColors['light'].neutralColor, standardDarker),
    neutralColorLighter: changeShade(namedColors['light'].neutralColor, standardLighter),
    neutralColorTranslucent: hex2Rgba(namedColors['light'].neutralColor, standardOpactiy),

    // Negative colors
    negativeColor: namedColors['light'].negativeColor,
    negativeInverted: namedColors['light'].white,
    negativeColorDarker: changeShade(namedColors['light'].negativeColor, standardDarker),
    negativeColorLighter: changeShade(namedColors['light'].negativeColor, standardLighter),
    negativeColorTranslucent: hex2Rgba(namedColors['light'].negativeColor, standardOpactiy),

    // Positive Colors
    positiveColor: namedColors['light'].positiveColor,
    positiveColorInverted: namedColors['light'].white,
    positiveColorDarker: changeShade(namedColors['light'].positiveColor, standardDarker),
    positiveColorLighter: changeShade(namedColors['light'].positiveColor, standardLighter),
    positiveColorTranslucent: hex2Rgba(namedColors['light'].positiveColor, standardOpactiy),

    // Warning Colors
    warningColor: namedColors['light'].warningColor,
    warningColorInverted: namedColors['light'].white,
    warningColorDarker: changeShade(namedColors['light'].warningColor, standardDarker),
    warningColorLighter: changeShade(namedColors['light'].warningColor, standardLighter),
    warningColorTranslucent: hex2Rgba(namedColors['light'].warningColor, standardOpactiy),

    // Warning Colors
    quietColor: namedColors['light'].quietColor,
    quietColorInverted: namedColors['light'].white,
    quietColorDarker: changeShade(namedColors['light'].quietColor, standardDarker),
    quietColorLighter: changeShade(namedColors['light'].quietColor, standardLighter),
    quietColorTranslucent: hex2Rgba(namedColors['light'].quietColor, standardOpactiy),
  },
}

export default theme;
