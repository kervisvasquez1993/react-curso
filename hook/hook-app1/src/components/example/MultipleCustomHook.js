import React, { useState } from "react";
import { useFetch } from "../../hook/useFetch";
import { useCounter } from "../../hook/useCounter";
import "../useEffect/effect.css";

export const MultipleCustomHook = () => {
    const { counter, increment, decrementar } = useCounter(1);

    const { loading, data } = useFetch(
        `https://breakingbadapi.com/api/quotes/${counter}`
    );

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Custom Hooks!!!</h1>
            <hr />

            {loading ? (
                <div className="alert alert-info text-center">loading...</div>
            ) : (
                <div>
                    <div className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer my-5">
                            {author}
                        </footer>
                    </div>
                    <button
                        className="btn btn-primary m-3"
                        onClick={decrementar}
                    >
                        anterior
                    </button>
                    <button className="btn btn-primary m-3" onClick={increment}>
                        {counter}
                    </button>
                </div>
            )}
        </div>
    );
};
