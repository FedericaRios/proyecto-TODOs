import React from 'react';
import './TodoList.css';

function TodoList(props) {
    return (
        <section className="section-container">
            <ul className="ul-container">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };

