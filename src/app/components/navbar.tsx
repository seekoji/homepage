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
						path === href ? "bg-[#1d1d1a]" : ""
					} flex text-[--accent] hover:bg-[#121210] rounded-xl py-2 px-4 transition`}
				>
					{children}
				</div>
			</div>
		</Link>
	);

	return (
		<main>
			<div className="flex bg-[--main] w-full h-20 rounded-2xl px-4">
				<div className="flex items-center justify-between w-full max-[640px]:justify-center">
					<div className="flex items-center max-[640px]:hidden">
						<Link href="/">
							<div className="flex ml-4">
								<div className="mr-2 pt-1">
									<Lottie
										style={lottieStyle}
										animationData={LottieLogo}
									/>
								</div>
								<h1 className="text-[--accent] text-3xl font-medium hover:text-[#e7dcc3] transition">
									seekoji
								</h1>
							</div>
						</Link>
						<a
							href="https://github.com/seekoji/homepage"
							target="_blank"
							className="bg-[#181816] rounded-full px-4 py-[0.8px] ml-4 hover:bg-[#22221f] transition"
						>
							<span className="text-[#888580] text-sm">
								source
							</span>
						</a>
					</div>
					<div className="flex items-center text-2xl font-medium h-full">
						<NavLink href="/">
							<div className="mr-2 pb-1 pt-1">
								<HomeIcon />
							</div>
							home
						</NavLink>
						<NavLink href="/projects">
							<div className="mr-2 pb-1 pt-1">
								<ProjectsIcon />
							</div>
							projects
						</NavLink>
					</div>
				</div>
			</div>
		</main>
	);
}
