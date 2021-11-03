import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { RecipeList } from "../index.type";

export const GET_RECIPE_LIST = "recipeList/GET_RECIPE_LIST";
export const GET_RECIPE_LIST_SUCCESS = "recipeList/GET_RECIPE_LIST_SUCCESS";
export const GET_RECIPE_LIST_ERROR = "recipeList/GET_RECIPE_LIST_ERROR";

export const getRecipeListAsync = createAsyncAction(
  GET_RECIPE_LIST,
  GET_RECIPE_LIST_SUCCESS,
  GET_RECIPE_LIST_ERROR
)<string | null, RecipeList, AxiosError>();
