"use client";

import { motion, AnimatePresence, stagger } from "framer-motion";
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
};

const section = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
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
				transition={{ type: "easeOut", duration: 0.2 }}
				className="overflow-hidden"
			>
				<FrozenRouter>{children}</FrozenRouter>
			</motion.div>
		</AnimatePresence>
	);
};

export const NavTransition = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial="hidden"
			animate="enter"
			variants={navbar}
			transition={{ type: "easeInOut", duration: 0.3 }}
		>
			{children}
		</motion.div>
	);
};

export const SectionTransition = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			transition={{ type: "easeInOut", duration: 0.2 }}
			variants={section}
		>
			{children}
		</motion.div>
	);
};

export const StaggerTransition = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			variants={section}
			initial="hidden"
			animate="enter"
			transition={{ staggerChildren: 0.1, type: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
};
