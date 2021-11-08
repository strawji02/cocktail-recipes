import {
  Backdrop,
  Box,
  Fade,
  ListItem,
  ListItemButton,
  Modal,
  Typography,
} from "@mui/material";

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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35%",
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: "60%",
  overflow: "scroll",
  p: 4,
};

function SearchList({ filterdData }: Props) {
  const [open, setOpen] = useState(false);
  const [drinksData, setDrinksData] = useState<Data>({});
  const handleOpen = (data: any) => {
    setDrinksData((d) => (d = data));
    setOpen(true);
  };
  const handleClose = () => {
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
      )}{" "}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography component={"span"} id="drink-name">
              {drinksData.name}
            </Typography>
            <Typography component={"span"} id="drink-list" sx={{ mt: 2 }}>
              {drinksData.includedDrinks ? (
                <SearchModalCocktailList
                  drinksList={drinksData.includedDrinks}
                ></SearchModalCocktailList>
              ) : (
                <div>error</div>
              )}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default SearchList;
