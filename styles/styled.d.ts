import "styled-components";
import {
  DarkColorTypes,
  LightColorTypes,
  FontSizeTypes,
  MediaQueryTypes,
  WidthTypes,
  CommonColorTypes,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: LightColorTypes | DarkColorTypes;
    commonColors: CommonColorTypes;
    fontSize: FontSizeTypes;
    media: MediaQueryTypes;
    width: WidthTypes;
  }
}
