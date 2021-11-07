import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import * as Hangul from "hangul-js";
import TextFiled from "@mui/material/TextField";
import { List } from "@mui/material";
import SearchList from "./SearchList";

// const StyledSarchList = styled(SearchList)`
//   width: 100px;
// `;
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
      <TextFiled
        id="standard-basic"
        label="아무거나 검색해보세요!"
        fullWidth
        margin="dense"
        variant="standard"
        onChange={onChange}
        value={value}
      ></TextFiled>
      {/* <Menu open={false}></Menu> */}
      {value.length === 0 ? null : (
        <List
          sx={{
            maxWidth: 360,
            width: 1,
            bgcolor: "background.paper",
            position: "fixed",
            zIndex: 10,
            overflow: "auto",
            maxHeight: 300,
            backgroundColor: "#fafafa",
            "& ListItem": { padding: 0 },
          }}
        >
          <SearchList filterdData={filterdData}></SearchList>
        </List>
      )}
    </div>
  );
};

export default Search;
