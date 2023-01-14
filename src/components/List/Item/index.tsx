
import { ITasks } from "../../../types/ITask";

import style from './Item.module.scss';

export interface IItem extends ITasks {
    selectTask: (task: ITasks) => void;
}

export default function Item({ name, time, selected, completed, id, selectTask }: IItem) {
    return (
        <li 
            className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`} 
            onClick={() => !completed && selectTask({completed, id, name, selected, time})}
        >
            <h3>{name}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label="Tarefa completada"></span>}
        </li>
    )
}