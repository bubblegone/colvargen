import Color from 'color';
import { NEARLY_BLACK, NEARLY_WHITE } from './colorValues';

export const DARKEN_VALUES = [0.4, 0.3, 0.2, 0.1];
export const LIGHTEN_VALUES = [0.1, 0.2, 0.3, 0.4];

export const getContrastColor = (backgroundColor: string) => {
    return new Color(backgroundColor).isLight() ? NEARLY_BLACK : NEARLY_WHITE;
};

export const getDarkerVariations = (colorValue: string) => {
    const color = new Color(colorValue);
    return DARKEN_VALUES.map(value => color.darken(value).hex());
};

export const getLightVariations = (colorValue: string) => {
    const color = new Color(colorValue);
    return LIGHTEN_VALUES.map(value => color.lighten(value).hex());
};
