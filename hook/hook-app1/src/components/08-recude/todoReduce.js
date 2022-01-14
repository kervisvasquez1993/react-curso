export const todoReduce = (state = [], action) => {
    switch (action.type) {
        case 'add':

            return [...state, action.payload]

        case 'delete':
            console.log(state)
            return state.filter(todo => todo.id !== action.payload)

        case 'toggle':
            return state.map( todo => {
                console.log(todo)
                if (todo.id === action.payload)
                {
                    return {
                        ...todo,
                        done:!todo.done
                    }
                }
                else {
                    return todo
                }
            })

        default:
            return state
    }

}