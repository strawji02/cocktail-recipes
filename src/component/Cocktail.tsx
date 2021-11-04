import React from "react";
import { Recipe } from "../redux/modules/index.type";
interface Props {
  recipe: Recipe | undefined;
}

function Cocktail({ recipe }: Props) {
  return (
    <div>
      칵테일 : {recipe?.cocktailName}
      <br />
      <ul>
        {recipe?.ingredient.map((ingredient, index) => (
          <li key={index}>
            {ingredient.id}, {ingredient.ingredientType} :{" "}
            {recipe.ingredientAmountOZ[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cocktail;
