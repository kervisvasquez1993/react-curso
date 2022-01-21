import { heroes } from "../data/Heros";
export const getHeroByName = (name = "") => {

  console.log("getHeroByName llamado")
  if (name.length == 0) {
    return [];
  }
  name = name.toLowerCase();
  
  
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name)
  );
};
