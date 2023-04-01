import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<>
			<div>
				Sorry the page you are looking for was not found
			</div>
			<Link to="/">go back to home</Link>
		</>
	);
}

export default NotFound;
