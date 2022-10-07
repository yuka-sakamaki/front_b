import React from "react";
import styled from "styled-components";
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
    <SContainer key={item.id}>
      <SForm onSubmit={confirmContent}>
        <SButton onClick={() => complete(item.id)}>X</SButton>
        <SBorder>
          <SText>{item.content}</SText>
        </SBorder>
      </SForm>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: left;
`;

const SForm = styled.form`
  display: flex;
  padding-bottom: 5px;
`;

const SBorder = styled.div`
  border: 1px solid navy;
  width: 250px;
  height: 50px;
  margin-bottom: 5px;
`;

const SText = styled.p`
  margin-left: 20px;
  font-size: 16px;
`;

const SButton = styled.button`
  background-color: navy;
  color: white;
  width: 50px;
  height: 50px;
`;
