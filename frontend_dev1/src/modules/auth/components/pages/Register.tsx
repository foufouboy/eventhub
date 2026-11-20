import { useState, type ChangeEvent, type FormEvent } from "react";
import AuthLayout from "../shared/AuthLayout";
import registerValidation from "../../core/registerValidation";

const Register = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
		passwordRepeat: "",
	});
	const [showError, setShowError] = useState(false);

	const isFormValid = () =>
		form.email !== "" && form.password !== "" && form.passwordRepeat !== "";

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		if (!registerValidation(form)) {
			event.preventDefault();
			setShowError(true);
			return;
		}

		setShowError(false);
	};

	console.log(form);

	return (
		<AuthLayout>
			<h3 className="auth-title">Inscription</h3>
			<form action="/api/register" method="post" onSubmit={handleSubmit}>
				<div className="default-input">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						id="email"
						name="email"
						value={form.email}
						onChange={handleChange}
					/>
				</div>
				<div className="default-input">
					<label htmlFor="password">Mot de passe</label>
					<input
						type="password"
						id="password"
						name="password"
						value={form.password}
						onChange={handleChange}
					/>
				</div>
				<div className="password-hint">
					<p>Le mot de passe doit contenir :</p>
					<ul>
						<li>12 caractères</li>
						<li>Au moins une majuscule</li>
						<li>Au moins une minuscule</li>
						<li>Au moins un chiffre</li>
						<li>Au moins un caractère spécial</li>
					</ul>
				</div>
				<div className="default-input">
					<label htmlFor="password-repeat">
						Répétez le mot de passe :
					</label>
					<input
						type="password"
						id="password-repeat"
						name="passwordRepeat"
						value={form.passwordRepeat}
						onChange={handleChange}
					/>
				</div>
				{showError && (
					<p className="form-error" role="alert">
						Veuillez bien vérifier vos entrées, et que le mot de
						passe vérifie bien les conditions demandées.
					</p>
				)}
				<button className="default-button" disabled={!isFormValid()}>
					S'inscrire
				</button>
			</form>
		</AuthLayout>
	);
};

export default Register;
