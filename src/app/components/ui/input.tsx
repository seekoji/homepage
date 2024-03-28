import React from "react";

interface ButtonProps {
	label?: string;
	id?: string;
	name?: string;
	minlength?: number;
	maxlength?: number;
	placeholder?: string;
	type?:
		| "text"
		| "checkbox"
		| "color"
		| "date"
		| "email"
		| "file"
		| "number"
		| "password"
		| "radio"
		| undefined;
	disabled?: boolean;
	size?: "small" | "fullWidth";
	variant?: "primary" | "secondary" | "tertiary";
}

const Input: React.FC<ButtonProps> = ({
	label,
	id,
	name,
	minlength,
	maxlength,
	placeholder,
	type,
	disabled,
	size,
	variant,
}) => {
	return (
		<input
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			className={`
            ${
				type === "text" || type === "password"
					? "outline-none placeholder:text-[--placeholder_dark] placeholder:text-sm text-[--text-accent] bg-[--input-bg_dark] hover:bg-[--input-hover_dark] focus:bg-[--input-focused_dark] border-[1px] border-[--input-outline_dark] transition h-12 px-5 rounded-xl"
					: ""
			}
            ${size ? "w-full" : ""}
		${size === "small" ? "px-[12px]" : ""}
    `}
			disabled={disabled}
		/>
	);
};

export default Input;
