import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark';
    fonts: {
      family: string;
    };
    spacing: typeof spacing;
    color: typeof color;
    borderRadius: typeof borderRadius;
    boxShadow: typeof boxShadow;
    typoghaphy: typeof typoghaphy;
  }
}

const baseColors = {
  white: '#ffffff',
  black: '#202020',
  orange: { base: '#fb642d', light1: '#ffd4c4', dark1: '#bf4a22' },
  blue: { base: '#2e91ff', light1: '#cce5ff', dark1: '#215ea8' },
  red: { base: '#ff0042' },
  green: { base: '#00b669' },
  yellow: { base: '#ffc74d' },
  grey: {
    light1: '#f8f9fd',
    light2: '#f3f2f3',
    light3: '#f0f0f7',
    light4: '#eaeaf0',
    light5: '#d2d2e2',
    light6: '#c8c8cf',
    dark1: '#a4a6a8',
    dark2: '#9b9bac',
    dark3: '#9b9baa',
    dark4: '#9393a4',
    dark5: '#707070',
    dark6: '#5c5c6d',
    dark7: '#535365',
    dark8: '#494a59',
    dark9: '#3b3f48',
    dark10: '#32363e',
    dark11: '#2e2e38',
    dark12: '#00000029',
    dark13: '#00000014',
  },
};

const spaceUnit = 1;

const borderRadius = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
  round: '50%',
};

const spacing = {
  xxs: `${0.25 * spaceUnit}em`,
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
};

const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${baseColors.blue.dark1}, 0 0 0 4px ${baseColors.blue.light1}`,
};

const typoghaphy = {
  fontSize: {
    body: '1.125rem',
    bodyS: '1rem',
    bodyXS: '0.9rem',
    bodyXXS: '0.72rem',
    heading1: '2.74rem',
    heading2: '2.19rem',
    heading3: '1.75rem',
    heading4: '1.4rem',
  },
  fontWeight: {
    black: '900',
    bold: '700',
    medium: '500',
    regular: '400',
  },
};

const color = {
  buttonClear: 'transparent',
  buttonClearHover: baseColors.grey.light5,
  buttonPrimary: baseColors.orange.base,
  buttonPrimaryHover: baseColors.orange.dark1,
  buttonSecondary: baseColors.blue.base,
  buttonSecondaryHover: baseColors.blue.dark1,
  primaryText: baseColors.white,
  buttonText: baseColors.grey.dark10,
  white: baseColors.white,
  dark: baseColors.black,
  screenBackground: baseColors.white,
};

export const lightTheme: DefaultTheme = {
  borderRadius,
  boxShadow,
  color,
  fonts: {
    family: 'sans-serif',
  },
  name: 'light',
  spacing,
  typoghaphy,
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  borderRadius,
  boxShadow,
  color: {
    ...lightTheme.color,
    screenBackground: baseColors.grey.dark11,
  },
  fonts: {
    family: 'sans-serif',
  },
  name: 'dark',
  spacing,
  typoghaphy,
};
