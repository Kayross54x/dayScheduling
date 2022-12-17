import React from 'react';
import Button from '../Button';

class Form extends React.Component {

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="Tarefa">
                        Adicione um novo estudo
                    </label>

                    <input 
                        required
                        type="text" 
                        name="Tarefa" 
                        id="Tarefa" 
                        placeholder="O que você quer estudar?" 
                    />
                </div>
                    <label htmlFor="Tempo">
                        Tempo
                    </label>

                    <input 
                        required
                        type="time"
                        step="1"
                        name="Tempo" 
                        id="Tempo" 
                        min="00:00:00"
                        max="01:30:00"
                    />
                <div>

                </div>

                <Button />
            </form>
        )
    }
}

export default Form;