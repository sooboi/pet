import React from "react";
import dummyData from "../data/dummy";
import ItemCard from "./ItemCard";
import styled from "styled-components";
import { useNightContext } from "../context/NightContext";

export default function List() {
  const data = dummyData;
  const { toggleNight, nightMod } = useNightContext();

  return (
    <Container nightMod={nightMod}>
      <ItemCardList>
        {data.map((it, index) => (
          <ItemCard key={it.id} data={it} />
        ))}
      </ItemCardList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  background-color: ${(props) =>
    props.nightMod ? "rgba(0,0,0,0.9)" : "white"};
  transition: all 0.5s;
`;

const ItemCardList = styled.ul`
  display: grid;
  gap: 30px;
  list-style: none;

  @media (max-width: 975px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 975px) and (max-width: 1440px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
