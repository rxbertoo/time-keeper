import { useTimer } from "../../hooks/useTimer.ts";

export const CircleAnimation = () => {
    const { running, time } = useTimer();

    const isReset = !time || (time.minutes === '00' && time.seconds === '00' && time.milliseconds === '00');

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div className="w-full h-full rounded-full border-2 border-neutral-300/70" />
            <div
                className="absolute w-full h-full rounded-full border-2 border-transparent border-t-black-primary border-r-black-primary"
                style={{
                    animation: isReset && !running ? "none" : "spin 2.5s linear infinite",
                    animationPlayState: running ? "running" : "paused",
                }}
            />
        </div>
    );
};

