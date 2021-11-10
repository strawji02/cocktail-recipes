import { createAction } from "typesafe-actions";

export const SET_DRINKS_LIST = "actions/SET_DRINKS_LIST";

export const setDrinksList = createAction(SET_DRINKS_LIST)<number[]>();
