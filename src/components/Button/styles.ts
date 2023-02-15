import styled, { css } from "styled-components";

interface ISizes {
	small: typeof css;
	medium: typeof css;
	// large: typeof css;
}

const sizes = {
	small: css`
		padding: 0.5rem;
	`,
	medium: css`
		padding: 1rem;
	`,
};

export const ButtonStyled = styled.button<{ size: keyof ISizes }>`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme["base-button"]};
	border-radius: 6px;
	gap: 7px;
	text-transform: uppercase;

	${({ size }) => sizes[size]}

	flex: none;
	order: 0;
	flex-grow: 1;

	&:hover {
		background-color: ${(props) => props.theme["purple-light"]};
	}
`;

ButtonStyled.defaultProps = {
	size: "medium",
};
