interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary';
}

export const Button = ({children, onClick, className = "", variant = "primary"}: ButtonProps) => {
    const baseStyles = "w-30 sm:w-36 h-10 sm:h-11 inline-flex items-center justify-center font-medium text-sm sm:text-base rounded-md cursor-pointer select-none active:scale-95 transition-all duration-150";

    const variantStyles = variant === "secondary"
        ? "bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 shadow-xs"
        : "bg-black-primary text-white hover:bg-black-secondary shadow-sm";

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
