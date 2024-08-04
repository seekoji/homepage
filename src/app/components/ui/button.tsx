import React from "react";

interface ButtonProps {
	label?: string;
	textCenter?: boolean;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	size?: "small" | "fullWidth";
	icon?: React.ReactNode;
	iconPosition?: "left" | "center" | "right";
}

const Button: React.FC<ButtonProps> = ({
	label,
	textCenter = false,
	onClick,
	type = "button",
	disabled = false,
	size = "fullWidth",
	icon,
	iconPosition = "left",
}) => {
	const buttonClasses = `
    flex items-center text-[--accent] bg-[--btn-bg] hover:bg-[--btn-hover] transition h-12 rounded-xl
    ${size === "fullWidth" ? "w-full px-5" : size === "small" ? "px-3" : ""}
    ${iconPosition === "right" ? "flex-row-reverse" : ""}
    ${textCenter ? "justify-center" : "justify-start"}
  `;

	const iconClasses = `
    ${iconPosition === "right" ? "ml-4" : "mr-4"}
	${iconPosition === "center" ? "mr-0" : "mr-4"}
    ${textCenter ? "ml-0" : ""}
  `;

	return (
		<button
			className={buttonClasses}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{icon && <span className={iconClasses}>{icon}</span>}
			{label && <span>{label}</span>}
		</button>
	);
};

export default Button;
