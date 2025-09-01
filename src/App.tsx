import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import PersonalInfo from "./pages/PersonalInfo";
import Preferences from "./pages/Preferences";
import Summary from "./pages/Summary";
import { Boxes } from "./components/ui/background-boxes";
import Address from "./pages/Address";
import { FormProvider } from "./context/FormContext";

const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ path: "/", element: <PersonalInfo /> },
			{ path: "/address", element: <Address /> },
			{ path: "/preferences", element: <Preferences /> },
			{ path: "/summary", element: <Summary /> },
		],
	},
];

const router = createBrowserRouter(routes);

function App() {
	return (
		<FormProvider>
			<div className="relative overflow-hidden flex items-center justify-center h-screen w-full bg-gray-900 text-neutral-300">
				<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				<Boxes />
				<div className="z-50 bg-white/5 backdrop-blur-xs mx-4 rounded w-[400px] h-[72vh] sm:h-[68vh]">
					<RouterProvider router={router}></RouterProvider>
				</div>
			</div>
		</FormProvider>
	);
}

export default App;
