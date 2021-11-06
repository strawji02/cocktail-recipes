import * as ingredientsActions from "./ingredients/actions";
import * as recipeActions from "./recipe/actions";
import * as RecipeListActions from "./recipeList/actions";
import { ActionType } from "typesafe-actions";
import { AsyncState } from "../lib/reducerUtils";

export type RecipeList = Array<string>;
export type RecipeListAction = ActionType<typeof RecipeListActions>;
export type RecipeListState = AsyncState<RecipeList, Error>;

export type IngredientsAction = ActionType<typeof ingredientsActions>;
export type IngredientsState = {
  ingredients: AsyncState<Ingredients, Error>;
};
export interface Ingredients {
  base: Base[];
  liquor: Base[];
  beverage: Base[];
  other: Base[];
}

export interface Base {
  id: number;
  name: string;
  includedDrinks: number[];
}

export type RecipeAction = ActionType<typeof recipeActions>;
export type RecipeState = {
  recipe: AsyncState<Recipe, Error>;
};
export interface Recipe {
  id: number;
  cocktailName: string;
  ingredient: Ingredient[];
  ingredientAmountOZ: string[];
  ingredientAmountML: string[];
  mixing: string;
}

export interface Ingredient {
  id: number;
  ingredientType: number;
}
