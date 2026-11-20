import { createBrowserRouter } from "react-router";
import App from "../../App";
import Login from "../auth/components/pages/Login";
import Register from "../auth/components/pages/Register";
import Profile from "../auth/components/pages/Profile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
		],
	},
]);

export default router;
