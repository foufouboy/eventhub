import { describe, it, expect } from "vitest";
import registerValidation from "../core/registerValidation";

const validRegisterForm = {
	email: "user@example.com",
	password: "Abcdefghij1!",
	passwordRepeat: "Abcdefghij1!",
};

describe("registerValidation", () => {
	it("accepte un formulaire complet avec un mot de passe valide", () => {
		expect(registerValidation(validRegisterForm)).toBe(true);
	});

	it("refuse un champ vide", () => {
		expect(registerValidation({ ...validRegisterForm, email: "" })).toBe(
			false,
		);
		expect(registerValidation({ ...validRegisterForm, password: "" })).toBe(
			false,
		);
		expect(
			registerValidation({
				...validRegisterForm,
				passwordRepeat: "",
			}),
		).toBe(false);
	});

	it("refuse si les mots de passe ne correspondent pas", () => {
		expect(
			registerValidation({
				...validRegisterForm,
				passwordRepeat: "Abcdefghij2!",
			}),
		).toBe(false);
	});

	it("refuse un mot de passe trop court", () => {
		expect(
			registerValidation({
				...validRegisterForm,
				password: "Abcdefg1!",
				passwordRepeat: "Abcdefg1!",
			}),
		).toBe(false);
	});

	it("refuse s'il manque une majuscule, une minuscule, un chiffre ou un caractère spécial", () => {
		expect(
			registerValidation({
				...validRegisterForm,
				password: "abcdefghij1!",
				passwordRepeat: "abcdefghij1!",
			}),
		).toBe(false);
		expect(
			registerValidation({
				...validRegisterForm,
				password: "ABCDEFGHIJ1!",
				passwordRepeat: "ABCDEFGHIJ1!",
			}),
		).toBe(false);
		expect(
			registerValidation({
				...validRegisterForm,
				password: "Abcdefghijk!",
				passwordRepeat: "Abcdefghijk!",
			}),
		).toBe(false);
		expect(
			registerValidation({
				...validRegisterForm,
				password: "Abcdefghij12",
				passwordRepeat: "Abcdefghij12",
			}),
		).toBe(false);
	});
});
