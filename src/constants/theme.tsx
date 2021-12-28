import { colorType, fontType } from "../types/themeType";

const Colors: colorType = {
  PRIMARY_COLOR: "#397EF6",
  HOVER_COLOR: "#2E65C5",
  DISABLED_COLOR: "#B0CBFB",
  GRAY_ONE: "#FAFAFA",
  GRAY_TWO: "#EBECF3",
  GRAY_THREE: "#BABABA",
  GRAY_FOUR: "#888888",
  GRAY_FIVE: "#222222",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  DANGER: "#FF6262",
};
const Fonts: fontType = {
  FONT_ONE: {
    name: "Noto Sans CJK KR",
    HEADING_ONE: {
      fontWeight: "bold",
      fontSize: "34px",
      lineHeight: "51px",
    },
    HEADING_TWO: {
      fontWeight: "bold",
      fontSize: "32px",
      lineHeight: "48px",
    },
    HEADING_THREE: {
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "36px",
    },
    HEADING_FOUR: {
      fontWeight: "bold",
      fontSize: "22px",
      lineHeight: "33px",
    },
    HEADING_FIVE: {
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "27px",
    },
    HEADING_SIX: {
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "20px",
    },
    BODY_ONE: {
      fontWeight: "bold,medium,regular",
      fontSize: "16px",
      lineHeight: "24px",
    },
    BODY_TWO: {
      fontWeight: "bold,regular",
      fontSize: "14px",
      lineHeight: "20px",
    },
    BODY_THREE: {
      fontWeight: "medium,regular",
      fontSize: "12px",
      lineHeight: "28px",
    },
    PARAGRAPH_ONE: {
      fontWeight: "regular",
      fontSize: "14px",
      lineHeight: "23px",
    },
    BUTTON_ONE: {
      fontWeight: "bold,medium",
      fontSize: "16px",
      lineHeight: "24px",
    },
    BUTTON_TWO: {
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "20px",
    },
    BUTTON_THREE: {
      fontWeight: "medium",
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
  FONT_TWO: {
    name: "Noto Serif KR",
    HEADING_ONE: {
      fontWeight: "regular",
      fontSize: "48px",
      lineHeight: "62px",
    },
    HEADING_TWO: {
      fontWeight: "regular",
      fontSize: "20px",
      lineHeight: "26px",
    },
    BODY_ONE: {
      fontWeight: "regular",
      fontSize: "12px",
      lineHeight: "18px",
    },
    BODY_TWO: {
      fontWeight: "regular",
      fontSize: "10px",
      lineHeight: "15px",
    },
    PARAGRAPH_ONE: {
      fontWeight: "regular",
      fontSize: "20px",
      lineHeight: "32px",
    },
  },
};

const device = {
  PHONE: "360",
  DESKTOP: "1300",
};
const DeviceSize = {
  PHONE: `screen and (min-width: ${device.PHONE}px)`,
  DESKTOP: `screen and (min-width: ${device.DESKTOP}px)`,
};

// eslint-disable-next-line import/prefer-default-export
export const Theme = {
  DeviceSize,
  Fonts,
  Colors,
  device,
};
