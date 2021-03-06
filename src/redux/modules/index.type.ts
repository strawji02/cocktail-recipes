import * as ingredientsActions from './ingredients/actions';
import * as recipeActions from './recipe/actions';
import * as RecipeListActions from './recipeList/actions';
import * as ChecklistActions from './checklist/slice';
import * as DrinksListActions from './drinksList/slice';
import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../lib/reducerUtils';

export type IngredientsType = 'base' | 'beverage' | 'liquor' | 'other';

export type CheckListType = 'base' | 'beverage' | 'liquor';

export type DrinksListState = { drinks: number[] };
export type DrinksListAction = ActionType<typeof DrinksListActions>;

export type ChecklistState = {
  base: number[];
  beverage: number[];
  liquor: number[];
};
export type ChecklistAction = ActionType<typeof ChecklistActions>;

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
  mixing: string;
}

export interface Ingredient {
  id: number;
  ingredientType: IngredientsType;
  ingredientAmountOZ: string;
  ingredientAmountML: string;
}
