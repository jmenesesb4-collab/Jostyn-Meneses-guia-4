/*9. Invertir el texto completo
o Construir un nuevo texto recorriendo la cadena desde el final hasta el inicio.
o Ejemplo entrada: "Hola"
o Salida: "aloH"
*/
function Invertir(){
    let texto = 'Hola'
    let invertirtex = ''
    for(let i = texto.length-1; i >= 0; i--){
        invertirtex += texto[i]
    }
    console.log(invertirtex)
}
Invertir()