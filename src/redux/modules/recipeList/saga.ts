import { getRecipeListAsync, GET_RECIPE_LIST } from './actions';
import { getRecipeList } from '../../api/cocktails';
import { RecipeList } from '../index.type';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRecipeListSaga() {
  try {
    const recipeList: RecipeList = yield call(getRecipeList);
    yield put(getRecipeListAsync.success(recipeList));
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      yield put(getRecipeListAsync.failure(e));
    }
  }
}

export function* recipeListSaga() {
  yield takeEvery(GET_RECIPE_LIST, getRecipeListSaga);
}
