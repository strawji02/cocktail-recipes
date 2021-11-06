import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/modules";
import * as Hangul from "hangul-js";

const SearchWindow = styled.input`
  border-style: none;
  border-bottom-style: solid;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

const Search = () => {
  //redux
  const recipeList = useSelector((state: RootState) => state.recipeList);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  //////

  const [value, setValue] = useState("");

  if (recipeList.loading || ingredients.loading) return <div>로딩중...</div>;
  if (recipeList.error || ingredients.error) return <div>에러 발생</div>;
  if (!recipeList.data || !ingredients.data) return <div>NO DATA</div>;

  const searchData = [
    ...recipeList.data.map((data, index) => {
      return { id: index, name: data, includedDrinks: [index] };
    }),
    ...ingredients.data.base.map((data) => data),
  ];

  const onChange = (e: any) => {
    setValue(e.target.value);

    const filterdData = searchData.filter((data) => {
      return Hangul.search(data.name, e.target.value) > -1;
    });
    console.log(filterdData);
  };

  return (
    <div>
      <SearchWindow
        placeholder="아무거나 검색해보세요!"
        onChange={onChange}
        value={value}
      ></SearchWindow>
    </div>
  );
};

export default Search;
