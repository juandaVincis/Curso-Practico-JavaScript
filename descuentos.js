function calcularPrecio(precio,porDescuento){
  const descuento = precio * porDescuento /100;
  const total = precio - descuento;
  return total;
}

function calcularDescuento(){
  const precio = document.getElementById("inPrecio").value;
  const desc = document.getElementById("inDescuento").value;

  const total = calcularPrecio(precio,desc);

  const resultado = document.getElementById("Resultado");
  resultado.innerText = total;
}