import React from 'react'
import { ListLi } from './ListLi'

export const ListWrapperUl = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((todo, indice) =>
            (
                /* li */
                <ListLi todo={todo} indice={indice} handleToggle={handleToggle} handleDelete={handleDelete} />

            ))}
        </ul>
    )
}
