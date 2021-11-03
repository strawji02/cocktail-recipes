import { getRecipiesAsync, GET_RECIPIES } from "./actions";
import { getRecipe } from "../../api/cocktails";
import { Recipe } from "../index.type";
import { call, put, takeEvery } from "redux-saga/effects";

function* getRecipeSaga(action: ReturnType<typeof getRecipiesAsync.request>) {
  try {
    const recipe: Recipe = yield call(getRecipe, action.payload);
    yield put(getRecipiesAsync.success(recipe));
  } catch (e: any) {
    yield put(getRecipiesAsync.failure(e));
  }
}

export function* recepieSaga() {
  yield takeEvery(GET_RECIPIES, getRecipeSaga);
}
