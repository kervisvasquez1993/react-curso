import React, { useReducer } from "react";
import { todoReduce } from "./todoReduce";
import "./style.css";

export const TodoApp = () => {
    const initialState = [
        {
            id: new Date().getTime(),
            desc: "aprender react",
            done: false,
        },
    ];

    const [todos, dispatch] = useReducer(todoReduce, initialState);
    // console.log(todos);
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('llenando formulario')
        const newTodo = {
            id: new Date().getTime(),
            desc: "Nueva tarea",
            done: false,
        }

        const agregar = {
            type : 'add',
            payload : newTodo
        }
        dispatch(agregar)
    }
    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {todos.map((todo, i) =>
                        (
                            <li key={todo.id}
                                className="list-group-item"
                            >
                                <p className="text-center ">{i + 1}:{todo.desc} </p>

                                <button className="btn btn-danger"> borrar</button>
                            </li>

                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4 className=""> Agregar TODO</h4>

                    <hr />
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            placeholder="Aprtender.."
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block">
                            Agregar
                        </button>

                    </form>
                </div>

            </div>


        </div>
    );
};
