interface DigitDisplayProps {
    time?: string;
    className?: string;
}

export const DigitDisplay = ({time = "00", className = ""}: DigitDisplayProps) => {
    return (
        <span className={`inline-flex items-center justify-center tabular-nums ${className}`}>
            {time}
        </span>
    );
};