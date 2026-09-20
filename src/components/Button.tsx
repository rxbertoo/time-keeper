import type { ReactNode } from "react";

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'pause';
    icon?: ReactNode;
    title?: string;
    ariaLabel?: string;
}

export const Button = ({
    children,
    onClick,
    className = "",
    variant = "primary",
    icon,
    title,
    ariaLabel
}: ButtonProps) => {
    const isIconOnly = !children && Boolean(icon);

    const baseStyles = isIconOnly
        ? "w-13 h-13 sm:w-14 sm:h-14 p-0 rounded-full inline-flex items-center justify-center cursor-pointer select-none transition-all duration-200 ease-out hover:scale-105 active:scale-90 outline-none focus:outline-none ring-0"
        : "inline-flex items-center justify-center gap-2 font-medium text-xs sm:text-sm px-5 py-2.5 h-10 rounded-full cursor-pointer select-none transition-all duration-200 ease-out hover:scale-105 active:scale-95 tracking-wide outline-none focus:outline-none ring-0";

    const variantStyles = variant === "secondary"
        ? "bg-white text-neutral-800 border-2 border-neutral-300/70 hover:bg-neutral-100"
        : "bg-[#141414] text-white border-0 hover:bg-[#2D2D2D]";






    return (
        <button
            type="button"
            title={title}
            aria-label={ariaLabel || title}
            className={`${baseStyles} ${variantStyles} ${className}`}
            onClick={onClick}
        >
            {icon}
            {children}
        </button>
    );
};





