// Declarando la funcion 

function obtenerNombre(codigo){
let nombre = codigo.split(":")[1]

return(nombre)
}

//llamando a la funcion
let resultado = obtenerNombre("1000645216:Deiby Sanchez")
console.log(resultado)