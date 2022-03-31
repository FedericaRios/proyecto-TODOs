import React from 'react';
import './TodoItem.css';
import { FiCheck } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";


function TodoItem(props) {

    return (
        <li className="esTodo">
            <span className={`Icons Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}><FiCheck /></span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>

            <span className="Icons Icon-delete" onClick={props.onDelete}><FiTrash /></span>
        </li>
    );
}

export { TodoItem };