import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ITasks } from '../../types/ITask';
import Button from '../Button';

import './style.scss';

interface IForm {
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

function Form({ setTasks }: IForm) {
    const [name, setName] = React.useState<string>('');
    const [time, setTime] = React.useState<string>('00:00');

    function createTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setTasks((oldTasks) => 
            [
                ...oldTasks, 
                {
                    name,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );

        setTime('00:00');
        setName('');
    }

    return (
        <form className="novaTarefa" onSubmit={createTask}>
            <div className="inputContainer">
                <label htmlFor="Tarefa">
                    Adicione um novo estudo
                </label>

                <input 
                    required
                    type="text" 
                    value={name}
                    name="Tarefa" 
                    id="Tarefa"
                    placeholder="O que você quer estudar?" 
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="Tempo">
                    Tempo
                </label>

                <input 
                    required
                    type="time"
                    step="1"
                    value={time}
                    name="Tempo" 
                    id="Tempo" 
                    min="00:00:00"
                    max="01:30:00"
                    onChange={(event) => setTime(event.target.value)}
                />
            </div>

            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

//Em class components:

// class Form1 extends React.Component<{ setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>}> {
//     state = {
//         name: "",
//         time: "00:00"
//     };

//     createTask(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();

//         this.props.setTasks((oldTasks) => 
//             [
//                 ...oldTasks, 
//                 {
//                     ...this.state,
//                     selected: false,
//                     completed: false,
//                     id: uuidv4()
//                 }
//             ]);
//         this.setState({
//             name: "",
//             time: "00:00"
//         });
//     }

//     render() {
//         return (
//             <form className="novaTarefa" onSubmit={this.createTask.bind(this)}> {/* bind this para associar o state para dentro da função, para podermos usar this.state lá dentro */}
//                 <div className="inputContainer">
//                     <label htmlFor="Tarefa">
//                         Adicione um novo estudo
//                     </label>

//                     <input 
//                         required
//                         type="text" 
//                         value={this.state.name}
//                         name="Tarefa" 
//                         id="Tarefa"
//                         placeholder="O que você quer estudar?" 
//                         onChange={(event) => this.setState({...this.state, name: event.target.value})}
//                     />
//                 </div>
//                 <div className="inputContainer">
//                     <label htmlFor="Tempo">
//                         Tempo
//                     </label>

//                     <input 
//                         required
//                         type="time"
//                         step="1"
//                         value={this.state.time}
//                         name="Tempo" 
//                         id="Tempo" 
//                         min="00:00:00"
//                         max="01:30:00"
//                         onChange={(event) => this.setState({...this.state, time: event.target.value})}
//                     />
//                 </div>

//                 <Button type="submit">
//                     Adicionar
//                 </Button>
//             </form>
//         )
//     }
// }

export default Form;