//Declarar la funcion
let calcularSalario = (salmensual,licenciaven) =>{

    comision = licenciaven * 1500000
    return (salmensual+comision)*95/100
}
//llamar la funcion
 let salario = calcularSalario(3500000,3)
 console.log(`El salario mensual del vendedor fue ${salario}`)