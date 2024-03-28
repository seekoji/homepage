"use client";

import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/logo.png";
import {
	TgIcon,
	GithubIcon,
	SteamIcon,
	TwitchIcon,
} from "@/app/components/icons";
import Button from "./components/ui/button";
import { SectionTransition, StaggerTransition } from "./components/transition";

const socialLinks = [
	{ href: "https://t.me/seekoji", icon: <TgIcon />, label: "Telegram" },
	{
		href: "https://github.com/seekoji",
		icon: <GithubIcon />,
		label: "Github",
	},
	{
		href: "https://steamcommunity.com/id/seekoji/",
		icon: <SteamIcon />,
		label: "Steam",
	},
	{
		href: "https://www.twitch.tv/seekoji",
		icon: <TwitchIcon />,
		label: "Twitch",
	},
];

export default function Home() {
	return (
		<main className="flex justify-center mt-20 h-[670px]">
			<div>
				<div className="w-[200px] h-[200px]">
					<Image
						src={LogoImage}
						alt="Logo"
						className="rounded-full"
					/>
				</div>
				<h1 className="text-[--text-accent] text-3xl font-medium text-center mt-6">
					seekoji
				</h1>
				<h3 className="text-[#6B6B64] text-lg font-regular text-center">
					trying web
				</h3>
				<StaggerTransition key="social-links">
					<div className="grid gap-y-3 mt-6">
						{socialLinks.map(({ href, icon, label }) => (
							<SectionTransition key={href}>
								<Link href={href}>
									<Button
										key={href}
										icon={icon}
										label={label}
										size="fullWidth"
									/>
								</Link>
							</SectionTransition>
						))}
					</div>
				</StaggerTransition>
			</div>
		</main>
	);
}
