import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../../helpers/getHeroByName";
import { useForm } from "../../hook/useForm";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [values, handleInputChange] = useForm({ formText: q });

  const { formText } = values;
  const heroCard = getHeroByName("hola");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${formText}`);
  };

  return (
    <>
      <h2>Buscar Herores</h2>
      <div className="row mt-5">
        <div className="col-5">
          <h4 className="">Busqueda</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="buscar por heroe"
              className="form-control"
              name="formText"
              autoComplete="off"
              value={formText}
              onChange={handleInputChange}
            />

            <div className="d-grid gap-2">
              <button className="btn btn-primary mt-3" type="submit">
                Button
              </button>
            </div>
          </form>
        </div>
        <div className="col-7">
          <h4 className="">Busqueda</h4>
          <hr />
          <div>
            {heroCard.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
