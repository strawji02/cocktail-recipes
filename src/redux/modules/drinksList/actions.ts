import { createAction } from "typesafe-actions";

export const SET_DRINK_LIST = "actions/SET_DRINK_LIST";

export const setDrinkList = createAction(SET_DRINK_LIST)<number[]>();
