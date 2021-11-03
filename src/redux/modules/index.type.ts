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
  liquor: Liquor[];
  beverage: Beverage[];
  other: Other[];
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

export interface Base {
  id: number;
  baseName: string;
  includedDrinks: number[];
}

export interface Beverage {
  id: number;
  beverageName: string;
  includedDrinks: number[];
}

export interface Liquor {
  id: number;
  liquorName: string;
  includedDrinks: number[];
}

export interface Other {
  id: number;
  otherName: string;
  includedDrinks: number[];
}
