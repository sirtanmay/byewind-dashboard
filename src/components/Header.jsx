import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";
import { IoStarOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "./Context";
import { useState } from "react";

export default function Header() {
	const {
		setIsLeftClose,
		setIsRightClose,
		isLeftClose,
		isRightClose,
		isDarkMode,
		setIsDarkMode,
	} = useAuth();
	const [fade, setFade] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [rotate, setRotate] = useState(false);

	const handleClockClick = () => {
		setRotate(true);
		setTimeout(() => setRotate(false), 700);
	};

	const handleBellClick = () => {
		setAnimate(true);
		setTimeout(() => setAnimate(false), 700);
	};

	const toggleDarkMode = () => {
		setFade(true);
		setTimeout(() => {
			setIsDarkMode(!isDarkMode);
			setFade(false);
		}, 300);
	};

	const handleClick = () => {
		setIsFilled(!isFilled);
	};

	return (
		<div
			className={`w-full h-8 px-6 text-lg border-b-2 p-8 flex justify-between 
            ${
							isDarkMode
								? "bg-zinc-900 border-zinc-700 text-white fade-in"
								: "bg-white border-zinc-300 text-black fade-out"
						} 
            ${fade ? "fade-out" : ""}`}
		>
			<div className="flex items-center gap-x-5">
				<div>
					{isLeftClose ? (
						<LuPanelRightClose
							className="hover:text-gray-400 fade-in"
							onClick={() => setIsLeftClose(false)}
						/>
					) : (
						<LuPanelLeftClose
							className="hover:text-gray-400 fade-in"
							onClick={() => setIsLeftClose(true)}
						/>
					)}
				</div>
				<IoStarOutline
					onClick={handleClick}
					className={`cursor-pointer hover:text-gray-400 duration-300 ${
						isDarkMode
							? isFilled
								? "text-gray-400 fade-in"
								: "text-white fade-in"
							: isFilled
							? "text-gray-400 fade-out"
							: "text-zinc-900 fade-out"
					}`}
					style={{ fontSize: "18px" }}
				/>
				<span>
					<Link
						to="/"
						className={`${
							isDarkMode
								? "text-white fade-in hover:text-gray-400"
								: "text-black fade-out hover:text-gray-400"
						}`}
					>
						Dashboards
					</Link>
				</span>
				<span>/</span>
				<span className="hover:text-gray-500 duration-300 cursor-pointer">
					Default
				</span>
			</div>
			<div className="flex items-center gap-x-5">
				<div className="relative">
					<FaSearch
						className={`absolute top-3.5 left-2 hover:text-gray-600 duration-300 ${
							isDarkMode ? "text-zinc-300 fade-in" : "text-zinc-400 fade-out"
						}`}
					/>
					<input
						type="text"
						placeholder="Search"
						className={`pl-8 py-2 border rounded-lg w-15 
                            ${
															isDarkMode
																? "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-600 fade-in duration-100"
																: "bg-[#f8f9fb] hover:bg-zinc-200 text-black border-zinc-300 fade-out duration-100"
														}`}
					/>
				</div>
				{isDarkMode ? (
					<GoSun
						onClick={toggleDarkMode}
						className="cursor-pointer hover:text-gray-400 duration-300"
					/>
				) : (
					<GoSun
						onClick={toggleDarkMode}
						className="cursor-pointer hover:text-gray-400 duration-300"
					/>
				)}
				<FaClockRotateLeft
					onClick={handleClockClick}
					className={`cursor-pointer hover:text-gray-400 duration-300 ${
						rotate ? "rotate-animation" : ""
					}`}
					style={{ fontSize: "16px" }}
				/>
				<FaRegBell
					onClick={handleBellClick}
					className={`cursor-pointer hover:text-gray-400 duration-300 ${
						animate ? "animate-bell" : ""
					}`}
					style={{ fontSize: "16px" }}
				/>
				<div>
					{isRightClose ? (
						<LuPanelLeftClose
							className="hover:text-gray-400 fade-in"
							onClick={() => setIsRightClose(false)}
						/>
					) : (
						<LuPanelRightClose
							className="hover:text-gray-400 fade-in"
							onClick={() => setIsRightClose(true)}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
