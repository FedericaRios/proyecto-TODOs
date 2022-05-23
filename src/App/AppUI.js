import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/index';
import LoadingIcon from '../Icons/loader.gif';
import { EmptyTodo } from '../EmptyTodosReto/emptyTodo.js';
import './AppUI.css';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <div className="container">
            <div className="container-search-counter">
                <TodoCounter />
                <TodoSearch />
            </div>
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <img src={LoadingIcon} alt="Imagen de carga" />}
                {(!loading && !searchedTodos.length) && (<EmptyTodo />)}



                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </div>
    );
}

export { AppUI };

//si loading es true, se va a renderizas lo q dice el parrafo. //&& es = y, entonces.