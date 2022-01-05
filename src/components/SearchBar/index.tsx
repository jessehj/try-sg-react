import React from "react";
import styled from "styled-components";
import { InputLayout } from "../Input";
import InputProps from "../Input/_interface";
import StyledInput from "../Input/styles";
import IconButton from "../IconButton";
import SearchIcon from "../../assets/icon/Search.svg";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

const SearchBar: React.FC<InputProps> = function SearchBar({
  inputName,
  placeholder,
  margin,
  children,
}) {
  return (
    <StyledInputLayout>
      <StyledSearchBar
        inputName={inputName}
        placeholder={placeholder}
        margin={margin}
        height="50px"
      >
        {children}
      </StyledSearchBar>
      <IconButtonWrap>
        <IconButton src={SearchIcon} width="24px" height="24px" />
      </IconButtonWrap>
    </StyledInputLayout>
  );
};

export default SearchBar;

const StyledSearchBar = styled(StyledInput)`
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  max-width: 792px;
  width: 100vw;
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    width: 300px;
  }
  background-color: rgba(0, 0, 0, 0);
`;
const IconButtonWrap = styled.div`
  position: absolute;
  right: -25px;
  top: 13px;
`;
const StyledInputLayout = styled(InputLayout)`
  margin: 96px 0 96px 0;
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    margin: 96px 0 32px 0;
  }
`;
