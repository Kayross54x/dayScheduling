import style from './Relogio.module.scss';

interface IRelogio {
    time?: number
}

export default function Relogio({ time = 0 }: IRelogio) {
    const minutes = String(Math.floor(time / 60));
    const seconds = String(time % 60);

    const [formatedMinutes, unitMinutes] = String(minutes).padStart(2, '0');
    const [formatedSeconds, unitSeconds] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{formatedMinutes}</span>
            <span className={style.relogioNumero}>{unitMinutes}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{formatedSeconds}</span>
            <span className={style.relogioNumero}>{unitSeconds}</span>
        </>
    )
}