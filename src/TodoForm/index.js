import React from 'react';
import { TodoContext } from '../TodoContext';
import './form.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form
            onSubmit={onSubmit}
        >
            <label>Introduce tu TODO:</label>
            <textarea
                className="text-area"
                value={newTodoValue}
                onChange={onChange}
                placeholder="................................"
            />
            <div className="buttons-container">
                <button
                    className="buttons button-cancel"
                    type="button"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    className="buttons button-añadir"
                    type="submit">
                    Añadir
                </button>
            </div>
        </form >
    );
};

export { TodoForm };