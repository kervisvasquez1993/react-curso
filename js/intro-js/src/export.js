import { heroes } from "./data/heroes";

// console.log(heroes);
const heroName = [];
// const nombres = heroes.map(({ name }) => heroName.push(name));

export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroById(3));


const getHeroeByOwner =  (owner) => heroes.find((heroe) => heroe.owner === owner)

// console.log(getHeroeByOwner('Marvel'))