// arrelos en js
// un arreglo es una coleccion de informacion que se encuentra en una variable
// const arreglo = new Array();
const arreglo = [1,2,3,4,5];
arreglo.push(1);
arreglo.push(2);

// ojo no usar el push porque modifica el objeto principal

let arreglo2 = [...arreglo, 5]
const arreglo3 = arreglo2.map((x) => x * 3)
console.log(`arreglo2 => ${arreglo2}`)
console.log(`arreglo => ${arreglo}`)
console.log(`arreglo3 => ${arreglo3}`)