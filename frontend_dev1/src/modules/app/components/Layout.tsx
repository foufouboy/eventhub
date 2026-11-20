import { Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<CssBaseline />
		<Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
			<Typography variant="h6" sx={{ flexGrow: 1 }}>
				EventHub
			</Typography>
			<nav style={{ display: "flex", gap: "1rem" }}>
				<a href="login">Connexion</a>
				<a href="register">Inscription</a>
				<a href="profile">Profil</a>
			</nav>
		</Toolbar>
		<Container maxWidth="lg" sx={{ mt: 4 }}>
			{children}
		</Container>
	</>
);
