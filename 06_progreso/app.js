const porcentajeDeProgreso = prompt(`Ingrese un nivel de porcentaje para representar en la barra. 
Por ejemplo: "75%"`)

const barra = document.querySelector(".barra")
const porcentaje = document.getElementById("numeroPorcentaje")

barra.style.width = porcentajeDeProgreso
porcentaje.textContent = porcentajeDeProgreso 
porcentaje.style.color = "white"