/*14. Contar caracteres en posiciones impares
o Entrada: texto del textarea.
o Recorrer la cadena y contar caracteres en índices impares (1, 3, 5, …).
o Ejemplo:
1. Texto: "Hola"
2. Índices: H(0), o(1), l(2), a(3)
3. Salida: "Caracteres en posiciones impares: 2"*/
function impares(){
    let texto = 'Hola' 
    let contadorimpar = 0
    for (let i = 0; i < texto.length; i++){
        if(i % 2 != 0){
            contadorimpar++
        }
    }
    console.log('Caracteres en posisiones impares : ' + contadorimpar)
}
impares()