import { useState } from "react";

export const useCounter = (initialState = 100) => {
    const [state, setState] = useState(initialState);
    const increment = (factor) => {
        setState(state + factor);
    };

    const decrementar = (factor) => {
        setState(state - factor);
    };
    const reset = () => {
        setState(initialState);
    }

    return {
        state,
        increment,
        decrementar,
        reset,
    }
};
