// <reference types="vitest/browser" />

import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Register from "../components/pages/Register";

describe("Register", () => {
	const Wrapper = () => {
		return <Register />;
	};

	const setup = () => {
		render(<Wrapper />);
	};

	it("should display the form and its inputs correctly", () => {
		setup();
		expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
		expect(screen.getByLabelText("Mot de passe")).toBeInTheDocument();
		expect(
			screen.getByLabelText("Répétez le mot de passe :"),
		).toBeInTheDocument();
	});

	it("should have an inscription button, passing a post request", () => {
		setup();
		const button = screen.getByRole("button", { name: "S'inscrire" });
		expect(button).toBeInTheDocument();
		expect(button.closest("form")).toHaveAttribute("method", "post");
		expect(button.closest("form")).toHaveAttribute(
			"action",
			"/api/register",
		);
	});

	it("should hide the password, in the password input", () => {
		setup();
		expect(screen.getByLabelText("Mot de passe")).toHaveAttribute(
			"type",
			"password",
		);
		expect(
			screen.getByLabelText("Répétez le mot de passe :"),
		).toHaveAttribute("type", "password");
	});

	it("show an error message if validation fails", () => {
		setup();
		fireEvent.click(screen.getByRole("button", { name: "S'inscrire" }));
		expect(screen.getByRole("alert")).toHaveTextContent(
			"Veuillez bien vérifier vos entrées, et que le mot de passe vérifie bien les conditions demandées.",
		);
	});
});
