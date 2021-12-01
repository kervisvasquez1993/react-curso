const personaje = [ 'goku', 'vegeta', 'trunk'];

const [,,p1] = personaje
console.log(p1);

const retornaArreglo = () => { 
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros);

const ejemplo = (valor) => {
    return [valor , () => {
        console.log('hola mundo')
    }]
}

const [valor, setNombre] = ejemplo('goku')

console.log(valor)

setNombre()