import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
import { getRecipeListAsync } from "../redux/modules/recipeList";
import Cocktails from "./Cocktails";
const date = () => {
  const d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  const getDate = [year, month, day].join("");
  return `${getDate}`;
};

const RecommendedDrinks = () => {
  //redux
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.recipeList
  );
  useEffect(() => {
    dispatch(getRecipeListAsync.request(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //////

  const [recipesList, setRecipesList] = useState<Recipe[]>([]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>NO DATA</div>;

  const randomDrinkId = (parseInt(date()) * 806) % data.length;
  // console.log(randomDrinkId);

  return (
    <div>
      <Cocktails
        drinksList={[randomDrinkId]}
        recipesList={recipesList}
        setRecipesList={setRecipesList}
        key={1}
      ></Cocktails>
    </div>
  );
};

export default RecommendedDrinks;
