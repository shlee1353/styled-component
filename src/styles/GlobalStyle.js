import { createGlobalStyle, css } from "styled-components";
import reset from "./scss/reset.scss";

const GlobalStyle = createGlobalStyle`
    ${reset};

    ${({ theme }) => {
      let fzoomStyles = '';

      for (let i = 0; i < Object.keys(theme.fonts.fzoom).length; i++) {
        fzoomStyles += `
          ${i === 0 ? `&.fzoom` : `&.fzoom${i}`} {
              font-size: ${Object.values(theme.fonts.fzoom)[i]};
              line-height: ${Object.values(theme.fonts.fzoom)[i]};
            }
          `
      };

      return css`
        html {
          font-size: 10px;
          line-height: 10px;

          ${fzoomStyles}
        }

        body {
          font-size: ${theme.fonts.base.size};
          line-height: ${theme.fonts.base.lineHeight};
        }
      `;
    }}
`;

export default GlobalStyle;