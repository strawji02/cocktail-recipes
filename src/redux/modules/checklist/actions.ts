import { createAction } from "typesafe-actions";

export const ADD_LIST = "checklist/ADD_LIST";
export const DEL_LIST = "checklist/DEL_LSIT";

export const addList = createAction(ADD_LIST)<[number, "base" | "beverage"]>();
export const delList = createAction(DEL_LIST)<[number, "base" | "beverage"]>();
