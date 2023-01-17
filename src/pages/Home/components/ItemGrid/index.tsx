import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import TypeExpresso from "../../../../assets/img/TypeExpresso.svg";
import { InputNumberWithButton } from "../../../../components/InputNumberWithButton";
import { CartContext } from "../../../../contexts/CartContext";
import {
	Card,
	ContainerOptions,
	Description,
	Image,
	Label,
	Name,
	Price,
	ShoppingButton,
} from "./styles";

export function ItemGrid() {
	const { addCartItem } = useContext(CartContext);

	const [quantity, setQuantity] = useState(1);

	return (
		<Card>
			<div>
				<Image src={TypeExpresso} alt="" />
			</div>
			<Label>Tradicional</Label>

			<Name>Expresso Tradicional</Name>
			<Description>
				O tradicional café feito com água quente e grãos moidos
			</Description>

			<ContainerOptions>
				<Price>
					R$ <strong>9,90</strong>
				</Price>
				<InputNumberWithButton number={quantity} setNumber={setQuantity} />
				<ShoppingButton
					onClick={() => {
						addCartItem({ id: "1", name: "coffee", quantity: quantity });
						// updateCartItems(cartItens);
					}}
				>
					<ShoppingCart weight="fill" color="white" size={18} />
				</ShoppingButton>
			</ContainerOptions>
		</Card>
	);
}
