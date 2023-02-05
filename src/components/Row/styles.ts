import styled from "styled-components";

interface ContainerProps {
	size?: number;
}
export const Container = styled("div")<ContainerProps>`
	/* display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(1fr, 2);
  grid-gap: 0.75rem; */

	display: flex;
	justify-content: flex-start;
	width: 100%;
	margin-bottom: ${(props) => props.size}rem;
	gap: 0.75rem;
`;
