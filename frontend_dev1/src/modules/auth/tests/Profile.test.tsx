// <reference types="vitest/browser" />

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Profile from "../components/pages/Profile";

describe("Profile", () => {
	const Wrapper = () => {
		return <Profile />;
	};

	const setup = () => {
		render(<Wrapper />);
	};

	it("should display the form and its inputs correctly", () => {
		setup();
		expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
		expect(
			screen.getByDisplayValue("test@3wacademy.fr"),
		).toBeInTheDocument();
	});

	it("should have an update button, passing a patch request", () => {
		setup();
		const button = screen.getByRole("button", {
			name: "Mettre à jour le mail",
		});
		expect(button).toBeInTheDocument();
		expect(button.closest("form")).toHaveAttribute("method", "patch");
		expect(button.closest("form")).toHaveAttribute(
			"action",
			"/api/profile",
		);
	});

	it("should display the registration date", () => {
		setup();
		expect(screen.getByText("Date d'inscription")).toBeInTheDocument();
		expect(screen.getByText("Vendredi 20 nov. 2026")).toBeInTheDocument();
	});
});
