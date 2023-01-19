import { css } from "styled-components";
import styled from "styled-components";

interface ISizes {
	small: typeof css;
	medium: typeof css;
	// large: typeof css;
}

const spanSizes = {
	small: css`
		padding: 0.29rem 0.2rem;
	`,
	medium: css`
		padding: 0.56rem;
	`,
};

export const InputNumber = styled.span<{ size: keyof ISizes }>`
	display: flex;
	justify-content: center;
	background-color: #e6e5e5;

	${({ size }) => spanSizes[size]}/* padding: 0.56rem;
	font-size: 1.1rem; */
	/* width: 1.5rem; */
`;

const buttonsSizes = {
	small: css`
		padding: 0.36rem 0.3rem;
	`,

	medium: css`
		padding: 0.6rem 0.5rem;
	`,
};

export const ButtonSpinEdit = styled.button<{ size: keyof ISizes }>`
	background-color: #e6e5e5;

	/* padding: 0.6rem 0.5rem; */
	${({ size }) => buttonsSizes[size]}

	span {
		/* font-size: 1rem; */
		color: ${(props) => props.theme["purple"]};
	}
`;

ButtonSpinEdit.defaultProps = {
	size: "medium",
};

export const ButtonSpinEditLeft = styled(ButtonSpinEdit)`
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
`;

export const ButtonSpinEditRight = styled(ButtonSpinEdit)`
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
`;
