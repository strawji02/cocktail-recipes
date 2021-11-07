import { AxiosError } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";
import { Recipe } from "../index.type";

export const GET_RECIPE = "recipe/GET_RECIPE";
export const GET_RECIPE_SUCCESS = "recipe/GET_RECIPE_SUCCESS";
export const GET_RECIPE_ERROR = "recipe/GET_RECIPE_ERROR";
export const RECIPE_INIT = "recipe/RECIPE_INIT";

export const getRecipieAsync = createAsyncAction(
  GET_RECIPE,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_ERROR
)<number, Recipe, AxiosError>();

export const recipeInit = createAction(RECIPE_INIT)<null>();
