"use client";

import Image from "next/image";
import LogoImage from "../../public/logo.png";
import {
	TgIcon,
	GithubIcon,
	SteamIcon,
	TwitchIcon,
} from "@/app/components/icons";
import { SectionTransition, StaggerTransition } from "./components/transition";

interface ExternalLinkProps {
	href: string;
	icon: React.ReactNode;
	label: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, icon, label }) => (
	<main>
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex justify-center items-center text-[--text-accent] bg-[--bg-main_dark] hover:bg-[--btn-hover_dark] w-full pl-5 px-3 py-3 rounded-xl transition"
		>
			<span>{icon}</span>
			<span className="font-regular ml-5 flex-grow">{label}</span>
		</a>
	</main>
);

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
								<ExternalLink
									key={href}
									href={href}
									icon={icon}
									label={label}
								/>
							</SectionTransition>
						))}
					</div>
				</StaggerTransition>
			</div>
		</main>
	);
}
