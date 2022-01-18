import { heroes } from "../data/Heros";

export const getHeroByPublished = (publisher) => {
    console.log(publisher)
  const validPublished = ["DC Comics", "Marvel Comics"];

  if (!validPublished.includes(publisher)) {
    throw new Error(`${publisher} no es una valor valido`);
  }
  return heroes.filter(hero => hero.publisher === publisher);
};
