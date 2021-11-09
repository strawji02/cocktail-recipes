import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { getIngredientsAsync } from "../redux/modules/ingredients";
import Ingredient from "./Ingredient";
// interface Props {
//   includedDrinks: {
//     base: Array<{
//       id: number;
//       includedDrinks: Array<number>;
//     }>;
//     beverage: Array<{
//       id: number;
//       includedDrinks: Array<number>;
//     }>;
//   };
//   setIncludedDrinks: Dispatch<SetStateAction<any>>;
// }

function IngredientsList() {
  //redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsAsync.request(null));
  }, [dispatch]);
  //////
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>NO DATA</div>;

  return (
    <div>
      <Ingredient data={data.base} type="base"></Ingredient>
      <Ingredient data={data.beverage} type="beverage"></Ingredient>
    </div>
  );
}

export default IngredientsList;
