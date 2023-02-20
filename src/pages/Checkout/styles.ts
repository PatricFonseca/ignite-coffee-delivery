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
	width: 45vw;
	margin-right: 1rem;
`;

export const BaseCardBox = styled.div`
	padding: 2.5rem;
	background-color: ${(props) => props.theme["card"]};
	margin-top: 1rem;
	margin-right: 1rem;
`;

export const CardBox = styled(BaseCardBox)`
	border-radius: 6px;
`;

export const RightCardBox = styled(BaseCardBox)`
	width: 28rem;
	border-radius: 6px 44px;
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
	/* &::placeholder {
		font-size: 14px;
		text-align: right;
	} */
	&:before {
		content: "Texto esquerda";
		color: gray;
		font-size: 14px;
		padding-right: 10px;
	}

	::after {
		content: "Texto direita";
		color: gray;
		font-size: 14px;
		padding-left: 10px;
		text-align: right;
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
		/* align-items: center; */
	}
`;

export const Box = styled.div`
	margin-left: 1rem;
	p {
		margin-bottom: 0.4rem;
		font-family: "Roboto";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 130%;
	}
`;

export const Item = styled.li`
	padding: 1rem 0;
	border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const ItemPrice = styled.span`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 130%;
	color: ${(props) => props.theme["base-text"]};

	margin-left: auto;
	padding-right: 0.2rem;
`;

export const ActionsItem = styled.div`
	display: flex;
	gap: 0.7rem;
`;

export const TotalCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 1rem;

	h3 {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 130%;
		color: ${(props) => props.theme["base-subtitle"]};
	}
`;

export const TotalPrice = styled.span`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 130%;
	color: ${(props) => props.theme["base-text"]};
`;
export const TotalCardRow = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 130%;
		color: ${(props) => props.theme["base-text"]};
	}
`;

export const ConfirmButton = styled.button`
	width: 100%;
	background-color: ${(props) => props.theme["yellow"]};
	border-radius: 6px;
	padding: 12px 8px;

	margin-top: 1rem;

	font-family: "Roboto";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 160%;
	font-stretch: 100;
	text-transform: uppercase;
	color: #fff;

	&:hover {
		background-color: ${(props) => props.theme["yellow-dark"]};
	}
`;

interface LabelProps {
	visible: string;
}

export const LabelOptional = styled.label<LabelProps>`
	font-size: 14px;
	color: gray;
	padding-left: 10px;
	text-align: right;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	visibility: ${(props) => props.visible};
	font-style: italic;
`;

export const ComplementContainer = styled.div`
	position: relative;
	width: 100%;
`;
