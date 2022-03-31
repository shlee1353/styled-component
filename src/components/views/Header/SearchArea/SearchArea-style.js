import styled, { css } from "styled-components";

const CustomSearchArea =styled.div.attrs(({
        id: 'search',
    }))`
    position: absolute;
    top: 50%;
    left: 268px;
    margin-top: -28px;
    transform: translate(-255px, -4px);

    &::before {
        content: '';
        position: absolute;
        top: 22px;
        bottom: 23px;
        left: 59px;
        width: 1px;
        background-color: #e8ecee;
    }
`;

const styledComponents = { 
    CustomSearchArea
};

export default styledComponents;