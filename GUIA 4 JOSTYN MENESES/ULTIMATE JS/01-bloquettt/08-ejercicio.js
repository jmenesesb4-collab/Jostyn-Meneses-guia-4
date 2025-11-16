/*8. Contar párrafos
o Un párrafo termina con salto de línea \n.
o Ejemplo entrada:
o Hola mundo
o Esto es un segundo párrafo
o Salida: "Número de párrafos: 2"*/
function contarparrafos(){
    let texto = 'Hola mundo\nYo soy IRON MEN'
    let contador = 1
    for(let i = 0 ; i < texto.length; i++){
        let z = texto[i]
        if(z  === '\n'){
            contador++
        }
    }
    console.log('Numero de parrafos : ' + contador)
}
contarparrafos()