// let nombre = 'kervis vasquez';
// nombre = 'kervis'
// const apellido = 'vasquez';

// console.log({nombre : nombre, apellido : apellido});


// objeto literal 

const person = {
    nombre : 'kervis',
    apellido : 'vasquez',
    edad : 45,
    direccion : {
        estado : "Carabobo",
        ciudad : "valencia",
        municipio : "guacara",
    },
    caracteristicas(){
        return `el nombre es: ${this.nombre}, su edad ${this.edad}`
    }
}
const persona2 = {...person};
persona2.nombre = "antonio"
console.log(person)
console.log(persona2)