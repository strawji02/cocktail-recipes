import axios from "axios";
import { Recipe, Ingredients, RecipeList } from "../modules/index.type";

export async function getRecipe(id: number) {
  const response = await axios.get<Recipe>(
    `http://localhost:4000/recipes/${id}`
  );
  return response.data;
}

export const getIngredients = async () => {
  const response = await axios.get<Ingredients>(
    "http://localhost:4000/ingredients"
  );
  return response.data;
};

export const getRecipeList = async () => {
  const respose = await axios.get<RecipeList>(
    "http://localhost:4000/recipesList"
  );
  return respose.data;
};
