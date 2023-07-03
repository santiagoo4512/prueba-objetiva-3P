let nombres =[]

function crear(){
    let dato = prompt("ingrese nombre: ")
    nombres.push(dato)
}
function mostrar(){
    nombres.forEach(nombre =>{
        console.log(nombre);
    });
}
function eliminar(){
    nombres.pop();
}
function actualizar(){
    var posicion=prompt("ingrese la posicion")
    var quitar=nombres[posicion]
    nombres[posicion]=(prompt("ingrese nuevo nombre:"));
}
crear()
crear()
crear()
mostrar()
actualizar()
mostrar()
eliminar()