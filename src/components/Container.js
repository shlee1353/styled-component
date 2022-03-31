import React from "react";
import styledComponents from "../styles/Container-style";
import { Cloud, Cloud2 } from "./svg";

const { CustomContainer } = styledComponents;

const Container = ({ currentThemeText }) => {
  return (
    <CustomContainer>
      <h1>{currentThemeText}</h1>
      <Cloud/>
      <Cloud2/>
    </CustomContainer>
  );
};

export default Container;