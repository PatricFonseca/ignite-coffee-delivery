import { useEffect, useState } from "react";
import { Minus, Plus } from "phosphor-react";
import {
	ButtonSpinEditLeft,
	ButtonSpinEditRight,
	Container,
	InputNumber,
} from "./styles";

enum TYPE {
	increase = "increase",
	decrease = "decrease",
}

interface InputNumberWithButtonProps {
	number: number;
	setNumber: (number: number) => void;
}

export function InputNumberWithButton({
	number,
	setNumber,
}: InputNumberWithButtonProps) {
	const [quantity, setQuantity] = useState(number);

	function handleQuantity(type: TYPE) {
		switch (type) {
			case TYPE["increase"]:
				setQuantity((prev) => prev + 1);
				break;

			case TYPE["decrease"]:
				if (quantity === 1) {
					return;
				}

				setQuantity((prev) => prev - 1);
				break;

			default:
				break;
		}
	}

	useEffect(() => {
		setNumber(quantity);
	}, [quantity]);

	return (
		<>
			<Container>
				<ButtonSpinEditLeft
					size="small"
					onClick={() => handleQuantity(TYPE["decrease"])}
				>
					<span>
						<Minus weight="bold" />
					</span>
				</ButtonSpinEditLeft>
				<InputNumber size="small">{quantity}</InputNumber>
				<ButtonSpinEditRight
					size="small"
					onClick={() => handleQuantity(TYPE["increase"])}
				>
					<span>
						<Plus weight="bold" />
					</span>
				</ButtonSpinEditRight>
			</Container>
		</>
	);
}
