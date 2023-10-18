import styled from "styled-components";
import { GiSittingDog } from "react-icons/gi";
import { BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  background-color: ${({ theme }) => theme.logo};
  font-family: "BMJUA";

  @media (max-width: 735px) {
    flex-wrap: wrap;
    height: 100px;
    padding: 10px;
  }
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  & > h1 {
    font-weight: 500;
  }
`;

export const IconStyled = styled(GiSittingDog)`
  font-size: 22px;
  margin-right: 10px;
`;

export const CustomUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 18px;

  & > li {
    display: flex;
    align-items: center;
    padding: 7px 14px;
    margin-right: 12px;
    border-radius: 14px;
    transition: all 0.3s;
    background-color: ${(props) =>
      props.nightMod ? "rgba(0,0,0,0.8)" : "white"};
    color: ${(props) => (props.nightMod ? "white" : "rgba(0,0,0,0.8)")};
    cursor: pointer;

    @media (max-width: 735px) {
      font-size: 15px;
      padding: 7px 10px;
    }

    &:last-child {
      margin: 0;
    }
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const DarkModeBtn = styled(BsSunFill)`
  transition: all 0.3s;
  &:hover {
    transform: rotate(360deg);
  }
`;
