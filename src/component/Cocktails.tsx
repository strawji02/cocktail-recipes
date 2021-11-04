import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
import { getRecipiesAsync } from "../redux/modules/recipe";

interface Props {
  drinksList: Array<number>;
  recipesList: Recipe[];
  setRecipesList: Dispatch<SetStateAction<any>>;
}

const Cocktails = ({ drinksList, recipesList, setRecipesList }: Props) => {
  // redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.recipe.recipe
  );
  const dispatch = useDispatch();
  //////

  const callDispatch = useCallback(() => {
    console.log("");
    drinksList.forEach((drinkId) => {
      dispatch(getRecipiesAsync.request(drinkId));
      console.log(drinkId);
    });
  }, [drinksList]);

  useEffect(() => {
    setRecipesList([]);
    callDispatch();
  }, [callDispatch]);

  useEffect(() => {
    if (!data) return;
    setRecipesList((prevState: any) => [...prevState, data]);
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
