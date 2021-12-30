import React, { useState, useLayoutEffect, useRef } from "react";
import { useFetch } from "../../hook/useFetch";
import { useCounter } from "../../hook/useCounter";
import "../useEffect/effect.css";
import "./layout.css";

export const LayoutEffetc = () => {
  const { counter, increment, decrementar } = useCounter(1);

  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];
  const parrafo = useRef();

  const [boxSite, setBoxSite] = useState({});
  useLayoutEffect(() => {
    setBoxSite(parrafo.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <div>
        <div className="blockquote text-right">
          <p className="mb-0" ref={parrafo}>
            {quote}
          </p>
          <footer className="blockquote-footer my-5">{author}</footer>
        </div>
        <button className="btn btn-primary m-3" onClick={decrementar}>
          ANTERIROR
        </button>
        <p>posicion : {counter}</p>
        <button className="btn btn-primary m-3" onClick={increment}>
          SIGUIENTE
        </button>
      </div>

      <pre>{JSON.stringify(boxSite, null, 5)}</pre>
    </div>
  );
};
