import axios from 'axios';
import { Recipe, Ingredients, RecipeList } from '../modules/index.type';

// const BASE_API = 'https://exprestestserver.herokuapp.com';
const BASE_API = 'https://my-json-server.typicode.com/strawji02/json-db';

export async function getRecipe(id: number) {
  const response = await axios.get<Recipe>(`${BASE_API}/recipes/${id}`);
  return response.data;
}

export const getIngredients = async () => {
  const response = await axios.get<Ingredients>(`${BASE_API}/ingredients`);
  return response.data;
};

export const getRecipeList = async () => {
  const respose = await axios.get<RecipeList>(`${BASE_API}/recipesList`);
  return respose.data;
};
