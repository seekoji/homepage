"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, HomeIcon } from "./components/icons";
import Button from "./components/button";

export default function NotFound() {
	const router = useRouter();

	const backButton = (
		<Button
			onClick={() => router.back()}
			label="back"
			icon={<ArrowLeft />}
			size="fullWidth"
		/>
	);

	const homeButton = (
		<Link href="/">
			<Button icon={<HomeIcon />} size="small" />
		</Link>
	);

	return (
		<main className="pt-[280px] mb-20">
			<div className="flex justify-center">
				<div className="">
					<h1 className="text-[--text-accent] text-4xl font-medium mb-6">
						404 not found
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
