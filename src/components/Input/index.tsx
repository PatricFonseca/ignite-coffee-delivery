import { ReactNode } from "react";
import { InputStyle } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	type?: string;
	size?: number;
}

export function Input({
	placeholder,
	size,
	type = "text",
	...rest
}: InputProps) {
	return (
		<InputStyle type={type} placeholder={placeholder} width={size} {...rest} />
	);
}
