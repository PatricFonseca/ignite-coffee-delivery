import styled from "styled-components";
import { Input } from "../../components/Input";
import { InputStyle } from "../../components/Input/styles";

export const Container = styled.div`
	display: flex;
	margin: 0 auto;
	width: 80vw;
	justify-content: space-between;
	padding: 5rem 0;
`;

export const ContainerScreen = styled.div`
	display: flex;
`;

export const Main = styled.main`
	flex: 1;
	width: 50vw;
`;

export const CardBox = styled.div`
	padding: 2.5rem;
	background-color: ${(props) => props.theme["card"]};
	border-radius: 6px;
	margin-top: 1rem;
	margin-right: 1rem;
`;

export const CustomInput = styled(InputStyle)`
	margin-bottom: 1rem;
`;

export const Title = styled.h3`
	color: ${(props) => props.theme["base-subtitle"]};
	font-family: "Baloo 2", sans-serif;
	font-weight: 700;
	font-size: 1.12rem;
	line-height: 23.4px;
`;

export const HeaderBox = styled.div`
	margin-bottom: 2rem;
`;

export const HeaderTitle = styled.h4`
	color: ${(props) => props.theme["base-subtitle"]};
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	font-size: 1rem;
	line-height: 130%;
`;

export const HeaderContainer = styled.div`
	display: flex;
`;

export const HeaderSubtitle = styled.p`
	color: ${(props) => props.theme["base-text"]};
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	font-size: 0.87rem;
	line-height: 18.2px;
`;

export const MapIcon = styled.span`
	color: ${(props) => props.theme["yellow-dark"]};
`;

interface IColProps {
	gutter: number;
}

export const Col = styled("div")<IColProps>`
	position: relative;
	width: 100%;
	min-height: 1px; // Prevent columns from collapsing when empty
	padding-left: ${(props) => props.gutter / 2}rem;
	padding-right: ${(props) => props.gutter / 2}rem;
`;

export const ComplementInput = styled(Input)`
	&::placeholder::after {
		content: "-aa--";
	}
`;

export const PaymentButtons = styled.div`
	display: flex;
	gap: 12px;
`;

// right side box
export const Image = styled.img`
	width: 64px;
	height: 64px;
`;

export const ItemsList = styled.ul`
	li {
		display: flex;
		align-items: center;
	}
`;

export const ActionsItem = styled.div`
	display: flex;
`;
