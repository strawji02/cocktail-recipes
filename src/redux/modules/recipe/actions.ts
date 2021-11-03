import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { Recipe } from "../index.type";

export const GET_RECIPIE = "recipe/GET_RECIPIE";
export const GET_RECIPIE_SUCCESS = "recipe/GET_RECIPIE_SUCCESS";
export const GET_RECIPIE_ERROR = "recipe/GET_RECIPIE_ERROR";

export const getRecipiesAsync = createAsyncAction(
  GET_RECIPIE,
  GET_RECIPIE_SUCCESS,
  GET_RECIPIE_ERROR
)<number, Recipe, AxiosError>();
