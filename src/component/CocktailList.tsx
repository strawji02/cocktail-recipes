import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { getRecipiesAsync } from "../redux/modules/recipes";

interface Props {
  drinksList: Array<number>;
}

const CocktailList = ({ drinksList }: Props) => {
  // redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.recipes.recipe
  );
  const dispatch = useDispatch();
  useEffect(() => {
    drinksList.forEach((drinkId) => {
      dispatch(getRecipiesAsync.request(drinkId));
    });
  }, [dispatch, drinksList]);
  //////

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>NO DATA</div>;

  return <div>{data.id}</div>;
};

export default CocktailList;
