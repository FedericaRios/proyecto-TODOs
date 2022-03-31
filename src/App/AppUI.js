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
// import { EmptyTodo } from '../EmptyTodosReto/emptyTodo.js';

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
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <img src={LoadingIcon} alt="Imagen de carga" />}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                {/* {(!loading && !searchedTodos.length) && (<EmptyTodo />)} */}



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
        </React.Fragment>
    );
}

export { AppUI };

//si loading es true, se va a renderizas lo q dice el parrafo. //&& es = y, entonces.