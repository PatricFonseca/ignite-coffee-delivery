import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	width: 80vw;
	padding: 5rem 0;
	gap: 2rem;
`;

export const SuccessTitle = styled.h1`
	font-family: "Baloo 2";
	font-style: normal;
	font-weight: 800;
	font-size: 32px;
	line-height: 130%;

	color: ${(props) => props.theme["yellow-dark"]};
`;

export const SuccessSubtitle = styled.h3`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 130%;

	color: ${(props) => props.theme["base-subtitle"]};
	margin-bottom: 2rem;
`;

export const InfoCardBorder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	/* padding: 40px; */
	gap: 32px;

	width: 526px;
	height: 270px;

	border-radius: 6px 36px;

	position: relative;
	border: 1px solid;

	border-image-source: linear-gradient(
		102.89deg,
		#dbac2c 2.61%,
		#8047f8 98.76%
	);

	background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
`;

export const InfoCard = styled.div`
	width: 100%;
	height: 100%;
	background: #fff;
	padding: 2rem;
	border-radius: 6px 36px;
`;

export const HeaderContainer = styled.div`
	display: flex;
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

export const IconRounded = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 1.5rem;
	height: 1.5rem;
	/* background-color: ${(props) => props.theme["purple"]}; */
	background-color: ${(props) => props.color};
`;
