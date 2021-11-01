import React, { useState } from "react";
import BaseList from "./BaseList";
import BeverageList from "./BeverageList";

const IngredientsListContainer = () => {
  const [includedDrinks, setIncludedDrinks] = useState({
    base: [],
    beverage: [],
  });

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
    </div>
  );
};

export default IngredientsListContainer;
