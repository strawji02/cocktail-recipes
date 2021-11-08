import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import * as Hangul from "hangul-js";
import TextFiled from "@mui/material/TextField";
import { ClickAwayListener, List } from "@mui/material";
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
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current?.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

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
    if (e.target.value !== 0) setOpen(true);
  };
  const onClick = (e: any) => {
    setOpen((d) => (d = true));
  };

  return (
    <div>
      <TextFiled
        ref={anchorRef}
        id="standard-basic"
        label="아무거나 검색해보세요!"
        fullWidth
        margin="dense"
        variant="standard"
        onChange={onChange}
        onClick={onClick}
        value={value}
      ></TextFiled>
      {value.length === 0 ? null : (
        <ClickAwayListener onClickAway={handleClose}>
          {open ? (
            <List
              sx={{
                maxWidth: 360,
                width: 1,
                bgcolor: "background.paper",
                position: "absolute",
                zIndex: 0,
                overflow: "auto",
                maxHeight: 300,
                backgroundColor: "#fafafa",
              }}
            >
              <SearchList filterdData={filterdData}></SearchList>
            </List>
          ) : (
            <div></div>
          )}
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Search;
