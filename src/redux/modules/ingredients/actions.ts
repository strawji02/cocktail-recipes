import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { Ingredients } from "../../../api/cocktails";

export const GET_RECIPIES = "loadcocktails/GET_RECIPIES";
export const GET_RECIPIES_SUCCESS = "loadcocktails/GET_RECIPIES_SUCCESS";
export const GET_RECIPIES_ERROR = "loadcocktails/GET_RECIPIES_ERROR";

export const GET_INGREDIENTS = "loadcocktials/GET_INGREDIENT";
export const GET_INGREDIENTS_SUCCESS = "loadcocktials/GET_INGREDIENT_SUCCESS";
export const GET_INGREDIENTS_ERROR = "loadcocktials/GET_INGREDIENT_ERROR";

export const getIngredientsAsync = createAsyncAction(
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR
)<string | null, Ingredients, AxiosError>();
