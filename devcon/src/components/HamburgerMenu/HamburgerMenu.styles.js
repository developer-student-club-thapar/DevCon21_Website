import styled from "styled-components";

import { lg, md, xl } from "../../theme/breakpoints";

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.text};
	min-height: 100vh;
	width: 100vw;
	position: fixed;
	z-index: 100;
	overflow-y: hidden;
	top: 0;
	left: 0;
	transform: ${(props) =>
		props.isOpen === true
			? "translate3d(0, 0, 0)"
			: "translate3d(100vw, 0, 0)"};
	transition: transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;

	${lg},
	${xl} {
		display: none;
	}
	${md} {
		display: flex;
	}
`;

export const MenuItem = styled.div`
	padding: 1rem;
	color: #000;
	width: fit-content;
	font-size: 1.6rem;
	text-decoration: none;
`;

export const LogoSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 1rem;

	.heading {
		font-size: 2rem;
		font-weight: bold;
		color: #000;
		margin: 0;
	}

	.close {
		fill: #000;
		font-size: 1.2rem;
	}
`;

export const MenuSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
`;
