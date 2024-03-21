"use client";

import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { HomeIcon, ProjectsIcon } from "./icons";
import LottieLogo from "../../../public/LottieLogo.json";
import { motion } from "framer-motion";

const lottieStyle = {
	height: 32,
};

interface TabProps {
	href: string;
	icon: React.ReactNode;
	label: string;
}

const tabs = [
	{
		href: "/",
		icon: <HomeIcon />,
		label: "home",
	},
	{
		href: "/projects",
		icon: <ProjectsIcon />,
		label: "projects",
	},
];

const NavBar: React.FC = () => {
	const path = usePathname();
	const Tab: React.FC<TabProps> = ({ href, icon, label }) => (
		<Link href={href}>
			<div
				className={`flex items-center text-[--text-accent] hover:bg-[--nav-hover_dark] rounded-xl py-2 px-4 transition relative`}
			>
				<div className="flex items-center z-10">
					<span className="max-[370px]:mr-0 mr-2 pb-1">{icon}</span>
					<span className="text-2xl font-medium max-[370px]:hidden">
						{label}
					</span>
				</div>

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
				<div className="flex items-center justify-between w-full max-[650px]:justify-center">
					<div className="flex items-center max-[650px]:hidden">
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
				</div>
			</div>
		</main>
	);
};

export default NavBar;
