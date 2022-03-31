import React from "react";
import styledComponents from "./SearchForm-style";

const { 
    CustomSearchForm,
} = styledComponents;

const SearchForm = () => {
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

export default SearchForm;