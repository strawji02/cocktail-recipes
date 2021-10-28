import React from "react";
import styled from "styled-components";

const SearchWindow = styled.input`
  border-style: none;
  border-bottom-style: solid;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

const Search = () => {
  return (
    <div>
      <SearchWindow placeholder="아무거나 검색해보세요!"></SearchWindow>
    </div>
  );
};

export default Search;
