import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.nightMod ? "white" : "black")};
  background-color: ${(props) => (props.nightMod ? "black" : "#e2e2e2")};
  padding: 5px;
  font-family: "Dovemayo_gothic";
  transition: all 0.5s;
  @media (max-width: 780px) {
    flex-wrap: wrap;
    font-size: 15px;
  }
`;

export const Item1 = styled.div`
  display: flex;
  align-items: center;
`;

export const Item2 = styled.ul`
  display: flex;
  list-style: none;
  & > li {
    margin-right: 1rem;
  }
`;

export const IconImg = styled.img`
  width: 30px;
  height: 30px;
`;
