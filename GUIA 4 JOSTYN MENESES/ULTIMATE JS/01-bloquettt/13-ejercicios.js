/*13. Contar caracteres en posiciones pares
o Entrada: texto del textarea.
o Recorrer la cadena y contar caracteres en índices pares (0, 2, 4, …).
o Ejemplo:
1. Texto: "Hola"
2. Índices: H(0), o(1), l(2), a(3)
3. Salida: "Caracteres en posiciones pares: 2"*/
function posisionpar(){
    let texto = 'Hola'
    let contador= 0
    for(let i = 0; i < texto.length; i++){
        if(i % 2 === 0){
            contador++
        }
    }
    console.log('Carateres en posiciones par : ' + contador)
}
posisionpar()