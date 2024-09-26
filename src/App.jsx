import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import Dashboard from "./components/Dashboard";
import Table from "./components/Table";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div className="flex h-screen">
				<Sidebar />
				<div className="flex flex-col w-full">
					<Header className="static" />
					<div className="border-x-2 border-zinc-200 flex flex-col overflow-y-scroll">
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/orders" element={<Table />} />
						</Routes>
					</div>
				</div>
				<RightBar />
			</div>
		</Router>
	);
};

export default App;
