/*2. Contar los signos de puntuación
o Contar: .,;:!?¿¡"
o Ejemplo entrada: "Hola, ¿cómo estás?"
o Salida: "Signos de puntuación: 3"
*/
function contarsig(){
    let oracion = "Hola, ¿cómo estás?"
    let signos = ',.:;!¡?¿'
    let contador = 0
    for(let i = 0 ; i < oracion.length; i++){
        if(signos.includes(oracion[i])){
            contador++
        }
    }
    console.log('signos de puntuacion : ' + contador)
}
contarsig()