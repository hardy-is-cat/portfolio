import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

const globalStyles = (
  <Global
    styles={css`
      ${emotionReset}

      @font-face {
        font-family: "pretendard";
        src: url("/fonts/PretendardVariable.ttf") format("ttf");
      }

      html,
      body,
      input,
      button,
      textarea {
        font-family:
          "Montserrat",
          "pretendard",
          Pretendard,
          -apple-system,
          BlinkMacSystemFont,
          system-ui,
          Roboto,
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      section {
        padding-top: 100px;
        padding-bottom: 100px;
      }

      @media (max-width: 360px) {
        section {
          padding-top: 40px;
          padding-bottom: 40px;
        }
      }

      input,
      button {
        display: block;
      }

      h1,
      h2,
      h3 {
        font-weight: 700;
      }

      p {
        line-height: 1.5;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      .a11y-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        clip-path: polygon(0 0, 0 0, 0 0);
      }
    `}
  />
);

// const GlobalStyle = createGlobalStyle`
//   ${reset}

//   @font-face {
//     font-family: "pretendard";
//     src: url("/fonts/PretendardVariable.ttf") format("ttf");
//   }

//   html, body, input, button, textarea {
//     font-family: "Montserrat", "pretendard", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
//   }

//   * {
//     box-sizing: border-box;
//   }

//   section {
//     padding-top: 100px;
//     padding-bottom: 100px;
//   }

//   @media (max-width: 360px){
//     section {
//       padding-top: 40px;
//       padding-bottom: 40px;
//     }
//   }

//   input, button {
//     display: block;
//   }

//   h1, h2, h3 {
//     font-weight: 700;
//   }

//   p {
//     line-height: 1.5;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//   }

//   .a11y-hidden {
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     margin: -1px;
//     overflow: hidden;
//     clip-path: polygon(0 0, 0 0, 0 0);
//   }
// `;

export default globalStyles;
