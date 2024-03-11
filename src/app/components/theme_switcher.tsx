import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
	const checkTheme = () => {
		const storedTheme = window.localStorage.getItem("prefered-theme");
		if (storedTheme === "darkTheme") {
			return true;
		}
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return true;
		}
		return false;
	};

	const [isLight, setIsLight] = useState(checkTheme());

	useEffect(() => {
		const root = window.document.documentElement;
		if (isLight) {
			root.removeAttribute("class");
		} else {
			root.classList.add("dark");
		}
	}, [isLight]);

	const setLightTheme = () => {
		setIsLight(true);
		window.localStorage.setItem("prefered-theme", "lightTheme");
	};

	const setDarkTheme = () => {
		setIsLight(false);
		window.localStorage.setItem("prefered-theme", "darkTheme");
	};

	return (
		<div className="theme-switcher">
			<button onClick={setLightTheme}>Light theme</button>
			<button onClick={setDarkTheme}>Dark theme</button>
		</div>
	);
}
