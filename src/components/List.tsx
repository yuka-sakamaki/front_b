import { Fruit } from "../types/Fruit";
import { ItemBox } from "./ItemBox";

type Listprops = {
  items: Fruit[];
  deleteItem: Function;
};

export const List: React.FC<Listprops> = ({ items, deleteItem }) => {
  const complete = (id: number) => {
    deleteItem(id);
  };
  return (
    <div>
      {items.map((item) => {
        return <ItemBox key={item.id} item={item} complete={complete} />;
      })}
    </div>
  );
};
