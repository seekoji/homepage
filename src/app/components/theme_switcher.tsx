// import React, { useState, useEffect } from "react";
// import { SunIcon, MoonIcon } from "./icons";
// import { AnimatePresence, motion } from "framer-motion";

// function ThemeSwitcher() {
// 	const [isLight, setIsLight] = useState(false);

// 	function setLightTheme() {
// 		setIsLight(true);
// 	}

// 	function setDarkTheme() {
// 		setIsLight(false);
// 	}

// 	useEffect(() => {
// 		const root = window.document.documentElement;

// 		if (isLight === true) {
// 			root.classList.remove("dark");
// 		} else {
// 			root.classList.add("dark");
// 		}
// 	});

// 	return (
// 		<AnimatePresence mode="wait" initial={false}>
// 			<motion.div
// 				key={isLight ? "true" : "dark"}
// 				initial={{ y: -20, opacity: 0 }}
// 				animate={{ y: 0, opacity: 1 }}
// 				exit={{ y: 20, opacity: 0 }}
// 				transition={{ duration: 0.2 }}
// 			>
// 				<div className="items-center">
// 					<button
// 						type="button"
// 						className={`dark-mode-switch cursor-pointer w-12 h-10
//         ${!isLight && "hidden"}`}
// 						onClick={setDarkTheme}
// 					>
// 						<MoonIcon />
// 					</button>
// 					<button
// 						type="button"
// 						className={`light-mode-switch cursor-pointer w-12 h-10
//          ${isLight && "hidden"}`}
// 						onClick={setLightTheme}
// 					>
// 						<SunIcon />
// 					</button>
// 				</div>
// 			</motion.div>
// 		</AnimatePresence>
// 	);
// }
// export default ThemeSwitcher;
