import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Overlay from "./components/overlay";
import { PageTransition, NavTransition } from "./components/transition";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "seekoji",
	description: "seekoji homepage",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<SpeedInsights/>
			<body className={poppins.className}>
				<Overlay />
				<div className="flex justify-center p-4">
					<div className="w-[900px]">
						<div className="sticky top-4 z-40 drop-shadow-2xl">
							<NavTransition>
								<NavBar />
							</NavTransition>
						</div>
						<PageTransition>{children}</PageTransition>
					</div>
				</div>
			</body>
		</html>
	);
}
