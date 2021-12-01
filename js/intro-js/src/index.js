import { getHeroById } from "./export";
// const promesa = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve()
//     // }, 2000)
//     const heroe = getHeroById(20);
//     resolve(heroe);
//     reject('no se puedo encontrar el heroe')
// });

// promesa.then((heroe) => {
//     console.log(heroe);
// })
// .catch(e => console.log(e));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = getHeroById(id);
        if(heroe)
        {
            resolve(heroe)
        }else{
            reject('no se encuentra')
        }
        
        
    } )
}


getHeroeByIdAsync(20).then ( heroe => console.log(heroe)).catch(e => console.log(e))