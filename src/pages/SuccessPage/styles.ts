import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin: 0 auto;
	width: 80vw;
	justify-content: space-between;
	padding: 5rem 0;
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
