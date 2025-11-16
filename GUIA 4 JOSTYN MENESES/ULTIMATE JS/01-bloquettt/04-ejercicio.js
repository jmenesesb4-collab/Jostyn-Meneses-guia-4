/*4. Contar los consonantes
o Letras alfabéticas que no sean vocales.
o Ejemplo entrada: "Hola"
o Salida: "Cantidad de consonantes: 2"*/
function contarConsonantes(){
    let palabra = 'hola que tal muchachos'.toLowerCase()
    let vocales = 'aeiou'
    let contador = 0

    for (let i = 0; i < palabra.length; i++) {
        let c = palabra[i]

        if (c === ' ' || vocales.includes(c)) {
            continue  // saltar si es vocal o espacio
        }

        contador++
    }

    console.log('Consonantes:', contador)
}
contarConsonantes()
