import { List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
import { getRecipieAsync, recipeInit } from "../redux/modules/recipe";
import Cocktail from "./Cocktail";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

interface Props {
  drinksList: Array<number>;
}

const DrinkList = ({ drinksList }: Props) => {
  // redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.recipe.recipe
  );
  const dispatch = useDispatch();
  //////
  const [recipesList, setRecipesList] = useState<Recipe[]>([]);
  const [recipesLoad, setRecipesLoad] = useState(false);

  useEffect(() => {
    setRecipesList([]);
    setRecipesLoad(false);
    drinksList.forEach((drinkId) => {
      dispatch(getRecipieAsync.request(drinkId));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinksList]);

  useEffect(() => {
    if (!data) return;
    if (drinksList.length === 0) return;
    if (!recipesLoad)
      setRecipesList((prevState: any) => {
        return [...prevState, data];
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (recipesList.length === drinksList.length) {
      dispatch(recipeInit(null));
      setRecipesLoad(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipesList]);

  if (loading && !recipesLoad) return <StyledDiv>로딩중...</StyledDiv>;
  if (error) return <div>에러 발생</div>;

  return (
    <List
      sx={{
        // position: "absolute",
        width: "100%",

        display: "flex",
      }}
    >
      {recipesList.map((recipe) => (
        <ListItem
          key={`DrinkList/recipe.${recipe.id}:${recipe.cocktailName}`}
          sx={{
            width: "max-content",
            height: "100%",
            marginLeft: "3vw",
            marginRight: "3vw",
          }}
        >
          <Cocktail parent="DrinkList" recipe={recipe}></Cocktail>
        </ListItem>
      ))}
    </List>
    // </Box>
  );
};

export default DrinkList;
