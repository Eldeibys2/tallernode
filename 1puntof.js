//Declarando una funcion flecha  que calcule la distancia entre 2 puntos
let calcularDistancia = (x1,y1,x2,y2) =>Math.sqrt( Math.pow(x1 - x2,2) + Math.pow(y1 - y2 ,2)) 

//Llamar a la funcion
let distancia = calcularDistancia(0,0,12,0)
console.log(`La distancia calculada fue de ${distancia}`)
