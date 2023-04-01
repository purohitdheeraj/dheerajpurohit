import "./App.css";

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import { Error, Layout } from "./components";
import { About, Home, NotFound } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />} errorElement={<Error />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
