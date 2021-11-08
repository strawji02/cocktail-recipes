import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DrinkList from "./DrinkList";
import IngredientsList from "./IngredientsList";

const StyledDrinkList = styled.div`
  position: absolute;
`;

const IngredientsListContainer = () => {
  const [includedDrinks, setIncludedDrinks] = useState({
    base: [],
    beverage: [],
  });
  const [drinksList, setDrinksList] = useState<Array<number>>([]);

  const drinkListUtil = (
    selected: typeof includedDrinks.base | typeof includedDrinks.beverage
  ) =>
    selected.map(
      (ingredients: { id: number; includedDrinks: Array<number> }) =>
        ingredients.includedDrinks
    );

  const drinkListCheckUtil = (
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
    const allBaseDrinkList = drinkListUtil(includedDrinks.base);
    const allBeverageDrinkList = drinkListUtil(includedDrinks.beverage);
    const uniqueDrinkList: Array<number> = [
      ...allBaseDrinkList,
      ...allBeverageDrinkList,
    ].reduce(drinkListCheckUtil, []);
    setDrinksList(uniqueDrinkList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [includedDrinks]);

  return (
    <div>
      <IngredientsList
        includedDrinks={includedDrinks}
        setIncludedDrinks={setIncludedDrinks}
      ></IngredientsList>
      <StyledDrinkList>
        <DrinkList drinksList={drinksList}></DrinkList>
      </StyledDrinkList>
    </div>
  );
};

export default IngredientsListContainer;
