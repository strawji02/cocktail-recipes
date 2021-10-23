import React from "react";
import styled from "styled-components";
import BaseList from "./component/BaseList";
import RecommendedDrinks from "./component/RecommendedDrinks";
import Search from "./component/Search";
import TasteList from "./component/TasteList";

interface RecommendedDrinksProps {
  color: string;
}

interface BaseListProps {}

interface SearchProps {}

interface TasteListProps {}

const StyledRecommendedDrinks = styled(
  RecommendedDrinks
)<RecommendedDrinksProps>`
  color: ${(props) => props.color};
`;

const StyledBaseList = styled(BaseList)<BaseListProps>``;
const StyledSearch = styled(Search)<SearchProps>``;
const StyledTasteList = styled(TasteList)<TasteListProps>``;

function App() {
  return (
    <div>
      <h1>칵테일 레시피</h1>
      <StyledSearch></StyledSearch>
      <StyledRecommendedDrinks color="#ffffff"></StyledRecommendedDrinks>
      <StyledBaseList></StyledBaseList>
      <StyledTasteList></StyledTasteList>
    </div>
  );
}

export default App;
