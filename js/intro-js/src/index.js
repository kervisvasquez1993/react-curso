import {heroes} from './data/heroes'

console.log(heroes)
const heroName = [];
const nombres = heroes.map( ({name}) => heroName.push(name))

const getHeroById = (id) => heroes.find(heroe => heroe.id === id)

console.log(getHeroById(4))