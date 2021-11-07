import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItem,
  ListItemButton,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import SearchModalCocktailList from "./SearchModalCocktailList";

interface Data {
  id?: number;
  name?: string;
  includedDrinks?: number[];
}

interface Props {
  filterdData: Data[];
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SearchList({ filterdData }: Props) {
  const [open, setOpen] = useState(false);
  const [drinksData, setDrinksData] = useState<Data>({});
  const handleOpen = (data: any) => {
    setDrinksData((d) => (d = data));
    setOpen(true);
  };
  const handleClose = () => {
    setDrinksData({});
    setOpen(false);
  };

  return (
    <div>
      {filterdData.length === 0 ? (
        <ListItem>검색 결과가 없습니다.</ListItem>
      ) : (
        filterdData.map((data, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                handleOpen(data);
              }}
            >
              {data.name}
            </ListItemButton>
          </ListItem>
        ))
      )}
      {open ? (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{drinksData.name}</DialogTitle>
          <DialogContent>
            {drinksData.includedDrinks ? (
              <SearchModalCocktailList
                drinksList={drinksData.includedDrinks}
              ></SearchModalCocktailList>
            ) : (
              <div>error</div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
}

export default SearchList;
