export interface ColorType {
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
interface FontInner {
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
}

interface FontSans {
  name: string;
  HEADING_ONE: FontInner;
  HEADING_TWO: FontInner;
  HEADING_THREE: FontInner;
  HEADING_FOUR: FontInner;
  HEADING_FIVE: FontInner;
  HEADING_SIX: FontInner;
  BODY_ONE: FontInner;
  BODY_TWO: FontInner;
  BODY_THREE: FontInner;
  PARAGRAPH_ONE: FontInner;
  BUTTON_ONE: FontInner;
  BUTTON_TWO: FontInner;
  BUTTON_THREE: FontInner;
}
interface FontSerif {
  name: string;
  HEADING_ONE: FontInner;
  HEADING_TWO: FontInner;
  BODY_ONE: FontInner;
  BODY_TWO: FontInner;
  PARAGRAPH_ONE: FontInner;
}
export interface FontType {
  FONT_ONE: FontSans;
  FONT_TWO: FontSerif;
}
export interface DeviceSize {
  PHONE: number;
  DESKTOP: number;
}
export interface DeviceStyle {
  PHONE: string;
  DESKTOP: string;
}
