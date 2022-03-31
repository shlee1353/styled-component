import React from "react";
import styledComponents from "./Header-style";
import LogoArea from  "./LogoArea"
import SearchArea from  "./SearchArea"

const { 
  CustomHeader,
  HeaderBg,
  GroupFlex,
  LogoDefault,
  LogoNaver,
} = styledComponents;

const Header = () => {
  return (
    <CustomHeader>
        <HeaderBg>
          <GroupFlex>
            <LogoArea/>
            <SearchArea/>
          </GroupFlex>
        </HeaderBg>
    </CustomHeader>
  );
};

export default Header;