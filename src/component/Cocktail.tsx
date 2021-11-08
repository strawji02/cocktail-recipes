import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { Recipe } from "../redux/modules/index.type";
interface Props {
  recipe: Recipe | undefined;
  parent: string;
}

function Cocktail({ recipe, parent }: Props) {
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients.data
  );

  if (!ingredients) return <div>data not loaded</div>;

  const ingredientTypeUtil = (ingredientType: number) => {
    switch (ingredientType) {
      case 0:
        return ingredients.base;
      case 1:
        return ingredients.liquor;
      case 2:
        return ingredients.beverage;
      case 3:
        return ingredients.other;
      default:
        return ingredients?.base;
    }
  };

  return (
    <div>
      칵테일 : {recipe?.cocktailName}
      <ul>
        {recipe?.ingredient.map((ingredient, index) => {
          const typedIngredient = ingredientTypeUtil(ingredient.ingredientType);
          const id = ingredient.id;
          return (
            <li key={`${parent}/ingredient.${id}.${ingredient.ingredientType}`}>
              {typedIngredient[id].name} : {recipe.ingredientAmountOZ[index]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cocktail;
