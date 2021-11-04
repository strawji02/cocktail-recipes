import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
import { getRecipieAsync } from "../redux/modules/recipe";
import Cocktail from "./Cocktail";
interface Props {
  drinkId: number;
}

function TodayDrink({ drinkId }: Props) {
  //redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.recipe.recipe
  );
  const dispatch = useDispatch();
  //////
  const [recipe, setRecipe] = useState<Recipe>();
  const [recipeLoaded, setRecipeLoaded] = useState(false);

  useEffect(() => {
    setRecipeLoaded(false);
    dispatch(getRecipieAsync.request(drinkId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinkId]);

  useEffect(() => {
    if (!data) return;
    setRecipeLoaded(true);
    setRecipe(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeLoaded ? drinkId : data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>NO DATA</div>;

  return <Cocktail recipe={recipe}></Cocktail>;
}

export default TodayDrink;
