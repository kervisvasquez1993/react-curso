import { useState } from "react";

export const useCounter = (initialState = 100) => {
    const [state, setState] = useState(initialState);
    const increment = () => {
        setState(state + 1);
    };

    const decrementar = () => {
        setState(state - 1);
    };
    const reset = () => {
        setState(initialState);
    };

    return {
        counter: state,
        increment,
        decrementar,
        reset,
    };
};
