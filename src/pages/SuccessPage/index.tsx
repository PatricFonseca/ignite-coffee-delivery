import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";
import { Row } from "../../components/Row";
import { CartContext } from "../../contexts/CartContext";
import {
	Container,
	IconRounded,
	InfoCard,
	InfoCardBorder,
	SuccessSubtitle,
	SuccessTitle,
	HeaderContainer,
	Col,
} from "./styles";
// import SuccessImg from "../../../public/assets/img/Success.png";
import SuccessImg from "/assets/img/Success.svg";

enum PaymentsType {
	UNDEFINED = "Sem pagamento",
	CREDIT_CARD = "Cartão de crédito",
	DEBIT_CARD = "Cartäo de débito",
	CASH = "Dinheiro",
}

interface ColorsTheme {
	purple: string;
	yellow: string;
	"yellow-dark": string;
}

export function SuccessPage() {
	const theme = useTheme() as ColorsTheme;
	const { address, paymentType } = useContext(CartContext);
	return (
		<>
			<Header />
			<Container>
				<div>
					<SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
					<SuccessSubtitle>
						Agora é só aguardar que logo o café chegará até você
					</SuccessSubtitle>

					<InfoCardBorder>
						<InfoCard>
							<HeaderContainer>
								<IconRounded color={theme.purple}>
									<MapPin weight="fill" color="#fff" />
								</IconRounded>
								<Col gutter={1}>
									Entrega em{" "}
									<strong>{`${address?.street}, ${address?.number}`}</strong>
								</Col>
							</HeaderContainer>
							<Row size={2}>
								<Col gutter={4}>
									<p>
										{`${address?.neighborhood} - ${address?.city}, ${address?.state}`}
									</p>
								</Col>
							</Row>

							<HeaderContainer>
								<IconRounded color={theme.yellow}>
									<Timer weight="fill" color="#fff" />
								</IconRounded>
								<Col gutter={1}>Previsão de entrega</Col>
							</HeaderContainer>
							<Row size={2}>
								<Col gutter={4}>
									<p>
										<strong>20 min - 30 min</strong>
									</p>
								</Col>
							</Row>

							<HeaderContainer>
								<IconRounded color={theme["yellow-dark"]}>
									<CurrencyDollarSimple weight="fill" color="#fff" />
								</IconRounded>
								<Col gutter={1}>Pagamento na entrega</Col>
							</HeaderContainer>
							<Row size={1}>
								<Col gutter={4}>
									<p>
										<strong>{paymentType}</strong>
									</p>
								</Col>
							</Row>
						</InfoCard>
					</InfoCardBorder>
				</div>
				<img
					src={SuccessImg}
					alt="homem em uma moto, indo entregar a encomenda"
				/>
			</Container>
		</>
	);
}
