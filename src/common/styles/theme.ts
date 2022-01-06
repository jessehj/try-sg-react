const getTypo = (
  bold: "bold" | "medium" | "regular",
  size: number,
  lineHeight = "1.5"
): string => {
  let fontWeight;
  switch (bold) {
    case "bold":
      fontWeight = "700";
      break;
    case "medium":
      fontWeight = "500";
      break;
    default:
      fontWeight = "400";
  }
  return `font-weight : ${fontWeight}; font-size : ${size}px; line-height: ${lineHeight}`;
};

const theme = {
  common: {
    colors: {
      primary: "#397EF6",
      hover: "#2E65C5",
      disabled: "#B0CBFB",
      background: "#FAFAFA",
      gray1: "#EBECF3",
      gray2: "#C9C9D2",
      gray3: "#BABABA",
      subText: "#888888",
      mainText: "#222222",
      white: "#FFF",
      black: "#000",
      error: "#FF6262",
    },
  },
  mobileHeader: {
    height: "60px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "80px",
    boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.06);",
    colors: {
      background: "white",
      unSelect: "#222",
      select: "#397EF6",
    },
  },
  shadow: {
    colors: "#000",
    basic: "box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.06); border-radius: 8px;",
    hover: "box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.2); border-radius: 8px;",
    mobile: "box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06); border-radius: 8px;",
    mobileHover:
      "box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2); border-radius: 8px;",
  },
  input: {
    colors: {
      border: "#EBECF3",
      borderActive: "#397EF6",
      borderError: "#FF6262",
      disabled: "#f2f2f2",
      text: "#222222",
      error: "#FF6262",
      success: "#397EF6",
      placeholder: "#BABABA",
    },
    padding: "0 20px",
    height: "56px",
  },
  button: {
    colors: {
      // primary
      borderPrimary: "#397EF6",
      bgPrimary: "#397EF6",
      textPrimary: "#ffffff",
      // primary + disabled
      borderDisabled: "#B0CBFB",
      bgDisabled: "#B0CBFB",
      textDisabled: "#ffffff",
      // primary + press
      borderPress: "#2E65C5",
      bgPress: "#2E65C5",
      textPress: "#ffffff",
      // ghost + Primary
      ghostBorder: "#397EF6",
      ghostBg: "#ffffff",
      ghostText: "#397EF6",
      // ghost + Press
      ghostBorderPress: "#2E65C5",
      ghostBgPress: "#ffffff",
      ghostTextPress: "#2E65C5",
      // ghost + disabled
      ghostBorderDisabled: "#B0CBFB",
      ghostBgDisabled: "#ffffff",
      ghostTextDisabled: "#B0CBFB",
      // lightGhost + Primary
      lightGhostBorder: "#888888",
      lightGhostBg: "#fff",
      lightGhostText: "#888888",
      // lightGhost + Press
      lightGhostBorderPress: "#222222",
      lightGhostBgPress: "#fff",
      lightGhostTextPress: "#222",
      // lightGhost + disabled
      lightGhostBorderDisabled: "#BABABA",
      lightGhostBgDisabled: "#FAFAFA",
      lightGhostTextDisabled: "#BABABA",
    },
    fontSizes: {
      small: "12px",
      medium: "14px",
      large: "16px",
    },
    heights: {
      small: "18px",
      medium: "40px",
      large: "48px",
      extraLarge: "56px",
    },
    radius: {
      basic: "8px",
      icon: "50%",
    },
  },
  typo: {
    head34: getTypo("bold", 34),
    head32: getTypo("bold", 32),
    head24: getTypo("bold", 24),
    head22: getTypo("bold", 22),
    head20: getTypo("bold", 18),
    head14: getTypo("bold", 14, "20px"),
    body16B: getTypo("bold", 16),
    body16M: getTypo("medium", 16),
    body16R: getTypo("regular", 16),
    body14B: getTypo("bold", 14, "20px"),
    body14R: getTypo("regular", 14, "20px"),
    body12M: getTypo("medium", 12),
    body12R: getTypo("regular", 12),
    button16B: getTypo("bold", 16),
    button16M: getTypo("medium", 16),
    button14: getTypo("bold", 14, "20px"),
    button12: getTypo("medium", 12),
    serifHead48: getTypo("regular", 48, "62px"),
    serifHead20: getTypo("regular", 20, "26px"),
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "700",
  },
  device: {
    tablet: `@media screen and (max-width: 768px)`,
  },
};

export default theme;
