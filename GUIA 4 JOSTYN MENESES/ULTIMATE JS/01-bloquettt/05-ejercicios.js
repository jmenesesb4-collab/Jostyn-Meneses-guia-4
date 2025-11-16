/*. Contar los dígitos
o Caracteres numéricos 0–9.
o Ejemplo entrada: "Mi clave es 1234"
o Salida: "Cantidad de dígitos: 4"*/
function contardigitos(){
    let palabra = 'Mi clave es 1234'
    let contador= 0
    for(let i = 0; i < palabra.length; i++){
        let z = palabra[i]
        if(z >= '0' && z <= '9'){
            contador++
        }
    }
    console.log('cantidad de digitos : ' + contador)
}
contardigitos()