import { ReactNode } from "react";
import { css } from "styled-components";
import { ButtonStyled } from "./styles";

interface ISizes {
	small: typeof css;
	medium: typeof css;
	// large: typeof css;
}

interface ButtonProps {
	children: ReactNode;
	size?: keyof ISizes;
	active?: boolean;
	onClick?: () => void;
}

export function Button({
	children,
	size = "medium",
	active = false,
	...props
}: ButtonProps) {
	return (
		<ButtonStyled size={size} onClick={props.onClick} active={active}>
			{children}
		</ButtonStyled>
	);
}
