/*10. Contar todos los caracteres
o Contar absolutamente todo: letras, números, signos, espacios.
o Ejemplo entrada: "Hola 123!"
o Salida: "Total de caracteres: 9"
*/
function caracteres(){
    let texto = 'Hola 1234!'
    let contador= 0
    for(let i = 0; i < texto.length; i++ ){
        let z = texto[i]
        if(z !== ' '){
            contador++
        }
    }
    console.log('total de caracteres : ' + contador)
}
caracteres()