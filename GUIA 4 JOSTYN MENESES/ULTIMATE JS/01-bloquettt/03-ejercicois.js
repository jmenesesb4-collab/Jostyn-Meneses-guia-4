/*3. Contar las vocales
o Vocales: a, e, i, o, u (mayúsculas y minúsculas).
o Ejemplo entrada: "Educación"
o Salida: "Cantidad de vocales: 5*/
function vocales(){
    let palabra= 'Educacion'.toLowerCase()
    let vocales = 'aeiou'
    let contador = 0
    for(let i = 0; i < palabra.length; i++){
        if( vocales.includes(palabra[i]))
            contador++
    }
    console.log('Cantidad de vocales : ' + contador)
}
vocales()