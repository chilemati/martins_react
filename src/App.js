import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Error from "./components/error/Error";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

function App() {
	// js environment

	// end of js environ
	return (
		<div className="App">
			<Nav />
			{/* //!browser router step:2 */}
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/blog"
					element={<Blog />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/create"
					element={<Create />}
				/>
				<Route
					path="/details/:id"
					element={<Details />}
				/>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</div>
	);
}

export default App;
