export type RegisterForm = {
	email: string;
	password: string;
	passwordRepeat: string;
};

const hasUppercase = /[A-Z]/;
const hasLowercase = /[a-z]/;
const hasDigit = /[0-9]/;
const hasSpecial = /[^A-Za-z0-9]/;

const registerValidation = (form: RegisterForm): boolean => {
	const { email, password, passwordRepeat } = form;

	if (!email.trim() || !password || !passwordRepeat) {
		return false;
	}

	if (password !== passwordRepeat) {
		return false;
	}

	if (password.length < 12) {
		return false;
	}

	if (!hasUppercase.test(password)) {
		return false;
	}

	if (!hasLowercase.test(password)) {
		return false;
	}

	if (!hasDigit.test(password)) {
		return false;
	}

	if (!hasSpecial.test(password)) {
		return false;
	}

	return true;
};

export default registerValidation;
