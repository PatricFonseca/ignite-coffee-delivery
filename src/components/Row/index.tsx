import { ReactNode } from "react";
import { Container } from "./styles";

interface RowProps {
  children: ReactNode;
}
export function Row({ children }: RowProps) {
  return <Container>{children}</Container>;
}
