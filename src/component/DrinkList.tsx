import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
import { getRecipieAsync, recipeInit } from "../redux/modules/recipe";
import Cocktail from "./Cocktail";

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

  if (loading && !recipesLoad) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div>
      <ul>
        {recipesList.map((recipe) => (
          <li key={`DrinkList/recipe.${recipe.id}:${recipe.cocktailName}`}>
            <Cocktail parent="DrinkList" recipe={recipe}></Cocktail>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinkList;
