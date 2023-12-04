import "styled-components";
import {
  DarkColorTypes,
  LightColorTypes,
  FontSizeTypes,
  MediaQueryTypes,
  WidthTypes,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: LightColorTypes | DarkColorTypes;
    fontSize: FontSizeTypes;
    media: MediaQueryTypes;
    width: WidthTypes;
  }
}
