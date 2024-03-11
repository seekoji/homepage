"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, HomeIcon } from "./components/icons";

export default function NotFound() {
	const router = useRouter();

	const backButton = (
		<button
			onClick={() => router.back()}
			className="text-[--text-accent] bg-[--bg-main_dark] hover:bg-[--btn-hover_dark] flex flex-grow transition text-[--accent] py-3 px-6 rounded-xl"
		>
			<ArrowLeft />
			Back
		</button>
	);

	const homeButton = (
		<Link href={"/"}>
			<span className="text-[--text-accent] bg-[--bg-main_dark] hover:bg-[--btn-hover_dark] flex transition text-[--accent] py-[13.3px] px-3 rounded-xl">
				<HomeIcon />
			</span>
		</Link>
	);

	return (
		<main className="pt-[280px] mb-20">
			<div className="flex justify-center">
				<div className="">
					<h1 className="text-[--text-accent] text-4xl font-medium mb-6">
						404 Not Found
					</h1>
					<div className="flex items-center space-x-3">
						{backButton}
						{homeButton}
					</div>
				</div>
			</div>
		</main>
	);
}
