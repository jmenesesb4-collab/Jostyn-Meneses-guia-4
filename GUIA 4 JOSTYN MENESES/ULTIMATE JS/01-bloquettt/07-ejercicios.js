/*7. Contar palabras que empiezan en minúscula
o Igual que el anterior, pero verificando minúscula.
o Ejemplo entrada: "hola Mundo bonito"
o Salida: "Palabras con minúscula inicial: 2"*/
function contarminusculas(){
    let oracion = "hola Mundo bonito"
    let contador= 0
    for(let i = 0; i < oracion.length; i++){
        let z = oracion[i]
        if(z >= 'a' && z <= 'z'){
            contador++
        }
    }
    console.log('Palabras con minusculas son : ' + contador)
}
contarminusculas()