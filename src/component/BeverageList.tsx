import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { getIngredientsAsync } from "../redux/modules/ingredients";

interface Props {
  includedDrinks: {
    base: Array<{
      id: number;
      includedDrinks: Array<number>;
    }>;
    beverage: Array<{
      id: number;
      includedDrinks: Array<number>;
    }>;
  };
  setIncludedDrinks: Dispatch<SetStateAction<any>>;
}

const BeverageList = ({ includedDrinks, setIncludedDrinks }: Props) => {
  //redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsAsync.request(null));
  }, [dispatch]);
  //////

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      const dID = parseInt(target.id);
      const drinks = data?.beverage[dID].includedDrinks;
      if (target.checked) {
        setIncludedDrinks({
          ...includedDrinks,
          beverage: [
            ...includedDrinks.beverage,
            { id: dID, includedDrinks: drinks },
          ],
        });
      } else {
        setIncludedDrinks({
          ...includedDrinks,
          beverage: includedDrinks.beverage.filter(
            (beverage) => beverage.id !== dID
          ),
        });
      }
    },
    [data?.beverage, includedDrinks, setIncludedDrinks]
  );

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>NO DATA</div>;

  return (
    <div>
      <ul>
        {data.beverage.map((ingredients) => (
          <li key={ingredients.id}>
            <input
              type="checkbox"
              onClick={onClick}
              id={ingredients.id.toString()}
            />
            {ingredients.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeverageList;
