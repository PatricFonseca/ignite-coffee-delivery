import styled from "styled-components";

export const Background = styled.div`
	position: absolute;
	height: 444px;
	left: 0px;
	right: 0px;
	top: 90px;
	background-image: url("/assets/img/Background.svg");

	/* Add the blur effect */
	filter: blur(8px);
	-webkit-filter: blur(8px);

	/* Full height */
	/* height: 100%; */

	/* Center and scale the image nicely */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Container = styled.div`
	display: flex;
	margin: 0 auto;
	width: 80vw;
	justify-content: space-between;
	padding: 5rem 0;
`;

// TODO: Corrigir container...

const BaseTitle = styled.h1`
	font-family: "Baloo 2", sans-serif;
	font-weight: 800;
`;

export const Title = styled(BaseTitle)`
	font-size: 3rem;
	line-height: 62.4px;
	width: 39rem;
	color: ${(props) => props.theme["base-title"]};
`;

export const SubTitle = styled.p`
	width: 39rem;
	font-size: 1.3rem;
	line-height: 26px;
	padding-top: 0.2rem;
	padding-bottom: 2rem;
	color: ${(props) => props.theme["base-subtitle"]};
`;

export const Table = styled.div`
	display: flex;
	padding-top: 1rem;

	p {
		padding-top: 1rem;
		padding-right: 2rem;
	}
`;

const ICON_ROUNDED_COLORS = {
	yellow: "yellow",
	darkYellow: "yellow-dark",
	gray: "base-title",
	purple: "purple",
} as const;

interface IconProps {
	iconBackgroundColor: keyof typeof ICON_ROUNDED_COLORS;
}

export const IconRounded = styled.span<IconProps>`
	background-color: ${(props) =>
		props.theme[ICON_ROUNDED_COLORS[props.iconBackgroundColor]]};
	color: ${(props) => props.theme["white"]};
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	padding: 0.5rem;
	margin-right: 0.6rem;
`;

export const GridCoffees = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	gap: 12px;
`;

export const TitleGrid = styled(BaseTitle)`
	font-size: 2rem;
	line-height: 41.6px;
	margin-left: 10vw;
	margin-bottom: 5rem;
`;

export const ContainerGrid = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10vw;
	width: 50vw;
`;
