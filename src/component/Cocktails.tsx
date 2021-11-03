import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
import { getRecipiesAsync } from "../redux/modules/recipes";

interface Props {
  drinksList: Array<number>;
}

const Cocktails = ({ drinksList }: Props) => {
  // redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.recipes.recipe
  );
  const dispatch = useDispatch();
  //////
  const [recipesList, setRecipesList] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipesList([]);
    drinksList.forEach((drinkId) => {
      dispatch(getRecipiesAsync.request(drinkId));
      console.log(drinkId);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinksList]);

  useEffect(() => {
    if (!data) return;
    setRecipesList((prevState) => [...prevState, data]);
  }, [data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>NO DATA</div>;

  return (
    <div>
      <ul>
        {recipesList.map((recipe) => (
          <li key={recipe.id}>
            칵테일 : {recipe.cocktailName}
            <br />
            재료 :
            <br />
            <ul>
              {recipe.ingredient?.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.id}, {ingredient.ingredientType} :{" "}
                  {recipe.ingredientAmountOZ[index]}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cocktails;
