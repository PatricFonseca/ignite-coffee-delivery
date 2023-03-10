import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
	Trash,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Row } from "../../components/Row";
import {
	CardBox,
	Container,
	ContainerScreen,
	Main,
	MapIcon,
	Title,
	Col,
	ComplementInput,
	HeaderTitle,
	HeaderContainer,
	HeaderSubtitle,
	PaymentButtons,
	HeaderBox,
	Image,
	ItemsList,
	ActionsItem,
	Box,
	RightCardBox,
	ItemPrice,
	Item,
	TotalCard,
	TotalPrice,
	TotalCardRow,
	ConfirmButton,
	LabelOptional,
	ComplementContainer,
} from "./styles";
import { InputNumberWithButton } from "../../components/InputNumberWithButton";
// import TypeExpresso from "../../assets/img/TypeExpresso.svg";
// import TypeLatte from "../../assets/img/TypeLatte.svg";
import { CartContext } from "../../contexts/CartContext";
import { formatter } from "../../utils/lib";

interface ColorsTheme {
	purple: string;
}

type PaymentsType =
	| "Sem pagamento"
	| "Cartão de crédito"
	| "Cartão de débito"
	| "Dinheiro";

// interface Address {
// 	street: string;
// 	number: string;
// 	city: string;
// 	state: string;
// 	zip: string;
// 	neighbourhood: string;
// }

export function Checkout() {
	const theme = useTheme() as ColorsTheme;
	const { cartItens, totalItems, total, removeItem, updateItem, checkout } =
		useContext(CartContext);
	const [isVisibleComplementPlaceHolder, setIsVisibleComplementPlaceHolder] =
		useState(true);

	const [activePayment, setActivePayment] =
		useState<PaymentsType>("Sem pagamento");

	const [zip, setZip] = useState("");
	const [street, setStreet] = useState("");
	const [neighborhood, setNeighborhood] = useState("");
	const [number, setNumber] = useState("");
	const [complement, setComplement] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");

	return (
		<>
			<Header />
			<Container>
				<ContainerScreen>
					<Main>
						<Title>Complete seu pedido</Title>
						<CardBox>
							<HeaderBox>
								<HeaderContainer>
									<MapIcon>
										<MapPinLine size={22} />
									</MapIcon>
									<Col gutter={1}>
										<HeaderTitle>Endereço de entrega</HeaderTitle>
									</Col>
								</HeaderContainer>
								<Row>
									<Col gutter={4}>
										<HeaderSubtitle>
											Informe o endereco onde deseja receber seu pedido
										</HeaderSubtitle>
									</Col>
								</Row>
							</HeaderBox>
							<Row>
								<Input
									type="text"
									placeholder="CEP"
									size={11}
									value={zip}
									onChange={(e) => {
										setZip(e.target.value);
									}}
								/>
							</Row>
							<Row>
								<Input
									type="text"
									placeholder="Rua"
									value={street}
									onChange={(e) => {
										setStreet(e.target.value);
									}}
								/>
							</Row>
							<Row>
								<Input
									type="text"
									placeholder="Número"
									size={15}
									value={number}
									onChange={(e) => {
										setNumber(e.target.value);
									}}
								/>
								<ComplementContainer>
									<ComplementInput
										type="text"
										placeholder="Complemento"
										onFocus={() => setIsVisibleComplementPlaceHolder(false)}
										onBlur={(e) => {
											setIsVisibleComplementPlaceHolder(e.target.value === "");
										}}
										value={complement}
										onChange={(e) => {
											setComplement(e.target.value);
										}}
									/>

									<LabelOptional
										visible={
											isVisibleComplementPlaceHolder ? "visible" : "hidden"
										}
										// onClick={() => setIsVisibleComplementPlaceHolder(false)}
									>
										opcional
									</LabelOptional>
								</ComplementContainer>
								{/* </div> */}
							</Row>
							<Row>
								<Input
									type="text"
									placeholder="Bairro"
									size={20}
									value={neighborhood}
									onChange={(e) => {
										setNeighborhood(e.target.value);
									}}
								/>
								<Input
									type="text"
									placeholder="Cidade"
									value={city}
									onChange={(e) => {
										setCity(e.target.value);
									}}
								/>
								<Input
									type="text"
									placeholder="UF"
									size={3.75}
									value={state}
									onChange={(e) => {
										setState(e.target.value);
									}}
								/>
							</Row>
						</CardBox>

						<CardBox>
							<HeaderBox>
								<HeaderContainer>
									<CurrencyDollar color={theme["purple"]} size={22} />
									<Col gutter={1}>
										<HeaderTitle>Pagamento</HeaderTitle>
									</Col>
								</HeaderContainer>
								<Row>
									<Col gutter={3.6}>
										<HeaderSubtitle>
											O pagamento é feito na entrega. Escolha a forma que deseja
											pagar
										</HeaderSubtitle>
									</Col>
								</Row>
							</HeaderBox>
							<PaymentButtons>
								<Button
									onClick={() => {
										setActivePayment("Cartão de crédito");
									}}
									active={activePayment === "Cartão de crédito"}
								>
									<CreditCard size={16} color={theme.purple} />
									Cartão de crédito
								</Button>
								<Button
									onClick={() => {
										setActivePayment("Cartão de débito");
									}}
									active={activePayment === "Cartão de débito"}
								>
									<Bank size={16} color={theme.purple} />
									Cartão de débito
								</Button>
								<Button
									onClick={() => {
										setActivePayment("Dinheiro");
									}}
									active={activePayment === "Dinheiro"}
								>
									<Money size={16} color={theme.purple} />
									Dinheiro
								</Button>
							</PaymentButtons>
						</CardBox>
					</Main>
					<div>
						<Title>Cafés selecionados</Title>
						<RightCardBox>
							<ItemsList>
								{cartItens &&
									cartItens.map((item, key) => {
										return (
											<Item key={key}>
												<Image src={item.imgSrc} />
												<Box>
													<p>{item.name}</p>
													<ActionsItem>
														<InputNumberWithButton
															number={item.quantity}
															setNumber={(newQuantity) => {
																updateItem(item.id, newQuantity);
															}}
														/>
														<Button
															size="small"
															onClick={() => removeItem(item.id)}
														>
															<Trash color={theme.purple} /> Remover
														</Button>
													</ActionsItem>
												</Box>
												<ItemPrice>{formatter.format(item.price)}</ItemPrice>
											</Item>
										);
									})}
							</ItemsList>
							<TotalCard>
								<TotalCardRow>
									<p>Total de itens:</p>
									<TotalPrice>{formatter.format(totalItems)}</TotalPrice>
								</TotalCardRow>

								<TotalCardRow>
									<p>Entrega:</p>
									<TotalPrice>{formatter.format(10)}</TotalPrice>
								</TotalCardRow>
								<TotalCardRow>
									<h3>Total: </h3>
									<h3>{formatter.format(total)}</h3>
								</TotalCardRow>
							</TotalCard>
							<Link to={"/success"}>
								<ConfirmButton
									type="submit"
									onClick={() => {
										const adress = {
											street,
											number,
											city,
											state,
											zip,
											neighborhood,
										};
										checkout(adress, activePayment);
									}}
								>
									Confirmar pedido
								</ConfirmButton>
							</Link>
						</RightCardBox>
					</div>
				</ContainerScreen>
			</Container>
		</>
	);
}
