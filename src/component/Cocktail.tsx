import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/modules';
import { Recipe } from '../redux/modules/index.type';
import cocktailImage from '../img/cocktail.jpg';

interface Props {
  recipe: Recipe | undefined;
  parent: string;
}

function Cocktail({ recipe, parent }: Props) {
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients.data,
  );

  if (!ingredients) return <div>data not loaded</div>;

  const ingredientTypeUtil = (ingredientType: number) => {
    switch (ingredientType) {
      case 0:
        return ingredients.base;
      case 1:
        return ingredients.liquor;
      case 2:
        return ingredients.beverage;
      case 3:
        return ingredients.other;
      default:
        return ingredients?.base;
    }
  };

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
      }}>
      <CardMedia
        component='img'
        height='200vh'
        image={`https://exprestestserver.herokuapp.com/images/${recipe?.id}.png`}
      />
      <CardContent>
        <Typography gutterBottom={true} variant='h5' component='div'>
          Cocktail : {recipe?.cocktailName ?? ''}
        </Typography>
        <List>
          {recipe?.ingredient.map((ingredient, index) => {
            const typedIngredient = ingredientTypeUtil(
              ingredient.ingredientType,
            );
            const id = ingredient.id;
            return (
              <ListItem
                key={`${parent}/ingredient.${id}.${ingredient.ingredientType}`}
                sx={{
                  padding: '1px',
                }}>
                {typedIngredient[id].name} : {recipe.ingredientAmountOZ[index]}{' '}
                ({recipe.ingredientAmountML[index]})
              </ListItem>
            );
          })}
        </List>
        <Typography variant='h6'>믹스 방법</Typography>
        <Typography variant='body1'>{recipe?.mixing}</Typography>
      </CardContent>
    </Card>
  );
}

export default Cocktail;
