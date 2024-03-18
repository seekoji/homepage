"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { HomeIcon, ProjectsIcon } from "./icons";
import LottieLogo from "../../../public/LottieLogo.json";
import React from "react";

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

export default function NavBar() {
	const path = usePathname();
	const Tab: React.FC<TabProps> = ({ href, icon, label }) => (
		<Link
			href={href}
			className={`${
				path === href ? "bg-[--nav-selected_dark]" : ""
			} flex items-center transition text-[--text-accent] hover:bg-[--nav-hover_dark] rounded-xl py-2 px-4 transition"`}
		>
			<span className="max-[370px]:mr-0 mr-2 pb-1">{icon}</span>
			<span className="text-2xl font-medium max-[370px]:hidden">
				{label}
			</span>
		</Link>
	);

	return (
		<main>
			<div className="flex bg-[--bg-main_dark] w-full h-20 rounded-2xl px-4">
				<div className="flex items-center justify-between w-full max-[630px]:justify-center">
					<div className="flex items-center max-[630px]:hidden">
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
}
