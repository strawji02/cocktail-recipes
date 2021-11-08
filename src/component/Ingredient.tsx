import {
  Checkbox,
  Container,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Tabs,
} from "@mui/material";
import React, { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { addList, delList } from "../redux/modules/checklist";
import { Base } from "../redux/modules/index.type";
interface Props {
  data: Base[];
  type: "base" | "beverage";
}

function Ingredient({ data, type }: Props) {
  //reudx
  const checklist = useSelector((state: RootState) => state.checklist[type]);
  const dispatch = useDispatch();
  /////

  const handleToggle = (value: number) => () => {
    const currentIndex = checklist.indexOf(value);

    if (currentIndex === -1) {
      dispatch(addList([value, type]));
    } else {
      dispatch(delList([value, type]));
    }
  };

  return (
    <Container
      sx={{
        maxWidth: 500,
        minWidth: 300,
      }}
    >
      <ImageList>
        {/* <Tabs
          variant="scrollable"
          scrollButtons="auto"
          sx={{ bgcolor: "background.paper" }}
        > */}
        {data.map((ingredients, index) => {
          return (
            <ImageListItem
              // disablePadding={true}
              key={`ingredient.${ingredients.id}:${ingredients.name}`}
            >
              <ListItemButton onClick={handleToggle(index)}>
                <Checkbox
                  edge="start"
                  checked={checklist.includes(index)}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText id={`${index}`} primary={`${ingredients.name}`} />
              </ListItemButton>
            </ImageListItem>
          );
        })}
        {/* </Tabs> */}
      </ImageList>
    </Container>
  );
}

export default Ingredient;
