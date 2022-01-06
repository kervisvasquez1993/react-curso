import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
    console.log("me volvi a general :(");
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(3);
            }}
        >
            Incrementar
        </button>
    );
});
