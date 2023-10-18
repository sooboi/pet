import React from "react";
import styled from "styled-components";

export default function Select({ selectedCity, handleCityChange }) {
  return (
    <SelectBox value={selectedCity} onChange={handleCityChange}>
      <option value={"Seoul"}>서울</option>
      <option value={"Incheon"}>인천</option>
      <option value={"Seongnam"}>성남</option>
      <option value={"Anyang"}>안양</option>
      <option value={"Goyang"}>고양</option>
      <option value={"Suwon"}>수원</option>
      <option value={"Busan"}>부산</option>
      <option value={"Daegu"}>대구</option>
      <option value={"Gwangju"}>광주</option>
      <option value={"Daejeon"}>대전</option>
      <option value={"Ulsan"}>울산</option>
    </SelectBox>
  );
}

const SelectBox = styled.select`
  border: none;
  font-family: "Dovemayo_gothic";
  font-size: 18px;
  background-color: inherit;
  outline: none;
  color: ${({ theme }) => theme.logo};
`;
