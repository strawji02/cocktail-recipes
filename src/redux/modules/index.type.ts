import * as ingredientsActions from "./ingredients/actions";
import * as recipeActions from "./recipes/actions";
import { ActionType } from "typesafe-actions";
import { AsyncState } from "../lib/reducerUtils";

export type IngredientsAction = ActionType<typeof ingredientsActions>;

export type IngredientsState = {
  ingredients: AsyncState<Ingredients, Error>;
};

export type RecipeAction = ActionType<typeof recipeActions>;

export type RecipeState = {
  recipe: AsyncState<Recipe, Error>;
};

export interface Recipe {
  id?: number;
  cocktailName?: string;
  ingredient?: Ingredient[];
  ingredientAmountOZ?: string[];
  ingredientAmountML?: string[];
  mixing?: string;
}

export interface Ingredient {
  base?: number;
  liquor?: number;
  beverage?: number;
  other?: number;
}

export interface Ingredients {
  base: Base[];
  liquor: Liquor[];
  beverage: Beverage[];
  other: Other[];
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
