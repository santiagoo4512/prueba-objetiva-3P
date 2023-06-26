let nombre =[]
function agregar() {
    let nombre = prompt("Ingrese nombre: ")
    nombre.push(nombre);
}
function mostrar(){
    nombre.forEach(nombre => {
        console.log(nombre);
        
    });
}
function eliminar(){
    nombre.pop();
}
function actualizar(){
    var posicion=prompt("Ingrese la posicion")
    var quitar=nombres[posicion]
    nombre[posicion]=(prompt("ingrese nuevo nombre:"));

}

ingresar();
ingresar();
ingresar();
mostrar();
actualizar();
mostrar();
eliminar();
