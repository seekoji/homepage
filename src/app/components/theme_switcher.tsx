import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "./icons";
import { AnimatePresence, motion } from "framer-motion";

function ThemeSwitcher() {
	const storedTheme = window.localStorage.getItem("prefered-theme");
	const checkTheme = () => {
		if (storedTheme === "darkTheme") {
			return false;
		}
		return true;
	};
	const [isLight, setIsLight] = useState(checkTheme);
	function setLightTheme() {
		setIsLight(false);
		window.localStorage.setItem("prefered-theme", "lightTheme");
	}
	function setDarkTheme() {
		setIsLight(true);
		window.localStorage.setItem("prefered-theme", "darkTheme");
	}
	useEffect(() => {
		const setTheme = () => {
			const root = window.document.documentElement;
			const operatingSystemThemeDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			);
			if (
				storedTheme === "darkTheme" &&
				operatingSystemThemeDark.matches
			) {
				root.classList.add("dark");
			}
			if (storedTheme === "darkTheme") {
				root.classList.add("dark");
			}
			if (storedTheme === "lightTheme") {
				root.classList.remove("dark");
			}
		};
		setTheme();
		console.log(`${storedTheme} selected`);
	}, [storedTheme]);
	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={isLight ? "light" : "dark"}
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<div className="items-center">
					<button
						type="button"
						className={`dark-mode-switch cursor-pointer w-12 h-10
        ${!isLight && "hidden"}`}
						onClick={setDarkTheme}
					>
						<MoonIcon />
					</button>
					<button
						type="button"
						className={`light-mode-switch cursor-pointer w-12 h-10
         ${isLight && "hidden"}`}
						onClick={setLightTheme}
					>
						<SunIcon />
					</button>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
export default ThemeSwitcher;
