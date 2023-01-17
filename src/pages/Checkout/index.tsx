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
} from "./styles";
import { InputNumberWithButton } from "../../components/InputNumberWithButton";
import TypeExpresso from "../../assets/img/TypeExpresso.svg";

interface ColorsTheme {
	purple: string;
}

export function Checkout() {
	const theme = useTheme() as ColorsTheme;
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
								<Input type="text" placeholder="CEP" size={11} />
							</Row>
							<Row>
								<Input type="text" placeholder="Rua" />
							</Row>
							<Row>
								<Input type="text" placeholder="Número" size={15} />
								<ComplementInput
									type="text"
									placeholder="Complemento                                             opcional"
								/>
							</Row>
							<Row>
								<Input type="text" placeholder="Bairro" size={20} />
								<Input type="text" placeholder="Cidade" />
								<Input type="text" placeholder="UF" size={3.75} />
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
								<Button>
									<CreditCard size={16} color={theme.purple} />
									Cartão de crédito
								</Button>
								<Button>
									<Bank size={16} color={theme.purple} />
									Cartão de débito
								</Button>
								<Button>
									<Money size={16} color={theme.purple} />
									Dinheiro
								</Button>
							</PaymentButtons>
						</CardBox>
					</Main>
					<div>
						<Title>Cafés selecionados</Title>
						<CardBox>
							<ItemsList>
								<li>
									<Image src={TypeExpresso} />
									<div>
										Expresso tradicional
										<ActionsItem>
											<InputNumberWithButton number={1} setNumber={() => {}} />
											<Button size="small">
												<Trash color={theme.purple} /> Remover
											</Button>
										</ActionsItem>
									</div>
								</li>
								<li>Latte</li>
							</ItemsList>
							<hr />
							<p>Total de itens: </p> <span>R$20,00</span>
							<p>Entrega: </p>
							<span>R$20,00</span>
							<h4>Total: </h4>
							<span>R$20,00</span>
							<button type="submit">Confirmar pedido</button>
						</CardBox>
					</div>
				</ContainerScreen>
			</Container>
		</>
	);
}
