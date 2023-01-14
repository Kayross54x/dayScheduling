import { useState, useEffect } from "react";

import Botao from "../Button";
import Relogio from "./Relogio";
import { ITasks } from "../../types/ITask";
import { timeToSeconds } from "../../common/utils/time";

import style from './Cronometro.module.scss';

interface ICronometro {
    selected?: ITasks,
    finishTask: () => void
}

export default function Cronometro({ selected, finishTask }: ICronometro) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) setTime(timeToSeconds(selected.time));
    }, [selected]);

    function counterRegress(counter: number = 0) {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return counterRegress(counter - 1);
            } else {
                finishTask();
            }

            return;
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>

            <div className={style.relogioWrapper}>
                <Relogio time={time}/>
            </div>
            <Botao onClick={() => counterRegress(time)}>
                Começar!
            </Botao>
        </div>
    )
}