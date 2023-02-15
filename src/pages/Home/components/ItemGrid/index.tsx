import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import TypeExpresso from "../../../../assets/img/TypeExpresso.svg";
import { InputNumberWithButton } from "../../../../components/InputNumberWithButton";
import { CartContext } from "../../../../contexts/CartContext";
import { formatter } from "../../../../utils/lib";
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

interface ItemProps {
	id: string;
	name: string;
	price: number;
	imgSrc: string;
}

export function ItemGrid({ id, name, price, imgSrc }: ItemProps) {
	const { addCartItem } = useContext(CartContext);

	const [quantity, setQuantity] = useState(1);

	return (
		<Card>
			<div>
				<Image src={TypeExpresso} alt="" />
			</div>
			<Label>Tradicional</Label>

			<Name>{name}</Name>
			<Description>
				O tradicional café feito com água quente e grãos moidos
			</Description>

			<ContainerOptions>
				<Price>
					<strong>{formatter.format(price)}</strong>
				</Price>
				<InputNumberWithButton number={quantity} setNumber={setQuantity} />
				<ShoppingButton
					onClick={() => {
						addCartItem({
							id: id,
							name: name,
							quantity: quantity,
							imgSrc: imgSrc,
							price: price,
						});
						// updateCartItems(cartItens);
					}}
				>
					<ShoppingCart weight="fill" color="white" size={18} />
				</ShoppingButton>
			</ContainerOptions>
		</Card>
	);
}
