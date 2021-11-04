import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
import { getRecipieAsync } from "../redux/modules/recipe";
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
  const [recipesLoaded, setRecipesLoaded] = useState(false);

  useEffect(() => {
    setRecipesLoaded(false);
    setRecipesList([]);
    drinksList.forEach((drinkId) => {
      dispatch(getRecipieAsync.request(drinkId));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinksList]);

  useEffect(() => {
    if (!data) return;
    if (drinksList.length === 0) return;
    if (!recipesLoaded) {
      console.log(recipesLoaded, data);
      setRecipesList((prevState: any) => [...prevState, data]);
    }
    setRecipesLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipesLoaded ? null : data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>NO DATA</div>;

  return (
    <div>
      <ul>
        {recipesList.map((recipe) => (
          <li key={recipe.id}>
            <Cocktail recipe={recipe}></Cocktail>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinkList;
