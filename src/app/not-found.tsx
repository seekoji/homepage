"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, HomeIcon } from "./components/icons";
import Button from "./components/ui/button";

export default function NotFound() {
	const router = useRouter();

	return (
		<main className="pt-[280px] mb-20">
			<div className="flex justify-center">
				<div>
					<h1 className="text-[--accent] text-4xl font-medium mb-6">
						404 not found
					</h1>
					<div className="flex items-center space-x-3">
						<Button
							onClick={() => router.back()}
							label="back"
							icon={<ArrowLeft />}
							size="fullWidth"
						/>
						<Link href="/">
							<Button
								icon={<HomeIcon />}
								iconPosition="center"
								size="small"
							/>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
