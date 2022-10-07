import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { Fruit } from "../types/Fruit";
import styled from "styled-components";

export const ItemContainer = () => {
  const fruitsList = [
    {
      id: 1,
      content: "Apple",
    },
    {
      id: 2,
      content: "Grape",
    },
    {
      id: 3,
      content: "Strawberry",
    },
  ];

  const [items, setItems] = useState<Fruit[]>(fruitsList);

  const deleteItem = (id: number) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };

  const createItem = (item: Fruit) => {
    setItems([...items, item]);
  };

  return (
    <SContainer>
      <SWrapper>
        <Form createItem={createItem} />
        <List items={items} deleteItem={deleteItem} />
      </SWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: auto;
`;

const SWrapper = styled.div``;
