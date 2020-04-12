import React, { useState, useEffect } from "react";

import Todos from "../components/Todos";
import Form from "../components/Form";

const TodoListPage = () => {
    // there will be 2 arrays 
    // 1 for all todos and another for done todos

    // get local storage saved todos ( not done // done )
    const locStorNotDoneItem = localStorage.getItem("not_done_todos");
    const locStorDoneItem = localStorage.getItem("done_todos");

    const not_done_todos = locStorNotDoneItem ? locStorNotDoneItem : "[\"Play Football\", \"go shopping\"]";
    const completed_todos = locStorDoneItem ? locStorDoneItem : "[]";


    // first mount of component ( using useState Hook )
    const [ todos, setTodo ] = useState(JSON.parse(not_done_todos));  
    const [ done_todos, setDoneTodos ] = useState(JSON.parse(completed_todos));

    // fuction to filter not done todos
    const filterNotDoneTodos = (todoToFilter) => {
        setTodo(todos.filter(todo => todo !== todoToFilter));
    }

    // remove todo ( not done OR completed ) Buttons
    const handleClickRemoveTodo = (todoToRemove) => {
        filterNotDoneTodos(todoToRemove);
        setDoneTodos(done_todos.filter(todo => todo !== todoToRemove));
    };

    // remove all todos ( not done // completed ) Buttons 
    const handleClickRemoveNotDoneTodos = () => {
        setTodo([]);
    };
    const handleClickRemoveDoneTodos = () => {
        setDoneTodos([]);
    };

    // completed todos adding to completed section
    const hanldeAddCompletedTodo = (todoToAdd) => {
        filterNotDoneTodos(todoToAdd);
        setDoneTodos([...done_todos, todoToAdd]);
    }

    // adding new todos 
    const hanldeOnSubmit = (newTodo) => {
        setTodo([...todos, newTodo]);
    }

    // save our work and lists of todos ( not done // completed ) 
    //in local storage 
    const func = (list, arg) => {
        const json = JSON.stringify(list);
        localStorage.setItem(arg, json);
    }
    useEffect(() => func(todos, "not_done_todos"), [todos]);
    useEffect(() => func(done_todos, "done_todos"), [done_todos]);

    return (
        
        <div className="todos_container">
            <Form 
                not_done_todos={todos}
                hanldeOnSubmit={hanldeOnSubmit}
            />
            <Todos 
                not_done_todos={todos}
                done_todos={done_todos}
                handleClickRemoveTodo={handleClickRemoveTodo}
                handleClickRemoveNotDoneTodos={handleClickRemoveNotDoneTodos}
                handleClickRemoveDoneTodos={handleClickRemoveDoneTodos}
                hanldeAddCompletedTodo={hanldeAddCompletedTodo}
            />
        </div>
    )
};

export default TodoListPage;