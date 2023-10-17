import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiSittingDog } from "react-icons/gi";
import { BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Header() {
  const [toggleModal, setToggleModal] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleToggle = (e) => {
    setToggleModal((prev) => !prev);
    setIsSignIn(false);
  };

  const handleLogout = (e) => {
    setIsLogin(false);
    localStorage.clear();
    window.location.reload();
    console.log("로그아웃");
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      console.log("비 로그인중");
    } else {
      setIsLogin(true);
      console.log("로그인 중");
    }
  }, []);

  return (
    <>
      <Headers>
        <CustomLink to={"/"} onClick={() => setToggleModal(false)}>
          <IconStyled />
          <h2>같이 산책할 땐 멍개팅</h2>
        </CustomLink>
        <CustomUl>
          <li>글쓰기</li>
          <li>마이페이지</li>
          {isLogin ? (
            <li onClick={handleLogout}>로그아웃</li>
          ) : (
            <li onClick={handleToggle}>로그인</li>
          )}
          <li>
            <DarkModeBtn />
          </li>
        </CustomUl>
      </Headers>
      <LoginModal
        toggleModal={toggleModal}
        handleToggle={handleToggle}
        isSignIn={isSignIn}
        setIsSignIn={setIsSignIn}
      />
    </>
  );
}

const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 70px;
  background-color: ${({ theme }) => theme.logo};
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const IconStyled = styled(GiSittingDog)`
  font-size: 22px;
  margin-right: 10px;
`;

const CustomUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

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
