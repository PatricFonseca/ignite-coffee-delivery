import { useContext, useEffect, useState } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import {
	CartButton,
	HeaderBox,
	HeaderContainer,
	LocationButton,
} from "./styles";
import ImgLogo from "../../assets/img/Logo.svg";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
	const { cartItens, quantityDifferentItens } = useContext(CartContext);

	return (
		<>
			<HeaderContainer>
				<HeaderBox>
					{/* <HeaderContent> */}
					<img src={ImgLogo} alt="" />
					<div style={{ display: "flex" }}>
						<LocationButton>
							<MapPin weight="fill" size={20} />
							<span>Porto Alegre, RS</span>
						</LocationButton>

						<CartButton to={"/cart"}>
							<ShoppingCart weight="fill" size={23} />
							<span>{quantityDifferentItens}</span>
						</CartButton>
					</div>

					{/* </HeaderContent> */}
				</HeaderBox>
			</HeaderContainer>
		</>
	);
}
