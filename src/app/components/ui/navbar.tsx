"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HomeIcon, ProjectsIcon } from "../icons";
import LottieLogo from "../../../../public/LottieLogo.json";

const lottieStyle = { height: 32 };

const tabs = [
	{ href: "/", icon: <HomeIcon />, label: "home" },
	{ href: "/projects", icon: <ProjectsIcon />, label: "projects" },
];

interface TabProps {
	href: string;
	icon: React.ReactNode;
	label: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Tab: React.FC<TabProps> = ({ href, icon, label, onClick }) => {
	const path = usePathname();
	const ref = useRef(0);

	return (
		<Link href={href}>
			<div
				className="flex items-center text-[--accent] hover:bg-[--nav-hover] rounded-xl h-12 px-4 transition relative"
				onClick={(e) => {
					if (onClick) onClick(e);
					ref.current++;
				}}
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
					transition={{ type: "spring" }}
					className="flex items-center z-10"
				>
					<span className="max-[370px]:mr-0 mr-2 pb-1">{icon}</span>
					<span className="text-2xl font-medium max-[370px]:hidden">
						{label}
					</span>
				</motion.div>

				{path === href && (
					<motion.div
						transition={{ type: "easeInOut", duration: 0.2 }}
						layoutId="underline"
						className="absolute z-1 left-0 top-0 bg-[--nav-selected] rounded-xl w-full h-full"
					/>
				)}
			</div>
		</Link>
	);
};

const NavBar: React.FC = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 650);
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<main>
			<div className="flex bg-[--bg-secondary] w-full h-20 rounded-3xl px-4">
				<motion.div
					key={isMobile ? "mobile" : "desktop"}
					initial={false}
					animate={{
						scale: isMobile ? [0.9, 1] : [0.9, 1],
						opacity: [0, 1],
					}}
					transition={{ type: "easeInOut" }}
					className={`flex items-center ${
						isMobile ? "justify-center" : "justify-between"
					} w-full`}
				>
					{!isMobile && (
						<div className="flex items-center">
							<Link href="/">
								<div className="flex ml-4">
									<div className="mr-2 pt-1">
										<Lottie
											style={lottieStyle}
											animationData={LottieLogo}
										/>
									</div>
									<h1 className="text-[--accent] hover:text-[--text-hover] text-3xl font-medium transition">
										seekoji
									</h1>
								</div>
							</Link>
							<a
								href="https://github.com/seekoji/homepage"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[--badge-bg] hover:bg-[--badge-hover] text-[--badge-text] rounded-full px-4 py-1 ml-4 text-sm transition"
							>
								source
							</a>
						</div>
					)}
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
