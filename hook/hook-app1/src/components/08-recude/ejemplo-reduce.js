const initialValue = [{ id: 1, todo: "comprar pan", done: false }];

const todoReduce = (state = initialValue, action ) => {
    if(action?.type == 'add'){
        return [...state , action.payload]
    }
    
    return state;
};

let todos = todoReduce();

const newTodo = { id: 1, todo: "comprar pan", done: false };


const action = {
    type: "add",
    payload: newTodo,
};

todos = todoReduce(todos, action)

console.log(todos);
