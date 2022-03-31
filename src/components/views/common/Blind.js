import React from "react";
import styled from "styled-components";

const CustomBlind = styled.span`
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
`;

const Blind = ({text}) => {
  return (
    <CustomBlind>
        {text}
    </CustomBlind>
  );
};

export default Blind;