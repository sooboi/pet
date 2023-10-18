import React, { useEffect, useState } from "react";
import LoginModal from "../LoginModal";
import { useNightContext } from "../../context/NightContext";
import Weather from "../Weather/Weather";
import {
  Headers,
  CustomLink,
  IconStyled,
  CustomUl,
  DarkModeBtn,
} from "./HeaderStyles";

export default function Header() {
  const [toggleModal, setToggleModal] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const { toggleNight, nightMod } = useNightContext();

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
          <h1>같이 산책할 땐 멍개팅</h1>
        </CustomLink>
        <CustomUl nightMod={nightMod}>
          <li>글쓰기</li>
          <li>마이페이지</li>
          {isLogin ? (
            <li onClick={handleLogout}>로그아웃</li>
          ) : (
            <li onClick={handleToggle}>로그인</li>
          )}
          <li onClick={toggleNight}>
            <DarkModeBtn />
          </li>
        </CustomUl>
      </Headers>
      <Weather />
      <LoginModal
        toggleModal={toggleModal}
        handleToggle={handleToggle}
        isSignIn={isSignIn}
        setIsSignIn={setIsSignIn}
      />
    </>
  );
}
