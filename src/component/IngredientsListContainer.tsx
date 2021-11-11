import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { setDrinksList } from "../redux/modules/drinksList";
import IngredientsList from "./IngredientsList";

const IngredientsListContainer = () => {
  const drinksList = useSelector((state: RootState) => state.drinksList);
  const dispatch = useDispatch();

  const includedDrinks = useSelector((state: RootState) => state.checklist);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients.data
  );

  const drinkListUtil = (
    selected: typeof includedDrinks.base | typeof includedDrinks.beverage,
    type: "base" | "beverage" | "liquor"
  ) => (ingredients ? selected.map((id: number) => ingredients[type][id]) : []);

  const drinkListReducer = (
    prevArr: Array<number>,
    curArr: Array<number>,
    curIndex: number
  ) => {
    if (curIndex === 0) {
      return curArr;
    } else {
      const newArr = curArr.filter((element) => prevArr.includes(element));
      return newArr;
    }
  };

  useEffect(() => {
    const allBaseDrinkList = drinkListUtil(includedDrinks.base, "base").map(
      (base) => base.includedDrinks
    );
    const allBeverageDrinkList = drinkListUtil(
      includedDrinks.beverage,
      "beverage"
    ).map((beverage) => beverage.includedDrinks);
    const allLiquorDrinkList = drinkListUtil(
      includedDrinks.liquor,
      "liquor"
    ).map((liquor) => liquor.includedDrinks);
    const tempDrinkList = allBaseDrinkList
      .concat(allBeverageDrinkList)
      .concat(allLiquorDrinkList);
    const uniqueDrinkList = tempDrinkList.reduce(drinkListReducer, []);
    if (JSON.stringify(uniqueDrinkList) !== JSON.stringify(drinksList)) {
      // setDrinksList(uniqueDrinkList);
      dispatch(setDrinksList(uniqueDrinkList));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [includedDrinks]);

  return (
    <div>
      <IngredientsList></IngredientsList>
    </div>
  );
};

export default IngredientsListContainer;
