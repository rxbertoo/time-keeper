import { useEffect } from "react";
import { useTimer } from "../../hooks/useTimer.ts";
import { DigitDisplay } from "../digits/DigitDisplay.tsx";

export const TimerDisplay = () => {
    const { time, running, isReset, isResetting } = useTimer();

    useEffect(() => {
        if (!time) return;
        if (isReset && !running) {
            document.title = 'Cronómetro';
        } else {
            document.title = `${time.minutes}:${time.seconds} - Cronómetro`;
        }
    }, [time, running, isReset]);

    return (
        <section
            className={`flex items-baseline justify-center font-light text-black-primary select-none ${isResetting ? "animate-digits-reset" : ""
                }`}
        >
            <DigitDisplay
                time={time?.minutes}
                className="text-5xl sm:text-7xl md:text-8xl"
            />
            <span className="text-3xl sm:text-5xl md:text-6xl text-neutral-400 font-extralight px-0.5 sm:px-1">
                :
            </span>
            <DigitDisplay
                time={time?.seconds}
                className="text-5xl sm:text-7xl md:text-8xl"
            />
            <span className="text-2xl sm:text-4xl md:text-5xl text-neutral-400 font-light px-0.5 sm:px-1">
                :
            </span>
            <DigitDisplay
                time={time?.milliseconds}
                className="text-3xl sm:text-5xl md:text-6xl text-neutral-500 font-normal"
            />
        </section>
    );
};

