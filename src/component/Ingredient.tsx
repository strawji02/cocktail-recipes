import {
  Checkbox,
  Container,
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

    console.log(currentIndex);
    console.log(value);
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
      <List>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          sx={{ bgcolor: "background.paper" }}
        >
          {data.map((ingredients, index) => {
            return (
              <ListItem
                disablePadding={true}
                key={`ingredient.${ingredients.id}:${ingredients.name}`}
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
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </Tabs>
      </List>
    </Container>
  );
}

export default Ingredient;
