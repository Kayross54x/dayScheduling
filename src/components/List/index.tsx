import { ITasks } from '../../types/ITask';
import Item from './Item';
import './Lista.module.scss';

export interface IList {
    tasks: ITasks[],
    selectTask: (task: ITasks) => void
}

function List(props: IList) {
    const { tasks, selectTask } = props;

    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>

            <ul>
                {tasks.map((item) => {
                    return (
                        <Item 
                            {...item}
                            key={item.id}
                            selectTask={selectTask}
                        />
                    );
                })}
            </ul>
        </aside>
    )
}


export default List;