import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/modules";
import * as Hangul from "hangul-js";
import SearchList from "./SearchList";

const SearchWindow = styled.input`
  border-style: none;
  border-bottom-style: solid;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

interface Data {
  id: number;
  name: string;
  includedDrinks: number[];
}

const Search = () => {
  //redux
  const recipeList = useSelector((state: RootState) => state.recipeList);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  //////

  const [value, setValue] = useState("");
  const [filterdData, setFilterdData] = useState<Data[]>([]);

  useEffect(() => {
    console.log(value);
    if (value.length !== 0) {
      setFilterdData(
        (data) =>
          (data = searchData.filter((d) => Hangul.search(d.name, value) > -1))
      );
    } else {
      setFilterdData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (recipeList.loading || ingredients.loading) return <div>로딩중...</div>;
  if (recipeList.error || ingredients.error) return <div>에러 발생</div>;
  if (!recipeList.data || !ingredients.data) return <div>NO DATA</div>;

  const searchData: Data[] = [
    ...recipeList.data.map((data, index) => {
      return { id: index, name: data, includedDrinks: [index] };
    }),
    ...ingredients.data.base.map((data) => data),
    ...ingredients.data.beverage.map((data) => data),
    ...ingredients.data.liquor.map((data) => data),
    ...ingredients.data.other.map((data) => data),
  ];

  const onChange = (e: any) => {
    setValue((value) => (value = e.target.value));
  };

  return (
    <div>
      <SearchWindow
        placeholder="아무거나 검색해보세요!"
        onChange={onChange}
        value={value}
      ></SearchWindow>
      {value.length === 0 ? null : (
        <SearchList filterdData={filterdData}></SearchList>
      )}
    </div>
  );
};

export default Search;
