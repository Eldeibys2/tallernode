//Declarar la funcion
let crearAprendiz=(nombre,planeta,edad,estatura,clasificarAprendiz)=> {
    let datosAprendiz = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura

    }

clasificarAprendiz(datosAprendiz)    
}
//llamando la funcion
crearAprendiz('Deiby','Tierra',14,1.75, (aprendiz)=> {
    if(aprendiz.edad>=15){
        console.log("El aprendiz maneja el sable de luz")
    }
    else{
          console.log("El aprendiz maneja el sable de la fuerza") 
    }
})