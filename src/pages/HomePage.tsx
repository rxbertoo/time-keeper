import { TimerProvider } from "../providers/TimerProvider.tsx";
import { TimerDisplay } from "../components/timers/TimerDisplay.tsx";
import { TimerController } from "../components/timers/TimerController.tsx";
import { CircleAnimation } from "../components/animation/CircleAnimation.tsx";

export const HomePage = () => {
    return (
        <TimerProvider>
            <main className="relative flex flex-col items-center justify-center min-h-[100dvh] w-full overflow-hidden bg-[#F5F5F7] select-none p-4">
                <div className="relative flex flex-col items-center justify-center my-auto">

                    <div className="relative flex items-center justify-center w-[min(88vw,340px)] h-[min(88vw,340px)] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px]">
                        <CircleAnimation />
                        <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6">
                            <TimerDisplay />
                            <TimerController />
                        </div>
                    </div>
                </div>
            </main>
        </TimerProvider>
    );
};
