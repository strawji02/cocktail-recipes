import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules";
import { getIngredientsAsync } from "../redux/modules/ingredients";
import Ingredient from "./Ingredient";
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

function IngredientsList({ includedDrinks, setIncludedDrinks }: Props) {
  //redux
  const { data, loading, error } = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsAsync.request(null));
  }, [dispatch]);
  //////

  const onClickUtil = (e: React.MouseEvent<HTMLInputElement>, type: any) => {
    const target = e.target as HTMLInputElement;
    const dID = parseInt(target.id);
    const drinks =
      type === "base"
        ? data?.base[dID].includedDrinks
        : data?.beverage[dID].includedDrinks;
    if (target.checked) {
      setIncludedDrinks({
        ...includedDrinks,
        base: [...includedDrinks.base, { id: dID, includedDrinks: drinks }],
      });
    } else {
      setIncludedDrinks({
        ...includedDrinks,
        base: includedDrinks.base.filter((base) => base.id !== dID),
      });
    }
  };
  const onClickBase = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      onClickUtil(e, "base");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data?.base, includedDrinks]
  );
  const onClickBeverage = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      onClickUtil(e, "beverage");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data?.beverage, includedDrinks]
  );

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>NO DATA</div>;

  return (
    <div>
      <Ingredient data={data.base} onClick={onClickBase}></Ingredient>
      <Ingredient data={data.beverage} onClick={onClickBeverage}></Ingredient>
    </div>
  );
}

export default IngredientsList;
