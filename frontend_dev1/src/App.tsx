import "./App.css";
import { AppWrapper } from "./modules/app/components/AppWrapper";
import { Layout } from "./modules/app/components/Layout";
import { Outlet } from "react-router";

function App() {
	return (
		<AppWrapper>
			<Layout>
				<Outlet />
			</Layout>
		</AppWrapper>
	);
}

export default App;
