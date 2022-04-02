import React from "react";
import './emptyTodo.css';
import ImagenCreate from '../Icons/sonriente.png';

const EmptyTodo = () => {
    return (
        <div className="emptyTodos-container">
            <p>¡Crea tu primer TODO!</p>
            <img src={ImagenCreate} className="emptyTodo-img-create" />
        </div>
    )
};

export { EmptyTodo };

