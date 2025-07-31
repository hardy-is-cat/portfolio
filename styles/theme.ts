import { Theme } from "@emotion/react";

const lightColors = {
  bg: "#fcfcfc",
  gnb: "#fdfdfd",
  text: "#2D373B",
  primary: "#F5467A",
  border: "#c4c4c4",
};

const darkColors = {
  bg: "#253034",
  gnb: "#2D373B",
  text: "#f6f6f6",
  primary: "#ACEA6E",
  border: "#c4c4c4",
};

const commonColors = {
  black: "#222",
  grey: "#555",
  white: "#efefef",
};

const fontSize = {
  xlText: "3rem",
  headline1: "2.25rem",
  headline2: "1.5rem",
  headline3: "1.25rem",
  headline4: "1.125rem",
  headline5: "1rem",
  description: "1rem",
  helperText: "0.875rem",
};

const customMediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

const mediaQuery = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(390),
};

const customFlexWidth = (maxWidth: number): string => {
  return `display: flex;
  flex-flow: row;
  justify-content: center;
  max-width: ${maxWidth}px;
  padding: 20px;
  margin: 0 auto;`;
};

const flexWidth = {
  custom: customFlexWidth,
  1280: customFlexWidth(1280),
};

export type LightColorTypes = typeof lightColors;
export type DarkColorTypes = typeof darkColors;
export type CommonColorTypes = typeof commonColors;
export type FontSizeTypes = typeof fontSize;
export type MediaQueryTypes = typeof mediaQuery;
export type FlexWidthTypes = typeof flexWidth;

export const darkTheme: Theme = {
  colors: darkColors,
  commonColors,
  mediaQuery,
  fontSize,
  flexWidth,
};

export const lightTheme: Theme = {
  colors: lightColors,
  commonColors,
  mediaQuery,
  fontSize,
  flexWidth,
};
