import React from "react";
import { Recipe } from "../redux/modules/index.type";
interface Props {
  recipe: Recipe | undefined;
}

function Cocktail({ recipe }: Props) {
  return (
    <div>
      칵테일 : {recipe?.cocktailName}
      <ul>
        {recipe?.ingredient.map((ingredient, index) => (
          <li key={`ingredient.${ingredient.id}.${ingredient.ingredientType}`}>
            {ingredient.id}, {ingredient.ingredientType} :{" "}
            {recipe.ingredientAmountOZ[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cocktail;
