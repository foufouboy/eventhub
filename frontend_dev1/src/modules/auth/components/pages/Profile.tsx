import AuthLayout from "../shared/AuthLayout";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const Profile = () => {
	return (
		<AuthLayout>
			<StyledProfile>
				<div className="profile-header">
					<h3 className="auth-title">Profil</h3>
					<Avatar alt="profile" />
				</div>
				<form action="/api/profile" method="patch">
					<div className="default-input">
						<label htmlFor="email">E-mail</label>
						<input
							type="email"
							id="email"
							defaultValue={"test@3wacademy.fr"}
						/>
					</div>
					<div className="profile-entry register-date">
						<p>Date d'inscription</p>
						<p>Vendredi 20 nov. 2026</p>
					</div>
					<button className="default-button">
						Mettre à jour le mail
					</button>
				</form>
			</StyledProfile>
		</AuthLayout>
	);
};

const StyledProfile = styled.div`
	.profile-header {
		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: row-reverse;
		gap: 15px;
	}
	.profile-entry {
		display: flex;
		gap: 15px;
		align-items: center;

		&.register-date > p:nth-child(2) {
			font-style: italic;
		}
	}
`;

export default Profile;
