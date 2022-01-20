import { heroes } from "../data/Heros";

export const getHeroById = (id = "") => {
  console.log("llamado");
  return heroes.find((hero) => hero.id === id);
};
