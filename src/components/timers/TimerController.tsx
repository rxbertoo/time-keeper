import {useTimer} from "../../hooks/useTimer.ts";
import {Button} from "../Button.tsx";

export const TimerController = () => {
    const {start, pause, reset, running} = useTimer();

    return (
        <section className="flex flex-row items-center justify-center gap-4 sm:gap-6 z-10">
            <Button
                onClick={pause}
                variant="secondary"
            >
                Pausar
            </Button>
            <Button
                onClick={running ? reset : start}
                variant="primary"
            >
                {running ? 'Reiniciar' : 'Iniciar'}
            </Button>
        </section>
    );
};

