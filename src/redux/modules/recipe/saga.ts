import { getRecipieAsync, GET_RECIPE } from "./actions";
import { getRecipe } from "../../api/cocktails";
import { Recipe } from "../index.type";
import { call, put, takeEvery } from "redux-saga/effects";

function* getRecipeSaga(action: ReturnType<typeof getRecipieAsync.request>) {
  try {
    const recipe: Recipe = yield call(getRecipe, action.payload);
    yield put(getRecipieAsync.success(recipe));
  } catch (e: any) {
    yield put(getRecipieAsync.failure(e));
  }
}

export function* recepieSaga() {
  yield takeEvery(GET_RECIPE, getRecipeSaga);
}
