import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/">Site Logo</Link>

			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>

					<li>
						<NavLink to="about">About me</NavLink>
					</li>

					<li>
						<NavLink to="projects">Projects</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
