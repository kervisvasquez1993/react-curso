import React from "react";
import { getHeroByPublished } from "../../helpers/getHeroByPublished";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublished(publisher);
  return (
    <>
      <h1>Hero List - {publisher}</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
      </ul>
    </>
  );
};
