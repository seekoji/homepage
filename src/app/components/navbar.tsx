"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HomeIcon, ProjectsIcon } from "./icons";
import LottieLogo from "../../../public/LottieLogo.json";

const lottieStyle = {
	height: 32,
};

interface TabProps {
	href: string;
	icon: React.ReactNode;
	label: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const tabs = [
	{ href: "/", icon: <HomeIcon />, label: "home" },
	{ href: "/projects", icon: <ProjectsIcon />, label: "projects" },
];

const NavBar: React.FC = () => {
	const path = usePathname();
	const ref = useRef(0);

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 650);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const Tab: React.FC<TabProps> = ({ href, icon, label, onClick }) => (
		<Link href={href}>
			<div
				className={`flex items-center text-[--text-accent] hover:bg-[--nav-hover_dark] rounded-xl py-2 px-4 transition relative`}
			>
				<motion.div
					key={ref.current}
					initial={{ scale: 1, opacity: 1 }}
					animate={
						path === href
							? ref.current === 0
								? {}
								: { scale: [0.9, 1], opacity: [0, 1] }
							: {}
					}
					whileTap={{ scale: 0.98 }}
					transition={{
						type: "spring",
					}}
					onClick={(e) => {
						onClick && onClick(e);
						ref.current++;
					}}
					className="flex items-center z-10"
				>
					<span className="max-[370px]:mr-0 mr-2 pb-1">{icon}</span>
					<span className="text-2xl font-medium max-[370px]:hidden">
						{label}
					</span>
				</motion.div>

				{path === href && (
					<motion.div
						transition={{
							type: "easeInOut",
							duration: 0.2,
						}}
						layoutId="underline"
						className="absolute z-1 left-0 top-0 bg-[--nav-selected_dark] rounded-xl w-full h-full"
					/>
				)}
			</div>
		</Link>
	);

	return (
		<main>
			<div className="flex bg-[--bg-main_dark] w-full h-20 rounded-2xl px-4">
				<motion.div
					key={isMobile ? "mobile" : "desktop"}
					initial={{ scale: 1, opacity: 1 }}
					animate={{
						scale: isMobile ? [0.9, 1] : [0.9, 1],
						opacity: [0, 1],
					}}
					transition={{
						type: "spring",
					}}
					className={`flex items-center ${
						isMobile ? "justify-center" : "justify-between"
					} w-full`}
				>
					<div
						className={`flex items-center ${
							isMobile ? "hidden" : ""
						}`}
					>
						<Link href="/">
							<div className="flex ml-4">
								<div className="mr-2 pt-1">
									<Lottie
										style={lottieStyle}
										animationData={LottieLogo}
									/>
								</div>
								<h1 className="text-[--text-accent] hover:text-[--text-accent-hover_dark] text-3xl font-medium transition">
									seekoji
								</h1>
							</div>
						</Link>
						<a
							href="https://github.com/seekoji/homepage"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[--badge-bg_dark] hover:bg-[--badge-hover_dark] text-[--badge-text_dark] rounded-full px-4 py-1 ml-4 text-sm transition"
						>
							source
						</a>
					</div>
					<div className="flex">
						{tabs.map(({ href, icon, label }) => (
							<Tab
								key={href}
								href={href}
								icon={icon}
								label={label}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default NavBar;
