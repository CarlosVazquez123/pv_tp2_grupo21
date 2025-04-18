function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
    var color = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
    return "rgb" + color;
}
function cambiarColorDeFondo() {
  document.getElementById("miDiv").style.backgroundColor = colorRGB();
  console.log(colorRGB());
}