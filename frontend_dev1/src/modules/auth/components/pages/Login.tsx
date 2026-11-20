import { useState, type ChangeEvent } from "react";
import AuthLayout from "../shared/AuthLayout";

const Login = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const isFormValid = () => form.email !== "" && form.password !== "";

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm((current) => ({ ...current, [name]: value }));
	};

	return (
		<AuthLayout>
			<h3 className="auth-title">Connexion</h3>
			<form action="/api/login" method="post">
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
				<button className="default-button" disabled={!isFormValid()}>
					Se connecter
				</button>
			</form>
		</AuthLayout>
	);
};

export default Login;
