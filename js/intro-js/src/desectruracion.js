// desectruracion 
const persona = {
    nombre: 'kervis',
    edad : '28 year',
    clave : '1993',
}


// const {clave, nombre,edad} = persona
// console.log(clave, edad)
const test = ({nombre, edad, clave , rango = 'capitan'}) => {
    // const {nombre, edad, clave} = persona;
    // console.log(nombre, edad, clave, rango);

return  {
    nombreClave : clave,
    year : edad, 
    positions : {
        lat : '123', 
        log : '123'
    }
}}

const {nombreClave, year, positions : {lat,log}} = test(persona)
console.log(nombreClave, year, lat,log)
