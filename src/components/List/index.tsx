import React from 'react';
import './style.scss';


function List() {
    const tarefas = [
        {
            name: "React",
            time: "02:00:00"
        },
        {
            name: "Javascript",
            time: "01:00:00"
        }
    ];

    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>

            <ul>
                {tarefas.map((item, index) => {
                    return (
                        <li key={index} className="item">
                            <h3>{item.name}</h3>
                            <span>{item.time}</span>
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}


export default List;