import React from "react";

interface Data {
  id: number;
  name: string;
  includedDrinks: number[];
}

interface Props {
  filterdData: Data[];
}
function SearchList({ filterdData }: Props) {
  return (
    <div>
      <ul>
        {filterdData.map((data, index) => (
          <li key={index}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
