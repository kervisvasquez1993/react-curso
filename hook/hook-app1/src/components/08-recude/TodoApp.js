import React, { useReducer, useEffect } from "react";
import { todoReduce } from "./todoReduce";
import { ListWrapperUl } from "./components/ListWrapperUl";
import "./style.css";
import { useForm } from "../../hook/useForm";

export const TodoApp = () => {
    const init = () => {
        // return [
        //     {
        //         id: new Date().getTime(),
        //         desc: "aprender react",
        //         done: false,
        //     },
        // ]

        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatch] = useReducer(todoReduce, [], init);
    // usando hook para el formulario
    const [{ description }, handleInputChange, reset] = useForm({ description: '' })

    // logica para guardar cambios en todos
    useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) }, [todos])
    // funcion para agregar todo

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) {
            console.log('hola')
            return;
        }
        // console.log('llenando formulario')
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        const agregar = {
            type: 'add',
            payload: newTodo
        }
        dispatch(agregar)
        reset()
    }

    // function para eliminar todo

    const handleDelete = (todoId) => {
        console.log(todoId)

        const eliminar = {
            type: 'delete',
            payload: todoId
        }

        dispatch(eliminar)

    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }
    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                   {/* ul */}
                   <ListWrapperUl todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/>
                </div>
                <div className="col-5">
                    <h4 className=""> Agregar TODO</h4>

                    <hr />
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Aprtender.."
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={description}
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
