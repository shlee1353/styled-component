const fonts = {
  family: {
    default: `-apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif`,
    square: `"NanumSquare", "Malgun Gothic", "맑은 고딕", -apple-system, BlinkMacSystemFont, helvetica, "Apple SD Gothic Neo", sans-serif`,
    arial: `Arial, sans-serif`,
  },
  base: {
    size: "1.3rem",
    lineHeight: "1.6rem",
  },
  fzoom: {
    fzoom: "11px",
    fzoom1: "11.5px",
    fzoom2: "12px",
    fzoom3: "12.5px",
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  }
};
  
const colors = {
  red: "#ff4d4d",
  yellow: "#ffff4d",
  blue: "#0099ff",
};

const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};
  
// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

// 믹스인 함수
const mixins = {
  flexMixin: (direction = 'row', align = 'center', justify = 'center') => `
    display:flex;
    flex-direction:${direction};
    align-items:${align};
    justify-content:${justify}
  `,
  shadow: () => `
    box-shadow: 0 7px 4px #777;
  `
}

// 테마에 따라 다른 값을 갖는 색상 값입니다 
const lightThemeColors = {
  ...colors,
  primary: "#333",
  secondary: "#fff",
  tertiary: "#808080",
};

const darkThemeColors = {
  ...colors,
  primary: "#fff",
  secondary: "#333",
  tertiary: "#d4d0c4",
};

// 테마와 관련없이 공통으로 사용되는 변수들입니다
const defalutTheme = {
  fonts,
  device,
  mixins,
};
  
// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.
export const darkTheme = {
  ...defalutTheme,
  colors: darkThemeColors,
};

export const lightTheme = {
  ...defalutTheme,
  colors: lightThemeColors,
};