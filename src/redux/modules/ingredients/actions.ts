import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { Ingredients } from "../index.type";

export const GET_INGREDIENTS = "ingredients/GET_INGREDIENT";
export const GET_INGREDIENTS_SUCCESS = "ingredients/GET_INGREDIENT_SUCCESS";
export const GET_INGREDIENTS_ERROR = "ingredients/GET_INGREDIENT_ERROR";

export const getIngredientsAsync = createAsyncAction(
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR
)<string | null, Ingredients, AxiosError>();
