import Home from "../pages/homepage";
import EntryPage from "../pages/EntryPage";
import NotFound from "../pages/NotFound";

const routes = [
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/entry/:id",
		element: <EntryPage />,
		errorElement: <NotFound />,
	},
];

export default routes;
