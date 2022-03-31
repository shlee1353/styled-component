import styled, { css } from "styled-components";

const CustomLogoArea = styled.div`
    position: relative;
    height: 100%;
`;

const LogoDefault = styled.h1`
    z-index: 1;
    position: absolute;
    top: 50%;
    left: -17px;
    margin-top: -32px;
`;

const LogoNaver = styled.a`
    display: block;

    &::before {
        content: 'N';
        display: inline-block;
        vertical-align: top;
        width: 22px;
        height: 22px;
        margin: 21px 19px 20px 19px;
    }
`;

const styledComponents = { 
    CustomLogoArea,
    LogoDefault,
    LogoNaver,
};

export default styledComponents;