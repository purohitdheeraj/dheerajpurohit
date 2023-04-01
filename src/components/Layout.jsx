import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<header>I am header</header>
			<Outlet />
			<footer>I am footer</footer>
		</>
	);
}

export default Layout;
