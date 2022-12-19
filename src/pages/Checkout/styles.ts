import styled from "styled-components";
import { InputStyle } from "../../components/Input/styles";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80vw;
  justify-content: space-between;
  padding: 5rem 0;
`;

export const ContainerScreen = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex: 1;
  width: 50vw;
`;

export const CardBox = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme["card"]};
  border-radius: 6px;
  margin-top: 1rem;
  margin-right: 1rem;
`;

export const CustomInput = styled(InputStyle)`
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.12rem;
  line-height: 23.4px;
`;

export const Subtitle = styled.h4`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

export const MapIcon = styled.span`
  color: ${(props) => props.theme["yellow-dark"]};
`;

interface IColProps {
  size: number;
}

export const Col = styled("div")<IColProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, 1fr);
  /* grid-template-columns: repeat(6, 1fr); */
  /* grid-template-rows: 100px; */
`;
