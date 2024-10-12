import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import lightMap from "../assets/images/lightMap.png";
import darkMap from "../assets/images/darkMap.png";
import { LineChart, Line } from "recharts";
import { Link } from "react-router-dom";
import { useAuth } from "./Context";
import { motion } from "framer-motion";

export default function Dashboard() {
	const boxes = [
		{
			name: "Customers",
			number: "3,781",
			hike: "+11.01%",
			link: "/",
		},
		{
			name: "Orders",
			number: "1,219",
			hike: "-0.03%",
			link: "/orders",
		},
		{
			name: "Revenue",
			number: "$695",
			hike: "+15.03%",
			link: "/",
		},
		{
			name: "Growth",
			number: "30.1%",
			hike: "+6.08%",
			link: "/",
		},
	];

	const tableHeaders = [
		{ name: "Name", key: "name" },
		{ name: "Price", key: "price" },
		{ name: "Quantity", key: "quantity" },
		{ name: "Amount", key: "amount" },
	];

	const data = [
		{ name: "Jan", Actual: 18, Projection: 22 },
		{ name: "Feb", Actual: 20, Projection: 25 },
		{ name: "Mar", Actual: 22, Projection: 23 },
		{ name: "Apr", Actual: 24, Projection: 27 },
		{ name: "May", Actual: 15, Projection: 20 },
		{ name: "Jun", Actual: 19, Projection: 23 },
	];

	const revenueData = [
		{ title: "Current Week", value: "$58,211" },
		{ title: "Previous Week", value: "$68,768" },
	];

	const tableData = [
		{
			name: "ASOS Ridley High Waist",
			price: "$79.49",
			quantity: 82,
			amount: "$6518.18",
		},
		{
			name: "Marco Lightweight Shirt",
			price: "$128.50",
			quantity: 37,
			amount: "$4754.50",
		},
		{
			name: "Half Sleeve Shirt",
			price: "$39.99",
			quantity: 64,
			amount: "$2559.36",
		},
		{
			name: "Lightweight Jacket",
			price: "$20.00",
			quantity: 184,
			amount: "$3680.00",
		},
		{
			name: "Long Sleeve Shirt",
			price: "$25.50",
			quantity: 10,
			amount: "$255.00",
		},
		{
			name: "Cotton T-Shirt",
			price: "$10.99",
			quantity: 184,
			amount: "$2023.16",
		},
		{
			name: "Lightweight Jacket",
			price: "$20.00",
			quantity: 184,
			amount: "$3680.00",
		},
		{
			name: "Long Sleeve Shirt",
			price: "$25.50",
			quantity: 10,
			amount: "$255.00",
		},
		{
			name: "Cotton T-Shirt",
			price: "$10.99",
			quantity: 184,
			amount: "$2023.16",
		},
		{
			name: "Lightweight Jacket",
			price: "$20.00",
			quantity: 184,
			amount: "$3680.00",
		},
		{
			name: "Long Sleeve Shirt",
			price: "$25.50",
			quantity: 10,
			amount: "$255.00",
		},
		{
			name: "Cotton T-Shirt",
			price: "$10.99",
			quantity: 184,
			amount: "$2023.16",
		},
		{
			name: "Lightweight Jacket",
			price: "$20.00",
			quantity: 184,
			amount: "$3680.00",
		},
		{
			name: "Long Sleeve Shirt",
			price: "$25.50",
			quantity: 10,
			amount: "$255.00",
		},
		{
			name: "Cotton T-Shirt",
			price: "$10.99",
			quantity: 184,
			amount: "$2023.16",
		},
		{
			name: "Lightweight Jacket",
			price: "$20.00",
			quantity: 184,
			amount: "$3680.00",
		},
	];

	const PieChartdata = [
		{ name: "Direct", value: 300.56 },
		{ name: "Affilliate", value: 135.18 },
		{ name: "Sponsored", value: 154.02 },
		{ name: "E-mail", value: 48.96 },
	];

	const revenueDataCountry = [
		{ location: "New York", revenue: 72, maxRevenue: 100 },
		{ location: "San Francisco", revenue: 39, maxRevenue: 100 },
		{ location: "Sydney", revenue: 25, maxRevenue: 100 },
		{ location: "Singapore", revenue: 61, maxRevenue: 100 },
	];

	const COLORS = ["#1c1c1c", "#b9edbd", "#b1e3fe", "#95a4fd"];
	const { isDarkMode } = useAuth();

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className={`p-4 font-inter ${
					isDarkMode
						? "bg-zinc-900 text-white fade-in"
						: "bg-white text-zinc-900 fade-out"
				}`}
			>
				<div className="font-bold w-full py-6 px-1">eCommerce</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
					className={`flex flex-col md:flex-row w-full ${
						isDarkMode
							? "bg-zinc-900 text-white fade-in"
							: "bg-white text-zinc-900 fade-out"
					}`}
				>
					<div className="flex flex-col md:flex-row gap-x-4">
						<div className="flex flex-wrap gap-x-4 gap-y-4 h-full w-full md:w-1/2 mb-4">
							{boxes.map((data, index) => {
								const isDark = isDarkMode
									? "bg-zinc-800 text-white fade-in"
									: "bg-white text-zinc-900 fade-out";

								let alternateColor;
								if (index === 1 || index === 2) {
									alternateColor = isDarkMode
										? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
										: "bg-zinc-100 hover:bg-zinc-200 text-black fade-out";
								} else {
									alternateColor = isDarkMode
										? "bg-blue-100 hover:bg-blue-200 text-black fade-in"
										: "bg-blue-100 hover:bg-blue-200 text-black fade-out";
								}

								return (
									<Link
										to={data.link}
										key={index}
										className={`${alternateColor} p-6 px-6 h-[48%] rounded-3xl w-full md:w-[47%] duration-1000 group`}
									>
										<div className="text-md font-bold">{data.name}</div>
										<div className="mt-4 flex justify-between items-center">
											<span className="text-2xl font-bold">{data.number}</span>
											<span
												className={`text-sm flex items-center ${
													data.hike.startsWith("-")
														? "text-red-500"
														: "text-green-500"
												} transform transition-transform`}
											>
												{data.hike}{" "}
												{data.hike.startsWith("+") ? (
													<FaArrowTrendUp className="ml-1 group-hover:translate-y-[-10px] duration-500" />
												) : (
													<HiOutlineArrowTrendingDown className="ml-1 group-hover:translate-y-[10px] duration-500" />
												)}
											</span>
										</div>
									</Link>
								);
							})}
						</div>

						<div
							className={`w-full md:w-1/2 flex items-center cursor-pointer rounded-3xl justify-center ${
								isDarkMode
									? "bg-zinc-800 text-white fade-in hover:bg-zinc-700"
									: "bg-zinc-100 text-zinc-900 fade-out hover:bg-zinc-200"
							}`}
						>
							<div className="py-6 px-2 rounded-md w-full cursor-pointer">
								<h3 className="ml-4 text-start font-bold text-sm md:text-lg">
									Projections vs Actuals
								</h3>
								<div className="mt-4 cursor-pointer" style={{ height: 300 }}>
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											width={500}
											height={300}
											data={data}
											margin={{
												top: 20,
												right: 30,
												left: 20,
												bottom: 5,
											}}
										>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="name" />
											<YAxis />
											<Tooltip />
											<Legend />
											<Bar dataKey="Actual" stackId="a" fill="#a8c5da" />
											<Bar
												dataKey="Projection"
												stackId="a"
												fill="#cedfe9"
												radius={[6, 6, 0, 0]}
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
					className="flex flex-col md:flex-row gap-6 h-auto w-full mt-6"
				>
					<div
						className={`w-full md:w-[70%] rounded-3xl pt-8 pb-12 px-8 ${
							isDarkMode
								? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
								: "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 fade-out"
						}`}
						style={{ height: "auto" }}
					>
						<div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
							<h3
								className={`font-bold ${
									isDarkMode ? "text-white fade-in" : "text-black fade-out"
								}`}
							>
								Revenue
							</h3>

							<span className="h-6 border-l border-zinc-300 hidden md:block"></span>

							{revenueData.map((data, index) => (
								<div
									key={index}
									className="flex flex-col md:flex-row items-center space-x-2 mt-2 md:mt-0"
								>
									<span
										className={`w-2 h-2 rounded-full hidden md:block ${
											isDarkMode ? "bg-white fade-in" : "bg-black fade-out"
										}`}
									></span>
									<span
										className={`${
											isDarkMode
												? "text-zinc-100 fade-in"
												: "text-zinc-700 fade-out"
										}`}
									>
										{data.title}
									</span>
									<span
										className={`font-bold ${
											isDarkMode ? "text-white fade-in" : "text-black fade-out"
										}`}
									>
										{data.value}
									</span>
								</div>
							))}
						</div>

						<div className="mt-4" style={{ height: "240px" }}>
							<ResponsiveContainer width="100%" height="100%">
								<LineChart data={data}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line
										type="monotone"
										dataKey="Projection"
										stroke={isDarkMode ? "#4fc3f7" : "#8884d8"}
										activeDot={{ r: 8 }}
									/>
									<Line
										type="monotone"
										dataKey="Actual"
										stroke={isDarkMode ? "#ff7043" : "#82ca9d"}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>

					<div
						className={`w-full md:w-[30%] h-full rounded-3xl py-6 px-4 ${
							isDarkMode
								? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
								: "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 fade-out"
						}`}
					>
						<h6 className="text-md font-semibold text-center mb-4">
							Revenue by Location
						</h6>

						<div className="relative w-full h-56 md:h-1/2 rounded-3xl overflow-hidden mb-4">
							{isDarkMode ? (
								<img
									src={darkMap}
									alt="Dark Mode Map"
									className="w-full h-full object-cover rounded-3xl"
								/>
							) : (
								<img
									src={lightMap}
									alt="Light Mode Map"
									className="w-full h-full object-cover rounded-3xl"
								/>
							)}
						</div>

						<div
							className={` ${
								isDarkMode ? "text-white" : "text-black"
							} rounded-lg`}
						>
							{revenueDataCountry.map((data, index) => (
								<div key={index} className="mb-2">
									<div className="flex justify-between text-sm">
										<span>{data.location}</span>
										<span>{data.revenue}K</span>
									</div>
									<div
										className={`w-full h-2 ${
											isDarkMode ? "bg-zinc-700" : "bg-gray-200"
										} rounded-full`}
									>
										<div
											className={`h-2 ${
												isDarkMode ? "bg-blue-500" : "bg-blue-500"
											} rounded-full`}
											style={{
												width: `${(data.revenue / data.maxRevenue) * 100}%`,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
					className="flex flex-col md:flex-row gap-6 h-auto w-full mt-6"
				>
					<div
						className={`w-full md:w-[70%] rounded-3xl overflow-y-scroll py-6 px-4 ${
							isDarkMode
								? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
								: "bg-zinc-100 hover:bg-zinc-200 text-black fade-out"
						}`}
						style={{ maxHeight: "400px" }}
					>
						<div className="font-bold mb-3 ml-3">Top Selling Products</div>
						<div className="overflow-x-auto">
							<table className="min-w-full table-auto text-left border-collapse">
								<thead>
									<tr className="text-sm border-b-2 border-[#a9aaac]">
										{tableHeaders.map((header, index) => (
											<th key={index} className="px-4 py-2">
												{header.name}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{tableData.map((item, index) => (
										<tr key={index} className="hover:bg-zinc-700">
											{" "}
											{tableHeaders.map((header, index) => (
												<td key={index} className="px-4 py-2">
													{item[header.key]}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					<div
						className={`w-full md:w-[30%] h-auto rounded-3xl py-6 px-4 ${
							isDarkMode
								? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
								: "bg-zinc-100 hover:bg-zinc-200 text-black fade-out"
						}`}
					>
						<div className="font-bold mb-3">Total Sales</div>
						<ResponsiveContainer width="100%" height={190}>
							<PieChart>
								<Pie
									data={PieChartdata}
									cx="50%"
									cy="50%"
									innerRadius={60}
									outerRadius={80}
									fill="#8884d8"
									paddingAngle={3}
									dataKey="value"
								>
									{PieChartdata.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip />
							</PieChart>
						</ResponsiveContainer>

						<div>
							{PieChartdata.map((data, index) => (
								<div
									className="flex py-1 justify-between text-center"
									key={index}
								>
									<div className="flex items-center gap-2">
										<span
											style={{
												backgroundColor: COLORS[index],
												width: "12px",
												height: "12px",
												borderRadius: "50%",
												display: "inline-block",
											}}
										></span>
										<span>{data.name}</span>
									</div>
									<span>${data.value}</span>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</motion.div>
		</>
	);
}
