import { getIngredientsAsync, GET_INGREDIENTS } from "./actions";
import { getIngredients, Ingredients } from "../../api/cocktails";
import { call, put, takeEvery } from "redux-saga/effects";

function* getIngredientsSaga() {
//action: ReturnType<typeof getIngredientsAsync.request>
  try {
    const ingredients: Ingredients = yield call(getIngredients);
    yield put(getIngredientsAsync.success(ingredients));
  } catch (e: any) {
    yield put(getIngredientsAsync.failure(e));
  }
}

export function* ingredientsSaga() {
  yield takeEvery(GET_INGREDIENTS, getIngredientsSaga);
  //GET_INGREDIENTS 액션이 들어오면 getIngredientsSaga 호출
}
