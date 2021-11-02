import React, { useEffect, useState } from "react";
import BaseList from "./BaseList";
import BeverageList from "./BeverageList";

const IngredientsListContainer = () => {
  const [includedDrinks, setIncludedDrinks] = useState({
    base: [],
    beverage: [],
  });
  const [drinksList, setDrinksList] = useState(Array);
  useEffect(() => {
    const allBaseDrinkList = includedDrinks.base.map(
      (ingredients: { id: number; includedDrinks: Array<number> }) =>
        ingredients.includedDrinks
    );
    const allBeverageDrinkList = includedDrinks.beverage.map(
      (ingredients: { id: number; includedDrinks: Array<number> }) =>
        ingredients.includedDrinks
    );
    const drinkList = [...allBaseDrinkList, ...allBeverageDrinkList];
    const check = (
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
    const uniqueDrinkList: Array<number> = drinkList.reduce(check, []);
    setDrinksList(uniqueDrinkList);
  }, [includedDrinks.base, includedDrinks.beverage]);

  //cocktailList 컴포넌트 추가하기
  return (
    <div>
      <BaseList
        includedDrinks={includedDrinks}
        setIncludedDrinks={setIncludedDrinks}
      ></BaseList>
      <BeverageList
        includedDrinks={includedDrinks}
        setIncludedDrinks={setIncludedDrinks}
      ></BeverageList>

      <div>{drinksList}</div>
    </div>
  );
};

export default IngredientsListContainer;
