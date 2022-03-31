import styled, { css } from "styled-components";

const CustomContainer = styled.div`
  ${({ theme }) => {
    const { colors, device, fonts, mixins } = theme;
    return css`
      width: 100%;
      height: 100%;
      background-color: ${colors.tertiary};
      ${device.tablet} {
        background-color: ${colors.red};
      }

      h1 {
        ${mixins.shadow}
        padding: 5rem;
        text-align: center;
      }
    `;
  }}
`;

const styledComponents = { CustomContainer };

export default styledComponents;