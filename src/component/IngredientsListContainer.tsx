import React, { useEffect, useState } from "react";
import BaseList from "./BaseList";
import BeverageList from "./BeverageList";
import Cocktais from "./Cocktails";

const IngredientsListContainer = () => {
  const [includedDrinks, setIncludedDrinks] = useState({
    base: [],
    beverage: [],
  });
  const [drinksList, setDrinksList] = useState<Array<number>>([]);
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
      {/* {drinksList.length !== 0 && 
      } */}
      <Cocktais drinksList={drinksList}></Cocktais>
    </div>
  );
};

export default IngredientsListContainer;
