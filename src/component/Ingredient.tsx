import {
  Checkbox,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
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
    <Container>
      <List
        sx={{
          width: "40vw",
          display: "flex",
          flexDirection: "row",
          overflow: "scroll",
          marginTop: "5vw",
          marginBottom: "5vw",
        }}
      >
        {data.map((ingredients, index) => {
          return (
            <ListItem
              disablePadding={true}
              key={`ingredient.${ingredients.id}:${ingredients.name}`}
              sx={{
                boxShadow: 1,
                margin: 1,
                width: "min-content",
              }}
            >
              <ListItemButton onClick={handleToggle(index)} dense>
                <Checkbox
                  edge="start"
                  checked={checklist.includes(index)}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText
                  id={`${index}`}
                  primary={`${ingredients.name}`}
                  sx={{ width: "max-content" }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default Ingredient;
