import { ReactNode } from "react";
import { Container } from "./styles";

interface RowProps {
	children: ReactNode;
	size?: number;
}
export function Row({ children, size = 1 }: RowProps) {
	return <Container size={size}>{children}</Container>;
}
