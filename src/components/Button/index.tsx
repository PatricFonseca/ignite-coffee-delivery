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
}

export function Button({ children, size = "medium" }: ButtonProps) {
	return <ButtonStyled size={size}>{children}</ButtonStyled>;
}
