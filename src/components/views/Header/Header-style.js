import styled, { css } from "styled-components";

const CustomHeader = styled.div.attrs(({
        id: 'header',
        role: 'banner'
    }))`
    z-index: 20000;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #fff;
`

const HeaderBg = styled.div`
    position: relative;
    height: 64px;
    border-bottom: 1px solid #e4e8eb;
    background-color: #fff;
    border-color: #10ce72;
`;

const GroupFlex = styled.div`
    position: relative;
    width: 1130px;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;
`;

const styledComponents = { 
    CustomHeader,
    HeaderBg,
    GroupFlex,
};

export default styledComponents;