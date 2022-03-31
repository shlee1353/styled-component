import React from "react";
import styledComponents from "./LogoArea-style";
import Blind from '../../common/Blind';

const { 
    CustomLogoArea,
    LogoDefault,
    LogoNaver,
} = styledComponents;

const LogoArea = () => {
  return (
    <CustomLogoArea>
        <LogoDefault>
            <LogoNaver>
                <Blind text="네이버"/>
            </LogoNaver>
        </LogoDefault>
    </CustomLogoArea>
  );
};

export default LogoArea;