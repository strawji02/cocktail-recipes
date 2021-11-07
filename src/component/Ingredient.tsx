import React, { MouseEventHandler } from "react";
import { Base } from "../redux/modules/index.type";
interface Props {
  data: Base[];
  onClick: MouseEventHandler<HTMLInputElement>;
}

function Ingredient({ data, onClick }: Props) {
  return (
    <div>
      <ul>
        {data.map((ingredients) => (
          <li key={`ingredient.${ingredients.id}:${ingredients.name}`}>
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
}

export default Ingredient;
