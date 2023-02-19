import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";
import { Row } from "../../components/Row";
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
import SuccessImg from "../../../public/assets/img/Success.svg";

//TODO: Pegar cores do tema e passar pros components..

interface ColorsTheme {
	purple: string;
	yellow: string;
	"yellow-dark": string;
}

export function SuccessPage() {
	const theme = useTheme() as ColorsTheme;
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
									Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
								</Col>
							</HeaderContainer>
							<Row size={2}>
								<Col gutter={4}>
									<p>Farrapos - Porto Alegre, RS</p>
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
										<strong>Cartão de crédito</strong>
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
