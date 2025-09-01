import Progress from "@/components/Progress";
import { Outlet } from "react-router";

const Layout = () => {
	return (
		<main className="rounded h-full w-full flex flex-col items-center justify-between p-5">
			<Progress />
			<Outlet />
		</main>
	);
};

export default Layout;
