//declarar arreglo 

let numSables = [2, 4,-8,5,-6]

//recorrer el arreglo
console.log("Numeros de sables de luz")
numSables.forEach(function (num) {
    console.log(num)
})

//Filtrar el arreglo

let filtrar = numSables.filter(function (num) {
    return num < 0  
})
console.log(filtrar)
console.log(`los  sables defectuosos con energía negativa fueron  ${filtrar.length}`)

