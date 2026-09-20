import { useTimer } from "../../hooks/useTimer.ts";
import { Button } from "../Button.tsx";

export const TimerController = () => {
    const { start, pause, reset, running, isPaused, isResetting } = useTimer();

    const showReset = (running || isPaused) && !isResetting;

    return (
        <section className="flex flex-row items-center justify-center z-10">
            {/* Play / Resume Button: Iniciar or Reanudar */}
            {!running && (
                <Button
                    onClick={start}
                    variant="primary"
                    title={isPaused ? "Reanudar" : "Iniciar"}
                    ariaLabel={isPaused ? "Reanudar" : "Iniciar"}
                    icon={
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                            <polygon
                                points="7 6, 17 12, 7 18"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    }
                />
            )}

            {/* Pause Button: ONLY shown when running */}
            {running && (
                <Button
                    onClick={pause}
                    variant="primary"
                    title="Pausar"
                    ariaLabel="Pausar"
                    icon={
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                            <rect x="6.5" y="5" width="3.5" height="14" rx="1.75" />
                            <rect x="14" y="5" width="3.5" height="14" rx="1.75" />
                        </svg>
                    }
                />
            )}

            {/* Reset Button Container with smooth enter & exit animation */}
            <div
                className={`transition-all duration-350 ease-out overflow-hidden flex items-center justify-center ${showReset
                    ? "w-13 sm:w-14 ml-4 sm:ml-5 opacity-100 scale-100 pointer-events-auto"
                    : "w-0 ml-0 opacity-0 scale-0 pointer-events-none"
                    }`}
            >
                <Button
                    onClick={reset}
                    variant="secondary"
                    title="Reiniciar"
                    ariaLabel="Reiniciar"
                    icon={
                        <svg
                            className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-350 ease-out ${isResetting ? "rotate-[-360deg]" : ""
                                }`}

                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                    }
                />
            </div>
        </section>
    );
};






