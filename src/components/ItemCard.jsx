import React from "react";
import styled from "styled-components";
import { useNightContext } from "../context/NightContext";

export default function ItemCard({
  data,
  data: { id, title, userName, date, time, likes, address, img, map, content },
}) {
  const newDate = date.toString();
  const { nightMod } = useNightContext();

  return (
    <Card nightMod={nightMod}>
      <h3>{title}</h3>
      <Box>
        <p>{userName}</p>
        <p>{newDate}</p>
        <p>좋아요 : {likes}</p>
      </Box>
      <Box>
        <p>{address}</p>
        <p>{time}</p>
      </Box>
      <Img src={img} alt="사진" />
      <p>{map}</p>
      <Content>{content}</Content>
    </Card>
  );
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: ${(props) => (props.nightMod ? "none" : "1px solid #e2e2e2;")};
  border-radius: 22px;
  text-align: center;
  list-style: none;
  margin-bottom: 20px;
  box-shadow: 1px 13px 16px -4px rgba(0, 0, 0, 0.4);
  background-color: white;
  overflow: hidden;

  & > h3 {
    padding: 10px;
    border-bottom: 1px solid black;
    background-color: #f5da81;
  }
`;

const Box = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

const Img = styled.img`
  width: 100%;
  height: 390px;
  max-height: 500px;
  object-fit: cover;
`;

const Content = styled.div`
  border-top: 1px solid black;
  padding: 10px;
`;
