import { type ReactNode, useRef, useState } from "react";
import { TimerContext } from "../context/TimerContext.tsx";
import type { Time } from "../models/Time.ts";

interface TimerProviderProps {
    children: ReactNode,
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
    const [time, setTime] = useState<Time>({ seconds: '00', minutes: '00', milliseconds: '00' });
    const [running, setRunning] = useState<boolean>(false);
    const intervalRef = useRef<number>(0);
    const elapsedTimeRef = useRef<number>(0);
    const startTimeRef = useRef<number>(0);

    // Format the time values to ensure they are always two digits.
    const format = (value: number) => String(value).padStart(2, '0');

    // Update state based on elapsed milliseconds
    const updateDisplay = (elapsed: number) => {
        const totalSeconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = Math.floor((elapsed % 1000) / 10);

        if (minutes >= 60) {
            pause();
            return;
        }

        setTime({
            seconds: format(seconds),
            minutes: format(minutes),
            milliseconds: format(milliseconds)
        });
    };

    const [isResetting, setIsResetting] = useState<boolean>(false);
    const resetTimeoutRef = useRef<number>(0);

    // Start or resume the timer
    const start = () => {
        if (running || isResetting) return;

        startTimeRef.current = Date.now() - elapsedTimeRef.current;

        intervalRef.current = window.setInterval(() => {
            const currentElapsed = Date.now() - startTimeRef.current;
            elapsedTimeRef.current = currentElapsed;
            updateDisplay(currentElapsed);
        }, 10);

        setRunning(true);
    };

    // Reset the timer to 00:00:00 with smooth animation transition
    const reset = () => {
        if (isResetting) return;
        setIsResetting(true);

        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = 0;
        }

        // Switch to 00:00:00 at midpoint while digits are invisible
        window.setTimeout(() => {
            elapsedTimeRef.current = 0;
            setTime({ seconds: '00', minutes: '00', milliseconds: '00' });
        }, 160);

        resetTimeoutRef.current = window.setTimeout(() => {
            setRunning(false);
            setIsResetting(false);
        }, 350);
    };


    // Pause the timer and clear the interval.
    const pause = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = 0;
        }
        setRunning(false);
    };

    const isReset = !running && elapsedTimeRef.current === 0;
    const isPaused = !running && elapsedTimeRef.current > 0;

    return (
        <TimerContext.Provider value={{ start, pause, reset, time, running, isPaused, isReset, isResetting }}>
            {children}
        </TimerContext.Provider>
    );
};

