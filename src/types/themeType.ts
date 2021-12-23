// eslint-disable-next-line @typescript-eslint/naming-convention
export interface colorType {
  PRIMARY_COLOR: string;
  HOVER_COLOR: string;
  DISABLED_COLOR: string;
  GRAY_ONE: string;
  GRAY_TWO: string;
  GRAY_THREE: string;
  GRAY_FOUR: string;
  GRAY_FIVE: string;
  WHITE: string;
  BLACK: string;
  DANGER: string;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
interface fontInner {
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface fontSans {
  name: string;
  HEADING_ONE: fontInner;
  HEADING_TWO: fontInner;
  HEADING_THREE: fontInner;
  HEADING_FOUR: fontInner;
  HEADING_FIVE: fontInner;
  HEADING_SIX: fontInner;
  BODY_ONE: fontInner;
  BODY_TWO: fontInner;
  BODY_THREE: fontInner;
  PARAGRAPH_ONE: fontInner;
  BUTTON_ONE: fontInner;
  BUTTON_TWO: fontInner;
  BUTTON_THREE: fontInner;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
interface fontSerif {
  name: string;
  HEADING_ONE: fontInner;
  HEADING_TWO: fontInner;
  BODY_ONE: fontInner;
  BODY_TWO: fontInner;
  PARAGRAPH_ONE: fontInner;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface fontType {
  FONT_ONE: fontSans;
  FONT_TWO: fontSerif;
}
