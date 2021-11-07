import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
import { getRecipieAsync, recipeInit } from "../redux/modules/recipe";
import Cocktail from "./Cocktail";

interface Props {
  drinksList: Array<number>;
}

function SearchModalCocktailList({ drinksList }: Props) {
  // redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.recipe.recipe
  );
  const dispatch = useDispatch();
  //////
  const [recipesList, setRecipesList] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipesList([]);
    drinksList.forEach((drinkId) => {
      console.log(drinkId);
      dispatch(getRecipieAsync.request(drinkId));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinksList]);

  useEffect(() => {
    if (!data) return;
    if (loading) return;
    if (drinksList.length === 0) return;
    setRecipesList((prevState: any) => [...prevState, data]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    console.log(recipesList, drinksList);
    if (recipesList.length === drinksList.length) dispatch(recipeInit(null));
  }, [recipesList]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div>
      <ul>
        {recipesList.map((recipe, index) => (
          <li key={`recipe.${recipe.id}:${recipe.cocktailName}`}>
            <Cocktail recipe={recipe}></Cocktail>
            {/* <div>
              칵테일 : {recipe?.cocktailName}
              <ul>
                {recipe?.ingredient.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.id}, {ingredient.ingredientType} :{" "}
                    {recipe.ingredientAmountOZ[index]}
                  </li>
                ))}
              </ul>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchModalCocktailList;
