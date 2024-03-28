import React from "react";

interface ButtonProps {
	label?: string;
	textCenter?: boolean;
	onClick?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
	size?: "small" | "fullWidth";
	variant?: "primary" | "secondary" | "tertiary";
	icon?: React.ReactNode;
	iconPosition?: "left" | "center" | "right";
}

const Button: React.FC<ButtonProps> = ({
	label,
	textCenter,
	onClick,
	type,
	disabled,
	size,
	variant,
	icon,
	iconPosition,
}) => {
	return (
		<button
			className={`
            flex items-center text-[--text-accent] bg-[--bg-main_dark] hover:bg-[--btn-hover_dark] transition h-12 px-5 rounded-xl
        ${size ? "w-full" : ""}
		${size === "small" ? "px-[12px]" : ""}
		${iconPosition === "right" ? "flex-row-reverse" : ""}
		${textCenter ? "justify-center" : ""}
    `}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			<span>{icon}</span>
			{label && (
				<span
					className={`${iconPosition === "right" ? "mr-4" : "ml-4"} 
					${textCenter ? "ml-0" : ""}
					font-regular`}
				>
					{label}
				</span>
			)}
		</button>
	);
};

export default Button;
