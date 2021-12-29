import React, { useState } from "react";
import { MultipleCustomHook } from "../example/MultipleCustomHook";
import "../useEffect/effect.css";

export const RealExampleREf = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {show && <MultipleCustomHook />}

            <button
                className="btn btn-outline-primary mt-5"
                onClick={() => setShow(!show)}
            >
                show / hidden
            </button>
        </div>
    );
};
