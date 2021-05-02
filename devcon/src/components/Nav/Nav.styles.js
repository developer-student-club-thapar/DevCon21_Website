import styled from "styled-components";

import { md } from "../../theme/breakpoints";
import { ActionButton } from "../Hero/Hero.styles";

export const LogoContainer = styled.div`
	display: flex;
	width: 138px;
	height: 138px;
	align-self: flex-start;
	${md} {
		width: 4rem;
		height: 4rem;
	}
	.logo {
		width: 138px;
		height: 138px;

		${md} {
			width: 4rem;
			height: 4rem;
		}
	}
`;

export const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;
	justify-content: space-between;
	position: sticky;
	top: -1px; /* ➜ the trick */
	padding-top: calc(1rem + 1px);
	width: 100%;
	z-index: 2000;
	background: #18191f;

	.logo-container {
		display: flex;
		width: 80px;
		height: 80px;
		align-self: flex-start;
		${md} {
			width: 4rem;
			height: 4rem;
		}
		.logo {
			width: 80px;
			height: 80px;

			${md} {
				width: 4rem;
				height: 4rem;
			}
		}
	}

	.hamburger {
		display: none;
		${md} {
			display: block;
			font-size: 1.5rem;
			margin: auto 0 auto auto;
		}
	}

	${md} {
		flex-direction: row;
		padding: 1rem;
		align-items: center;
	}
`;

export const NavAction = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: 50%;
	text-align: center;
	/* margin: auto; */
`;

export const NavItem = styled.div`
	padding: 1.1rem 1rem;
	font-size: 1.2rem;
	line-height: 1.2rem;
	cursor: pointer;
	position: relative;
	text-align: center;
	&::before {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 1px;
		background-color: ${({ theme }) => theme.text};
		content: "";
		transition: width 0.3s linear;
	}

	&:hover::before {
		width: 100%;
	}

	${md} {
		display: none;
	}
`;

export const RegisterBtn = styled(ActionButton)`
	display: ${(props) => (props.isScroll ? "none" : "flex")};
	width: 120px;
	padding: 0.8rem 1rem;
	height: fit-content;
	align-self: center;
	align-items: center;
	justify-content: center;
	border: 2px solid #333333;
	${md} {
		display: none;
	}
`;
