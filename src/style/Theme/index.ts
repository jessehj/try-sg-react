export const Sizes = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1800px",
};

export const Theme = {
  mobile: `(max-width:${Sizes.mobile})`,
  tablet: `(max-width:${Sizes.tablet})`,
  laptop: `(max-width:${Sizes.laptop})`,
  desktop: `(min-width:${Sizes.desktop})`,
};
