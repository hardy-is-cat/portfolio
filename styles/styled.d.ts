import "styled-components";
import {
  DarkColorTypes,
  LightColorTypes,
  FontSizeTypes,
  MediaQueryTypes,
  CommonColorTypes,
  FlexWidthTypes,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: LightColorTypes | DarkColorTypes;
    commonColors: CommonColorTypes;
    fontSize: FontSizeTypes;
    media: MediaQueryTypes;
    flexWidth: FlexWidthTypes;
  }
}
