export const FROM_PC_TO_TABLET = "pc";
export const FROM_TABLET_TO_PHONE = "tablet";
export const FROM_PHONE_TO_SMALL_PHONE = "phone";

export const breakpoints = {
  pc: 1279,
  tablet: 767,
  phone: 355,
};

export const MediaQueries = (key: keyof typeof breakpoints) => {
  return `@media (max-width: ${breakpoints[key]}px)`;
};
