import styled from "styled-components";

export const InputStyle = styled.input`
	background-color: ${(props) => props.theme["input"]};
	border: 1px solid #e6e5e5;
	height: 2.62rem;
	border-radius: 4px;
	padding: 0.75rem;
	::placeholder {
		color: ${(props) => props.theme["base-label"]};
	}
	width: ${(props) =>
		props.width && props.width > 0 ? `${props.width}rem` : `100% `};

	font-size: 0.87rem;
	line-height: 1.14rem;

	&:focus,
	&:hover {
		border: 1px solid ${(props) => props.theme["yellow-dark"]};
	}
`;
