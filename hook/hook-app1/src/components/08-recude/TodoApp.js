import React, { useReducer } from "react";
import todoReduce from "./todoReduce";
import "./style.css";

export const TodoApp = () => {
    const initialState = [
        {
            id: new Date().getTime(),
            desc: "aprender react",
            done: false,
        },
    ];

    const [todos] = useReducer(todoReduce, initialState);
    console.log(todos);
    return (
        <div>
            <h1>Todo App({todos.length})</h1>
            <hr />
            <ul className="list-group list-group-flush">
                {todos.map((todo, indeice) => {
                    <li key={todo.id} className="list-group-item">
                       {indeice + 1} {todo.desc}
                    </li>;
                })}
            </ul>
        </div>
    );
};
