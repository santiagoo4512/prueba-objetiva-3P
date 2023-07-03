function calcular(){
    let numero=parseInt(document.getElementById("numero").value);
    console.log(10);
    let impares=[]
    let sumapares=0
    for(var i=1; i<= numero; i++){
        if(i%2 !== 0){
            impares.push(i);
        }else{
            sumapares +=i;
        }
    }
    document.getElementById("impares").textContent="numeros impares:"+ impares.join(",")
    document.getElementById("sumapares").textContent="suma de pares:"+ sumapares
}