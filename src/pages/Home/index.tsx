import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
	Container,
	SubTitle,
	Table,
	IconRounded,
	Title,
	GridCoffees,
	ContainerGrid,
	TitleGrid,
	Background,
} from "./styles";
import { ItemGrid } from "./components/ItemGrid";
import { Header } from "../../components/Header";
import { Coffees } from "../../data/CoffeeList";
import CoffeeDelivery from "/assets/img/CoffeeDelivery.svg";

export function Home() {
	return (
		<>
			<Header />
			<Container>
				<Background />
				<div>
					<Title>Encontre o café perfeito para qualquer hora do dia</Title>
					<SubTitle>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</SubTitle>

					<Table>
						<div>
							<p style={{ display: "flex", alignItems: "center" }}>
								<IconRounded iconBackgroundColor="darkYellow">
									<ShoppingCart weight="fill" />
								</IconRounded>
								Compra simples e segura
							</p>
							<p style={{ display: "flex", alignItems: "center" }}>
								<IconRounded iconBackgroundColor="yellow">
									<Timer weight="fill" />
								</IconRounded>
								Entrega rápida e rastreada
							</p>
						</div>
						<div>
							<p style={{ display: "flex", alignItems: "center" }}>
								<IconRounded iconBackgroundColor="gray">
									<Package weight="fill" />
								</IconRounded>
								<span>Embalagem mantém o café intacto</span>
							</p>
							<p style={{ display: "flex", alignItems: "center" }}>
								<IconRounded iconBackgroundColor="purple">
									<Coffee weight="fill" />
								</IconRounded>
								O café chega fresquinho até você
							</p>
						</div>
					</Table>
				</div>

				<img src={CoffeeDelivery} alt="" width={400} height={360} />

				{/* <GridCoffees> */}

				{/* <ItemGrid>

          </ItemGrid> */}
				{/* </GridCoffees> */}
			</Container>

			<TitleGrid>Nossos cafés</TitleGrid>
			<ContainerGrid>
				<GridCoffees>
					{Coffees.map((coffee, key) => {
						return (
							<ItemGrid
								key={key}
								id={coffee.id}
								name={coffee.name}
								price={coffee.price}
								imgSrc={coffee.imgSrc}
								types={coffee.types}
								description={coffee.description}
							/>
						);
					})}
				</GridCoffees>
			</ContainerGrid>
		</>
	);
}
