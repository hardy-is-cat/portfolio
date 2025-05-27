import "@emotion/react";
import {
  DarkColorTypes,
  LightColorTypes,
  FontSizeTypes,
  MediaQueryTypes,
  CommonColorTypes,
  FlexWidthTypes,
} from "styles/theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: DarkColorTypes | LightColorTypes;
    commonColors: CommonColorTypes;
    fontSize: FontSizeTypes;
    mediaQuery: MediaQueryTypes;
    flexWidth: FlexWidthTypes;
  }
}
