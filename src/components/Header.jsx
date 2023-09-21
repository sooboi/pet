import React from "react";
import styled from "styled-components";
import { PiDogFill } from "react-icons/pi";
import { BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Headers>
      <CustomLink to={"/"}>
        <IconStyled />
        <h2>멍개팅</h2>
      </CustomLink>
      <div>
        <CustomUl>
          <li>글쓰기</li>
          <li>마이페이지</li>
          <li>로그인 / 회원가입</li>
          <li>
            <DarkModeBtn />
          </li>
        </CustomUl>
      </div>
    </Headers>
  );
}

const Headers = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;

  background-color: ${({ theme }) => theme.logo};
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  font-family: "omyu_pretty";
  font-size: 2rem;
  margin-top: -20px;
`;

const IconStyled = styled(PiDogFill)`
  font-size: 3rem;
  margin-right: 5px;
`;

const CustomUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-top: -30px;
  font-family: "Dovemayo_gothic";

  & > li {
    padding: 0 20px;
    border-right: 2px solid black;
    cursor: pointer;
    &:last-child {
      border: none;
    }
    transition: all 0.3s;
    &:hover {
      color: white;
    }
  }
`;

const DarkModeBtn = styled(BsSunFill)`
  transition: all 0.3s;
  &:hover {
    transform: rotate(360deg);
  }
`;
