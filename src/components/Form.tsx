import React, { useState } from "react";
import styled from "styled-components";

type FormProps = {
  createItem: Function;
};

export const Form: React.FC<FormProps> = ({ createItem }) => {
  const [enteredItem, setEnteredItem] = useState("");

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredItem,
    };
    createItem(newItem);
    setEnteredItem("");
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <SInput
          type="text"
          value={enteredItem}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEnteredItem(e.target.value)
          }
        />
        <SButton>追加</SButton>
      </form>
    </div>
  );
};

const SInput = styled.input`
  height: 30px;
  width: 230px;
  margin-bottom: 30px;
  margin-right: 5px;
`;

const SButton = styled.button`
  background-color: navy;
  color: white;
  width: 50px;
  height: 30px;
`;
