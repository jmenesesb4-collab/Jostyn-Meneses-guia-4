/*15. Añadir un texto al inicio o al final
o Entrada: texto del textarea + un nuevo fragmento.
o Salida: mostrar el texto original con el fragmento agregado al inicio y también
al final.
o Ejemplo:
1. Texto: "Aprender programación"
2. Fragmento: "Hoy"
3. Salida:
1. Al inicio: "Hoy Aprender programación"
2. Al final: "Aprender programación Hoy"*/
function añadirtexto(){
    let texto =  'aprender programacion'
    let palabra = 'hoy'
    let inicio = ''
    let final = ''
    for(let i = 0; i < palabra.length; i++){
        inicio += palabra[i]
    }
    inicio += ' '
    for(let i = 0; i < texto.length; i++){
        inicio += texto[i]
    }
    for(let i = 0; i < texto.length; i++){
        final += texto[i]
    }
    final += ' '
    for(let i = 0 ; i < palabra.length; i++){
        final += palabra[i]
    }
    console.log(inicio)
    console.log(final)
}
añadirtexto()