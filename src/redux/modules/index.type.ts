import * as actions from "./ingredients/actions";
import { ActionType } from "typesafe-actions";
import { Ingredients } from "../api/cocktails";
import { AsyncState } from "../lib/reducerUtils";

export type IngredientsAction = ActionType<typeof actions>;

export type IngredientsState = {
  ingredients: AsyncState<Ingredients, Error>;
};
