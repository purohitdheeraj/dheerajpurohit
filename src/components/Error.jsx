import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
	const { error, statusText } = useRouteError();
	return (
		<div>
			<p>{error.message}</p>
			<p>{statusText}</p>
			<Link to="/">go to home</Link>
		</div>
	);
}

export default Error;
