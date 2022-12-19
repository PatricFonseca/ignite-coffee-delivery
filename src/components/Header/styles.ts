import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme["white"]};
  padding: 1.5rem;
  z-index: 2;
`;

export const HeaderBox = styled.header`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin-right: 0.4rem;
  background-color: ${(props) => props.theme["purple-light"]};

  span {
    color: ${(props) => props.theme["purple-dark"]};
  }

  color: ${(props) => props.theme["purple"]};

  border-radius: 0.2rem;
`;

export const CartButton = styled.button`
  position: relative;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  /* padding: 0.5rem; */
  padding: 0 0.6rem;
  border-radius: 0.2rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -8px;
    right: -8.35px;
    /* border: 1px solid; */
    border-radius: 50%;
    background-color: ${(props) => props.theme["yellow-dark"]};
    width: 1.25rem;
    height: 1.25rem;
    color: ${(props) => props.theme["white"]};
  }
`;
