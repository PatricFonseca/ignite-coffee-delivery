import styled from "styled-components";

export const InputStyle = styled.input`
  background-color: ${(props) => props.theme["input"]};
  height: 2.62rem;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  ::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
  width: ${(props) =>
    props.width && props.width > 0 ? `${props.width}rem` : `100% `};

  font-size: 0.87rem;
  line-height: 1.14rem;
`;
