import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
// import TypeExpresso from "../../../../assets/img/TypeExpresso.svg";
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
	Types,
} from "./styles";

interface ItemProps {
	id: string;
	name: string;
	price: number;
	imgSrc: string;
	types: string[];
	description: string;
}

export function ItemGrid({
	id,
	name,
	price,
	imgSrc,
	types,
	description,
}: ItemProps) {
	const { addCartItem } = useContext(CartContext);

	const [quantity, setQuantity] = useState(1);

	return (
		<Card>
			<Image src={imgSrc} alt="" />
			<Types>
				{types?.map((type) => {
					return <Label>{type}</Label>;
				})}
			</Types>
			<Name>{name}</Name>
			<Description>{description}</Description>
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
							types: types,
							description: description,
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
