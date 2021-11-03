import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { Recipe } from "../index.type";

export const GET_RECIPIES = "recipes/GET_RECIPIES";
export const GET_RECIPIES_SUCCESS = "recipes/GET_RECIPIES_SUCCESS";
export const GET_RECIPIES_ERROR = "recipes/GET_RECIPIES_ERROR";

export const getRecipiesAsync = createAsyncAction(
  GET_RECIPIES,
  GET_RECIPIES_SUCCESS,
  GET_RECIPIES_ERROR
)<number, Recipe, AxiosError>();
