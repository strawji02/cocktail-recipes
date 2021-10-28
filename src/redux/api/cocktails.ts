import axios from "axios";

export async function getRecipes(id: any) {
  const response = await axios.get<Recipe>(
    `http://localhost:4000/recipes/${id}`
  );
  return response.data;
}

export interface Recipe {
  id: number;
  cocktailName: string;
  ingredient: Ingredient[];
  ingredientAmountOZ: string[];
  ingredientAmountML: string[];
  mixing: string;
}

export interface Ingredient {
  base?: number;
  liquor?: number;
  beverage?: number;
  other?: number;
}

export const getIngredients = async () => {
  const response = await axios.get<Ingredients>(
    "http://localhost:4000/ingredients"
  );
  return response.data;
};

export interface Ingredients {
  base: Base[];
  liquor: Liquor[];
  beverage: Beverage[];
  other: Other[];
}

export interface Base {
  id: number;
  baseName: string;
  includedDrinks: number[];
}

export interface Beverage {
  id: number;
  beverageName: string;
  includedDrinks: number[];
}

export interface Liquor {
  id: number;
  liquorName: string;
  includedDrinks: number[];
}

export interface Other {
  id: number;
  otherName: string;
  includedDrinks: number[];
}
