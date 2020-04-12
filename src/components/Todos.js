import React from "react";
import Todo from "./Todo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Todos = (props) => (
    <section className="all_todos_list">
        <div>
            <span>
                <FontAwesomeIcon icon={faThumbsDown} fixedWidth /> Not Done: 
                &nbsp;
                <span>
                    {props.not_done_todos.length}
                </span>
            </span>

            <span>
                <FontAwesomeIcon icon={faThumbsUp} fixedWidth /> Done: 
                &nbsp;
                <span>
                    {props.done_todos.length === 0 ? 0 : props.done_todos.length}
                </span>
            </span>

        </div>

        <div className="not_done_todos">
            <button
                disabled={!props.not_done_todos.length > 0}
                onClick={props.handleClickRemoveNotDoneTodos}
            >
            <FontAwesomeIcon icon={faTrashAlt} /> <span>All</span>
            </button>
            {props.not_done_todos.length === 0 && <p>No Todos, Add some ...</p>}
            <ul>
                {
                    props.not_done_todos.map((todo, index) => (
                        <Todo
                            key={index}
                            id={index + 1}
                            name={todo}
                            isCompleted={false}
                            handleClickRemoveTodo={props.handleClickRemoveTodo}
                            hanldeAddCompletedTodo={props.hanldeAddCompletedTodo}
                        />
                    ))
                }
            </ul>
        </div>

        <div className="done_todos">
            <button
                disabled={!props.done_todos.length > 0}
                onClick={props.handleClickRemoveDoneTodos}
            >
            <FontAwesomeIcon icon={faTrashAlt} /> <span>All</span>
            </button>
            {props.done_todos.length === 0 && <p>No Todo Completed Yet...</p>}
            <ul>
                {
                    props.done_todos.map((todo, index) => (
                        <Todo
                            key={index}
                            id={index + 1}
                            name={todo}
                            isCompleted={true}
                            handleClickRemoveTodo={props.handleClickRemoveTodo}
                        />
                    ))
                }
            </ul>
        </div>

    </section>
);

export default Todos;