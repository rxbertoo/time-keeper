import { createContext } from "react";
import type { Time } from "../models/Time.ts";

export interface TimerContextType {
    start: () => void;
    pause: () => void;
    reset: () => void;
    time: Time | null;
    running: boolean;
    isPaused: boolean;
    isReset: boolean;
    isResetting: boolean;
}

export const TimerContext = createContext<TimerContextType | null>(null);

