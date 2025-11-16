/*12. Contar un carácter en el texto
o Entrada: texto del textarea + un carácter a contar.
o Salida: número de veces que aparece.
o Ejemplo:
1. Texto: "Hola mundo"
2. Carácter: "o"
3. Salida: "El carácter 'o' aparece 2 veces."*/
function contarcaracter(){
    let texto = "Hola mundoooo"
    let caracter = 'o'
    let contador = 0
    for (let i = 0; i < texto.length; i++){
        if(caracter.includes(texto[i])){
            contador++
        }
    }
    console.log('El caracter ' + caracter + ' aparece ' + contador + ' veces')
}
contarcaracter()