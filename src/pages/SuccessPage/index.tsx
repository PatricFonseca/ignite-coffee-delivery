import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { Header } from "../../components/Header";
import {
	Container,
	IconRounded,
	InfoCard,
	InfoCardBorder,
	SuccessSubtitle,
	SuccessTitle,
} from "./styles";

//TODO: Pegar cores do tema e passar pros components..

export function SuccessPage() {
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
							<IconRounded color="purple">
								<MapPin weight="fill" color="#fff" />
							</IconRounded>
							<p>
								Entrega em <strong>Rua blables</strong>
								<br />
								Farrapos - Porto Alegre, RS
							</p>
							<Timer weight="fill" color="#fff" />
							<p>
								Previsão de entrega
								<br />
								<strong>20 min - 30 min</strong>
							</p>

							<CurrencyDollarSimple />
							<p>
								Pagamento na entrega
								<br />
								<strong>Cartão de crédito</strong>
							</p>
						</InfoCard>
					</InfoCardBorder>
				</div>
			</Container>
		</>
	);
}
