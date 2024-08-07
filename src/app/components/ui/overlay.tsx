"use client";

import React, { useState, useEffect } from "react";

const Overlay = () => {
	const [showOverlay, setShowOverlay] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrollable =
				document.documentElement.scrollHeight >
				document.documentElement.clientHeight;

			setShowOverlay(isScrollable);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	if (!showOverlay) return null;

	return (
		<div className="absolute z-0">
			<div className="bg-gradient-to-b from-[--overlay] from-5% to-transparent h-20 w-full fixed top-0"></div>
			<div className="bg-gradient-to-t from-[--overlay] from-5% to-transparent h-20 w-full fixed bottom-0"></div>
		</div>
	);
};

export default Overlay;
