import React, { useRef, useState } from "react";
import styled from "styled-components";
import { signIn, signUp } from "../firebase/firebase";

export default function LoginModal({
  toggleModal,
  handleToggle,
  isSignIn,
  setIsSignIn,
}) {
  const emailInput = useRef();
  const passwordInput = useRef();
  const nameInput = useRef();

  const [info, setInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInput = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const { email, password, name } = info;
    if (email.length < 3 || !email.includes("@" && ".com")) {
      emailInput.current.focus();
    } else if (password.length <= 5) {
      passwordInput.current.focus();
    } else if (name.length < 1) {
      nameInput.current.focus();
    } else {
      signIn(email, password, name);
      setInfo({
        email: "",
        password: "",
        name: "",
      });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, password } = info;
    if (email.length < 3 || !email.includes("@" && ".com")) {
      emailInput.current.focus();
    } else if (password.length <= 5) {
      passwordInput.current.focus();
    } else {
      signUp(email, password);
      setInfo({
        name: "",
        email: "",
        password: "",
      });
      handleToggle();
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIsSignIn(false);
  };

  return (
    <Modal toggle={toggleModal}>
      <ModalForm>
        {isSignIn ? <h3>회원가입</h3> : <h3>로그인</h3>}
        <CustomInput
          ref={emailInput}
          name="email"
          type="email"
          value={info.email}
          placeholder={
            isSignIn
              ? "가입할 이메일을 입력하세요."
              : "가입한 이메일을 입력하세요."
          }
          onChange={handleInput}
        />
        <CustomInput
          ref={passwordInput}
          name="password"
          type="password"
          value={info.password}
          placeholder="비밀번호를 입력하세요. ( 6글자 이상 )"
          onChange={handleInput}
        />
        {isSignIn && (
          <CustomInput
            ref={nameInput}
            name="name"
            type="text"
            value={info.name}
            placeholder="사용할 닉네임을 입력하세요."
            onChange={handleInput}
          />
        )}

        {!isSignIn ? (
          <button onClick={handleSignUp}>로그인</button>
        ) : (
          <button onClick={handleBack}>뒤로가기</button>
        )}
        {!isSignIn && (
          <button onClick={() => setIsSignIn((prev) => !prev)}>회원가입</button>
        )}
        {isSignIn && <button onClick={handleSignIn}>가입하기</button>}
      </ModalForm>
    </Modal>
  );
}

const Modal = styled.div`
  display: ${(props) => (props.toggle ? "flex" : "none")};
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const CustomInput = styled.input`
  height: 3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  &:focus {
    border: 1px solid red;
  }
`;

const ModalForm = styled.form`
  margin-top: -150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30vw;
  min-width: 260px;
  height: auto;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;

  & > h3 {
    text-align: center;
    user-select: none;
  }

  & > button {
    height: 3rem;
    border: none;
    margin: 0 5px;
    border-radius: 14px;
    margin-top: 8px;
    font-weight: bold;
    color: white;
    background-color: ${({ theme }) => theme.logo};
    user-select: none;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      filter: brightness(120%);
    }
  }
`;
