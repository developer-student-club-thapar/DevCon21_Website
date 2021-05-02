import styled from "styled-components";
import { md, xs } from "../../theme/breakpoints";

export const Box = styled.div`
	height: 450px;
	width: 100%;
	background-color: ${({ theme }) => theme.text};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 40px;
	margin: 8rem 0;
	position: relative;
	overflow: hidden;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
	cursor: pointer;

	/* &:hover {
    background-color: #b19cd9;
    h1,
    h3 {
      color: ${({ theme }) => theme.text};
    }

    .discord-logo {
      filter: invert(100%);
    }
  } */

	h1 {
		color: #000;
		font-weight: 900;
		font-size: 4rem;
		margin: 1rem 0;
	}

	h3 {
		color: gray;
		font-weight: 400;
		font-size: 2rem;
		margin: 0;
	}

	.discord-logo {
		height: 125px;
		object-fit: contain;
		margin: 3rem 0 1rem 0;
	}

	${md} {
		margin: 4rem auto;
		width: 90%;
		height: 400px;
		border-radius: 20px;

		h1 {
			font-size: 3rem;
		}

		h3 {
			font-size: 1.5rem;
		}
	}

	${xs} {
		margin: 4rem auto;
		width: 90%;
		height: 350px;
		border-radius: 20px;

		h1 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1rem;
		}

		.discord-logo {
			height: 4rem;
		}
	}
`;
