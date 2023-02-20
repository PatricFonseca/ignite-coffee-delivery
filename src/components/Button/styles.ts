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

export const ButtonStyled = styled.button<{
	size: keyof ISizes;
	active: boolean;
}>`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme["base-button"]};
	border-radius: 6px;
	gap: 7px;
	text-transform: uppercase;

	/* ${({ size }) => sizes[size]} */
	${(props) => sizes[props.size]}

	flex: none;
	order: 0;
	flex-grow: 1;

	/* background-color: ${({ props, active }: any) =>
		active ? props?.theme["purple-light"] : props?.theme["base-button"]}; */

	background-color: ${(props) =>
		props.active ? props?.theme["purple-light"] : props?.theme["base-button"]};

	&:hover {
		background-color: ${(props) => props.theme["base-hover"]};
	}
`;

ButtonStyled.defaultProps = {
	size: "medium",
};
