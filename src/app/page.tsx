import Image from "next/image";
import LogoImage from "../../public/logo.png";
import { TgIcon, GithubIcon, SteamIcon, TwitchIcon } from "./components/icons";

interface ExternalLinkProps {
	href: string;
	icon: React.ReactNode;
	label: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, icon, label }) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="flex justify-center items-center w-full pl-5 px-3 py-3 rounded-xl bg-[--main] hover:bg-[#141413] transition"
	>
		<span>{icon}</span>
		<span className="text-[--accent] font-regular ml-5 flex-grow">
			{label}
		</span>
	</a>
);

const socialLinks = [
	{ href: "https://t.me/bxblx", icon: <TgIcon />, label: "Telegram" },
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
		<main className="flex justify-center mt-10">
			<div className="mt-10">
				<div className="w-[200px] h-[200px]">
					<Image
						src={LogoImage}
						alt="Logo"
						className="rounded-full"
					/>
				</div>
				<h1 className="text-[--accent] text-3xl font-medium text-center mt-6">
					seekoji
				</h1>
				<h3 className="text-[#6B6B64] text-lg font-regular text-center">
					trying web
				</h3>
				<div className="grid gap-y-3 mt-6">
					{socialLinks.map(({ href, icon, label }) => (
						<ExternalLink
							key={href}
							href={href}
							icon={icon}
							label={label}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
