const saludar = () => "hola"

const despedida = (parametro, parametro2) => {
    return `el parametro es ${parametro}. y el segundo parametro es ${parametro2}`
}
// saludar = 30;
console.log(saludar())

console.log(despedida('parametro1', 'parametro2'))

// const getUser  = ()=> {
//     return {
//         uuid : '123',
//         username : 'kervisvasquez'
//     }
// }
// nueva forma de refactorizar la funcion  
const getUser  = ()=> ({
   
        uuid : '123',
        username : 'kervisvasquez'
    
})
console.log(getUser())


const getUserActivo = nombre => ({uid : '123', username : nombre})


const usuarioActivo = getUserActivo('kervis2')

console.log(usuarioActivo)