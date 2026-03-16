/*
calcArea() é uma função que calcula a área de uma figura
geometrica palna, dados a base, a altura e o tipo da forma
*/
function calcArea(base, altura, tipo){
    switch(tipo) {
        case 'R':    // Retângulo
            return base * altura
        case 'T':   // triangulo
            return base * altura / 2
        case 'E':  // elipse/circulo
            return (base / 2 ) * (altura / 2 ) * Math.PI
        default:    //  Formas inválidas/desconhecidas
            return undefined
    }
}

console.log(`Área triangulo 10 x30:  ${calcArea(10, 30, 'T')}`)
console.log(`Área elipse (círculo ) 7,5 x 7,5: ${ calcArea(7.5 ; 7.5, 'E')}`)
console.log(`Área retângulo  12,8x15,5: ${ calcArea(12.8, 15.5. 'R')}`)
console.log(`Área forma invalida 8x17:  ${calcArea(8, 17, 'H')}`)

// Chando a função com apenas dois parêmetros
console.log(`Area retângulo 20x40: ${calcArea(20, 40)}`)

/*
REGRAS PARA O USO DE PARÂMETROS PREDEFINIDOS
1) o parâmetro predefinido deve vir sempre POR ULTIMO na lista de 
   parâmetros de uma função
2) Pode haver mais de um parâmetro predefinido. Neste caso, devem 
   ser sempre OS ULTIMOS,
*/
