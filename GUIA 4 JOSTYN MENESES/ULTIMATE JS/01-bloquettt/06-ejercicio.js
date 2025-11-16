/*6. Contar palabras que empiezan en mayúscula
o Detectar la primera letra de cada palabra.
o Ejemplo entrada: "Hola mundo Bonito"
o Salida: "Palabras con mayúscula inicial: 2"*/
function contarmayusculas() {
    let palabras = 'Hola mundo Bonito'
    let contador = 0
    for(let i = 0 ; i < palabras.length; i++){
        let z = palabras[i]
        if( z >= 'A' && z <= 'Z'){
            contador++
        } 
    }
    console.log('las letras con mayusculas son : ' + contador)
}
contarmayusculas()