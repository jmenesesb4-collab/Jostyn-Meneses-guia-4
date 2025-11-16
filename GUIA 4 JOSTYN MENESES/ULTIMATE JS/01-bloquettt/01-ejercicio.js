/*1. Contar el número total de palabras
o Regla: una palabra termina cuando hay un espacio " " o un salto de línea.
o Ejemplo entrada: "Hola mundo desde Quito"
o Salida: "Número de palabras: 4"*/
function palabras(){
    let palabrassss = 'Hola mundo desde Quito'
    let contador = 0
    for(let i = 0; i < palabrassss.length; i++){
        if(i === 0 || palabrassss[i - 1 ] === ' '){
            contador++
        }
    }
    console.log('numero de palabras : ' + contador)
}
palabras()