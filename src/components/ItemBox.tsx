import React from "react";
import { Fruit } from "../types/Fruit";

type ItemProps = {
  item: Fruit;
  complete: Function;
};

export const ItemBox: React.FC<ItemProps> = ({ item, complete }) => {
  const confirmContent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div key={item.id}>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {item.content}
      </form>
      <button onClick={() => complete(item.id)}>-</button>
    </div>
  );
};
