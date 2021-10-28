import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { getIngredientsAsync } from "../redux/modules/ingredients";
const TasteList = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsAsync.request(null));
  }, [dispatch]);

  return (
    <div>
      <ul>
        <li>파인애플</li>
        <li>사과</li>
        <li>커피</li>
      </ul>
    </div>
  );
};

export default TasteList;
