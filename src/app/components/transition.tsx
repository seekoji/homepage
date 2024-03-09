"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
	const context = useContext(LayoutRouterContext ?? {});
	const frozen = useRef(context).current;

	return (
		<LayoutRouterContext.Provider value={frozen}>
			{props.children}
		</LayoutRouterContext.Provider>
	);
}

const page = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 20 },
};

const navbar = {
	hidden: { opacity: 0, x: 0, y: -20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 20 },
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const key = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={key}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={page}
				transition={{ type: "easeOut", duration: 0.4 }}
				className="overflow-hidden"
			>
				<FrozenRouter>{children}</FrozenRouter>
			</motion.div>
		</AnimatePresence>
	);
};

export const NavTransition = ({ children }: { children: React.ReactNode }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={navbar}
				transition={{ type: "easeInOut", duration: 0.4 }}
				className="overflow-hidden"
			>
				<FrozenRouter>{children}</FrozenRouter>
			</motion.div>
		</AnimatePresence>
	);
};
