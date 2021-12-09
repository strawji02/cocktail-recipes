import React from 'react';
import styled from 'styled-components';
import RecommendedDrinks from './component/RecommendedDrinks';
import Search from './component/Search';
import IngredientsListContainer from './component/IngredientsListContainer';
import DrinkList from './component/DrinkList';
import { useSelector } from 'react-redux';
import { RootState } from './redux/modules';

const StyledTitle = styled.h1`
  grid-column: 3/5;
  grid-row: 1/2;
  place-self: center;
`;

const StyledSearch = styled.div`
  grid-column: 3/5;
  grid-row: 2/3;
`;
const StyledRecommende = styled.div`
  grid-column: 2/4;
  grid-row: 3/5;
  padding-left: 5vw;
  padding-right: 5vw;
`;
const StyledListContainer = styled.div`
  display: grid;
  grid-column: 4/6;
  grid-row: 3/5;
`;
const StyledDrinkList = styled.div`
  display: grid;
  grid-column: 2/6;
  grid-row: 6/7;
  overflow: auto;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 2fr 1fr 0.5fr;
  grid-template-rows: 0.7fr 1fr 2fr 2fr 0.5fr max-content 0.5fr;
  /* grid-auto-flow: dense; */
  align-items: center;
  justify-items: stretch;
`;

function App() {
  const drinksList = useSelector((state: RootState) => state.drinksList.drinks);
  return (
    <Container>
      <StyledTitle>칵테일 레시피</StyledTitle>
      <StyledSearch>
        <Search />
      </StyledSearch>
      <StyledRecommende>
        <RecommendedDrinks />
      </StyledRecommende>
      <StyledListContainer>
        <IngredientsListContainer />
      </StyledListContainer>
      <StyledDrinkList>
        <DrinkList drinksList={drinksList}></DrinkList>
      </StyledDrinkList>
    </Container>
  );
}

export default App;
