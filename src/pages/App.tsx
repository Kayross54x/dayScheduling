import React from 'react';

import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import { ITasks } from '../types/ITask';

import './style.scss';

function App() {
    const [tasks, setTasks] = React.useState<Array<ITasks>>([]);
    const [selected, setSelected] = React.useState<ITasks>();

    function selectTask(task: ITasks) {
        setSelected(task);

        setTasks((prevTasks) => prevTasks.map(t => ({
            ...t,
            selected: task.id === t.id
        })));
    }

    function finishTask() {
        if(selected) {
            setSelected(undefined);
            setTasks(prevTasks => prevTasks.map(t => {
                if(t.id === selected.id) {
                    return {
                        ...t,
                        selected: false,
                        completed: true
                    }
                }

                return t;
            }))
        };
    }
    
    

    return (
        <div className="AppStyle">
            <Form setTasks={setTasks}/>

            <List 
                tasks={tasks}
                selectTask={selectTask}
            />

            <Cronometro 
                selected={selected}
                finishTask={finishTask}
            />
        </div>
    );
}

export default App;