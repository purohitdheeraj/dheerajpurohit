import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<>
			<div>
				Sorry the page your looking for is not found
			</div>
			<Link to="/">go back to home</Link>
		</>
	);
}

export default NotFound;
