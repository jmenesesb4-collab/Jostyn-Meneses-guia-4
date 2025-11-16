/*11. Buscar una palabra en el texto
o Entrada: el alumno ya tiene un texto en el textarea.
o Debe pedir una palabra a buscar.
o Salida: mostrar si la palabra existe o no en el texto.
o Ejemplo:
1. Texto: "Me gusta programar en JavaScript"
2. Palabra: "programar"
3. Salida: "La palabra 'programar' sí se encuentra en el texto."
*/
function buscarpalabras() {
    let texto = "Me gusta programar en JavaScript"
    let palabra = "programar"
    let encontrada = false

    for (let i = 0; i < texto.length; i++) {

        // Segundo for para comparar letra por letra
        let j
        for (j = 0; j < palabra.length; j++) {
            if (texto[i + j] !== palabra[j]) {
                break   // si una letra no coincide, salimos
            }
        }

        // Si j avanzó hasta el final, significa que todas coincidieron
        if (j === palabra.length) {
            encontrada = true
            break
        }
    }

    if (encontrada) {
        console.log("La palabra '" + palabra + "' SÍ está en el texto")
    } else {
        console.log("La palabra '" + palabra + "' NO está en el texto")
    }
}

buscarpalabras()
