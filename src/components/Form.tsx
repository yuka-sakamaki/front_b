import React, { useState } from "react";

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
        <input
          type="text"
          value={enteredItem}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEnteredItem(e.target.value)
          }
        />
        <button>+</button>
      </form>
    </div>
  );
};
