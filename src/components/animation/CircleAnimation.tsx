import { useTimer } from "../../hooks/useTimer.ts";

export const CircleAnimation = () => {
    const { running, isReset, isResetting } = useTimer();

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {/* Base circle with pulse animation on reset */}
            <div
                className={`w-full h-full rounded-full border-2 border-neutral-300/70 ${isResetting ? "animate-circle-reset" : ""
                    }`}
            />

            {/* Rotating progress arc that smoothly dissolves during reset */}
            <div
                className={`absolute w-full h-full rounded-full border-2 border-transparent border-t-black-primary border-r-black-primary transition-all duration-300 ease-out ${isResetting
                    ? "opacity-0 scale-95"
                    : isReset && !running
                        ? "opacity-100"
                        : "animate-spin-slow opacity-100"
                    }`}
                style={{
                    animationPlayState: running ? "running" : "paused",
                }}
            />
        </div>
    );
};


