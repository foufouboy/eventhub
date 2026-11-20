// <reference types="vitest/browser" />

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "../components/pages/Login";

describe("Login", () => {
	const Wrapper = () => {
		return <Login />;
	};

	const setup = () => {
		render(<Wrapper />);
	};

	it("should display the form and its inputs correctly", () => {
		setup();
		expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
	});

	it("should have a connexion button, passing a post request", () => {
		setup();
		expect(
			screen.getByRole("button", { name: "Se connecter" }),
		).toBeInTheDocument();
	});

	it("should hide the password, in the password input", () => {
		setup();
		expect(screen.getByLabelText("Mot de passe")).toHaveAttribute(
			"type",
			"password",
		);
	});

	it("should display the password requirements", () => {
		setup();
		expect(screen.getByText("12 caractères")).toBeInTheDocument();
		expect(screen.getByText("Au moins une majuscule")).toBeInTheDocument();
		expect(screen.getByText("Au moins une minuscule")).toBeInTheDocument();
		expect(screen.getByText("Au moins un chiffre")).toBeInTheDocument();
		expect(
			screen.getByText("Au moins un caractère spécial"),
		).toBeInTheDocument();
	});
});

