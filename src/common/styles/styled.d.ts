import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    common: {
      colors: {
        primary: string;
        hover: string;
        disabled: string;
        background: string;
        gray1: string;
        gray2: string;
        gray3: string;
        subText: string;
        mainText: string;
        white: string;
        black: string;
        error: string;
      };
    };
    mobileHeader: {
      height: string;
    };
    header: {
      height: string;
      display: string;
      alignItems: string;
      boxShadow: string;
      colors: {
        background: string;
        unSelect: string;
        select: string;
      };
    };
    shadow: {
      colors: string;
      basic: string;
      hover: string;
      mobile: string;
      mobileHover: string;
    };
    input: {
      padding: string;
      height: string;
      colors: {
        border: string;
        borderActive: string;
        borderError: string;
        disabled: string;
        text: string;
        error: string;
        success: string;
        placeholder: string;
      };
    };
    button: {
      colors: {
        // primary
        borderPrimary: string;
        bgPrimary: string;
        textPrimary: string;
        // primary + disabled
        borderDisabled: string;
        bgDisabled: string;
        textDisabled: string;
        // primary + press
        borderPress: string;
        bgPress: string;
        textPress: string;
        // ghost + Primary
        ghostBorder: string;
        ghostBg: string;
        ghostText: string;
        // ghost + Press
        ghostBorderPress: string;
        ghostBgPress: string;
        ghostTextPress: string;
        // ghost + disabled
        ghostBorderDisabled: string;
        ghostBgDisabled: string;
        ghostTextDisabled: string;
        // lightGhost + Primary
        lightGhostBorder: string;
        lightGhostBg: string;
        lightGhostText: string;
        // lightGhost + Press
        lightGhostBorderPress: string;
        lightGhostBgPress: string;
        lightGhostTextPress: string;
        // lightGhost + disabled
        lightGhostBorderDisabled: string;
        lightGhostBgDisabled: string;
        lightGhostTextDisabled: string;
      };
      fontSizes: {
        small: string;
        medium: string;
        large: string;
      };
      heights: {
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
      };
      radius: {
        basic: string;
        icon: string;
      };
    };
    fontWeights: {
      normal: string;
      medium: string;
      bold: string;
    };
    typo: {
      head34: string;
      head32: string;
      head24: string;
      head22: string;
      head20: string;
      head14: string;
      body16B: string;
      body16M: string;
      body16R: string;
      body14B: string;
      body14R: string;
      body12M: string;
      body12R: string;
      button16B: string;
      button16M: string;
      button14: string;
      button12: string;
      serifHead48: string;
      serifHead20: string;
    };
  }
}
