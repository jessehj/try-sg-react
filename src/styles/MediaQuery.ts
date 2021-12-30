export const MOBILE = "mobile";

export const breakpoints = {
  mobile: 360,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return `@media(max-width: ${breakpoints[key]}px)`;
};
