import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Todo = (props) => (
    <li>
        <span>{props.id}. {props.name}</span>
        
        <button
            style={{display: props.isCompleted && "none"}}
            onClick={() => props.hanldeAddCompletedTodo(props.name)}
        >
        <FontAwesomeIcon icon={faCheckCircle} fixedWidth />
        </button>

        <button
            onClick={() => props.handleClickRemoveTodo(props.name)}
        >
        <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
        </button>
    </li>
)

export default Todo;