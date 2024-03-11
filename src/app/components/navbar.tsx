"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { HomeIcon, ProjectsIcon } from "./icons";
import LottieLogo from "../../../public/LottieLogo.json";

const lottieStyle = {
	height: 32,
};

export default function NavBar() {
	const path = usePathname();

	const NavLink = ({ href, children }: any) => (
		<Link href={href}>
			<div className="flex items-center h-20">
				<div
					className={`${
						path === href ? "bg-[--nav-selected_dark]" : ""
					} flex text-[--text-accent] hover:bg-[--nav-hover_dark] rounded-xl py-2 px-4 transition`}
				>
					{children}
				</div>
			</div>
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
					<div className="--accent flex items-center text-2xl font-medium h-full">
						{/* <div className="border-r-2 dark:border-[--nav-selected_dark] mr-4">
							<DynamicThemeSwitcher />
						</div> */}
						<NavLink href="/">
							<div className="max-[370px]:mr-0 mr-2 pb-1 pt-1">
								<HomeIcon />
							</div>
							<span className="max-[370px]:hidden">home</span>
						</NavLink>
						<NavLink href="/projects">
							<div className="max-[370px]:mr-0 mr-2 pb-1 pt-1">
								<ProjectsIcon />
							</div>
							<span className="max-[370px]:hidden">projects</span>
						</NavLink>
					</div>
				</div>
			</div>
		</main>
	);
}
