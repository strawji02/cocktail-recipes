import axios from 'axios';
import { Recipe, Ingredients, RecipeList } from '../modules/index.type';

export async function getRecipe(id: number) {
  const response = await axios.get<Recipe>(
    `https://exprestestserver.herokuapp.com/recipes/${id}`,
  );
  return response.data;
}

export const getIngredients = async () => {
  const response = await axios.get<Ingredients>(
    'https://exprestestserver.herokuapp.com/ingredients',
  );
  return response.data;
};

export const getRecipeList = async () => {
  const respose = await axios.get<RecipeList>(
    'https://exprestestserver.herokuapp.com/recipesList',
  );
  return respose.data;
};
