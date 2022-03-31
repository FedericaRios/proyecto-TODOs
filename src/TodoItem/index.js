import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="esTodo">
            <span className={`Icons Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete} >√</span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>

            <span className="Icons Icon-delete" onClick={props.onDelete} >X</span>
        </li>
    );
}

export { TodoItem };