"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { HomeIcon, ProjectsIcon } from "./icons";
import LottieLogo from "../../../public/LottieLogo.json";
import dynamic from "next/dynamic";

const DynamicThemeSwitcher = dynamic(
	() => import("@/app/components/theme_switcher"),
	{
		ssr: false,
	}
);
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
						path === href ? "--nav-selected" : ""
					} flex text-[--accent] --nav-hover rounded-xl py-2 px-4 transition`}
				>
					{children}
				</div>
			</div>
		</Link>
	);

	return (
		<main>
			<div className="flex --bg-main w-full h-20 rounded-2xl px-4">
				<div className="flex items-center justify-between w-full max-[718px]:justify-center">
					<div className="flex items-center max-[718px]:hidden">
						<Link href="/">
							<div className="flex ml-4">
								<div className="mr-2 pt-1">
									<Lottie
										style={lottieStyle}
										animationData={LottieLogo}
									/>
								</div>
								<h1 className="--accent --text-accent-hover text-3xl font-medium transition">
									seekoji
								</h1>
							</div>
						</Link>
						<a
							href="https://github.com/seekoji/homepage"
							target="_blank"
							className="--badge rounded-full px-4 py-1 ml-4 text-sm transition"
						>
							source
						</a>
					</div>
					<div className="--accent flex items-center text-2xl font-medium h-full">
						<div className="border-r-2 dark:border-[--nav-selected_dark] mr-4">
							<DynamicThemeSwitcher />
						</div>
						<NavLink href="/">
							<div className="max-[475px]:mr-0 mr-2 pb-1 pt-1">
								<HomeIcon />
							</div>
							<span className="max-[475px]:hidden">home</span>
						</NavLink>
						<NavLink href="/projects">
							<div className="max-[475px]:mr-0 mr-2 pb-1 pt-1">
								<ProjectsIcon />
							</div>
							<span className="max-[475px]:hidden">projects</span>
						</NavLink>
					</div>
				</div>
			</div>
		</main>
	);
}
