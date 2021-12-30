import React, { useState } from "react";

import { useCounter } from "../../hook/useCounter";
import { Small } from "./Small";
import "../useEffect/effect.css";
export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>
        Counter : <Small value={counter} />
      </h1>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hidde:{JSON.stringify(show)}
      </button>
    </div>
  );
};
