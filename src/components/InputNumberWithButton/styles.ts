import styled from "styled-components";

export const InputNumber = styled.span`
  display: flex;
  justify-content: center;
  width: 1.5rem;
  padding: 0.56rem;
  background-color: #e6e5e5;
  font-size: 1.1rem;
  /* border: 0.07rem solid #e6e5e5; */
`;

export const ButtonSpinEdit = styled.button`
  background-color: #e6e5e5;
  padding: 0.6rem 0.5rem;

  span {
    font-size: 1rem;
    /* font-weight: 700; */
    color: ${(props) => props.theme["purple"]};
  }
`;

export const ButtonSpinEditLeft = styled(ButtonSpinEdit)`
  border-top-left-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
`;

export const ButtonSpinEditRight = styled(ButtonSpinEdit)`
  border-top-right-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
`;
