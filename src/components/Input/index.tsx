import { InputStyle } from "./styles";

interface InputProps {
  placeholder: string;
  type?: string;
  size?: number;
}

export function Input({ placeholder, size, type = "text" }: InputProps) {
  return <InputStyle type={type} placeholder={placeholder} width={size} />;
}
