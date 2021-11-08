import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/modules";

import DrinkList from "./DrinkList";
import IngredientsList from "./IngredientsList";

const StyledDrinkList = styled.div`
  position: absolute;
`;

const IngredientsListContainer = () => {
  // const [includedDrinks, setIncludedDrinks] = useState({
  //   base: [],
  //   beverage: [],
  // });
  const includedDrinks = useSelector((state: RootState) => state.checklist);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients.data
  );
  const [drinksList, setDrinksList] = useState<Array<number>>([]);

  const drinkListUtil = (
    selected: typeof includedDrinks.base | typeof includedDrinks.beverage,
    type: "base" | "beverage"
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
    const tempDrinkList = allBaseDrinkList.concat(allBeverageDrinkList);
    const uniqueDrinkList = tempDrinkList.reduce(drinkListReducer, []);
    if (JSON.stringify(uniqueDrinkList) !== JSON.stringify(drinksList)) {
      setDrinksList(uniqueDrinkList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [includedDrinks]);

  return (
    <div>
      <IngredientsList></IngredientsList>
      <StyledDrinkList>
        <DrinkList drinksList={drinksList}></DrinkList>
      </StyledDrinkList>
    </div>
  );
};

export default IngredientsListContainer;
