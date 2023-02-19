import styled from "styled-components";

export const Image = styled.img`
	position: absolute;
	top: -1rem;
	left: 50%;
	margin-left: -3.75rem;
	width: 7.5rem;
	/* -50px */
	/* bottom: 0; */
	/* right: 50%; */
`;

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 16rem;
	height: 19.37rem;
	border-top-right-radius: 2rem;
	border-top-left-radius: 0.5rem;
	border-bottom-left-radius: 2rem;
	border-bottom-right-radius: 0.5rem;
	padding: 7rem 1rem;
	background-color: #f3f2f2;
	margin-bottom: 1rem;
	/* padding-top: 4rem; */
	/* margin: 0 auto; */
`;

export const Label = styled.span`
	background-color: ${(props) => props.theme["yellow-light"]};
	color: ${(props) => props.theme["yellow-dark"]};
	font-family: "Roboto", sans-serif;
	font-weight: 700;
	font-size: 10px;
	line-height: 0.9rem;
	text-transform: uppercase;
	padding: 0.2rem 0.5rem;
	/* width: 10rem; */
	border-radius: 1rem;
	text-align: center;
`;

export const Name = styled.h3`
	color: ${(props) => props.theme["base-subtitle"]};
	font-family: "Baloo 2", sans-serif;
	font-weight: 700;
	font-size: 20px;
	line-height: 26px;
	padding: 0.5rem;
`;

export const Description = styled.p`
	color: ${(props) => props.theme["base-label"]};
	font-family: "Roboto", sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 18.2px;
`;

export const ContainerOptions = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1.5rem;

	strong {
		color: ${(props) => props.theme["base-text"]};
		font-family: "Baloo 2", sans-serif;
		font-size: 24px;
		font-weight: 800;
		line-height: 31.2px;
	}
`;

export const Price = styled.span`
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	font-size: 14px;
	line-height: 18.2px;
	margin-right: 0.6rem;
`;

export const ShoppingButton = styled.button`
	background-color: ${(props) => props.theme["purple-dark"]};
	padding: 0.5rem 0.6rem;
	border-radius: 0.3rem;
	margin-left: 0.6rem;

	&:hover {
		background-color: ${(props) => props.theme["purple"]};
	}
`;

export const Types = styled.div`
	display: flex;
	gap: 3px;
`;
