import type { ReactNode } from "react";
import styled from "styled-components";

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return <StyledAuthLayout>{children}</StyledAuthLayout>;
};

const StyledAuthLayout = styled.div`
	border: 1px solid black;
	padding: 1rem;
	display: flex;
	flex-flow: column;
	width: 500px;
	align-items: center;

	.auth-title {
		text-decoration: underline;
	}

	form {
		display: flex;
		flex-flow: column;
		gap: 15px;
	}

	.default-input {
		display: flex;
		align-items: baseline;
		gap: 15px;

		label {
			font-weight: bold;
			font-style: italic;
			min-width: 50px;
		}

		input {
			padding: 0.3rem 1rem;
			width: 100%;
		}
	}

	.default-button {
		padding: 0.5rem;
		font-weight: bold;
		border: 1px solid grey;
		border-radius: 5px;
		cursor: pointer;
	}

	.password-hint {
		font-size: 0.85rem;
		margin: 0;

		p {
			margin: 0 0 0.35rem;
		}

		ul {
			margin: 0;
			padding-left: 1.2rem;
		}
	}

	.form-error {
		color: #b00020;
		font-size: 0.9rem;
		margin: 0;
	}
`;

export default AuthLayout;
