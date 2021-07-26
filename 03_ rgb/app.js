alert("Te voy a pedir tres valores que son del 0 al 255 para crear un color RGB. Los valores corresponden al Rojo, Verde y Azul")

const rojo = prompt(`Rojo: 
Ingresa un valor del 0 al 255`)
const verde = prompt(`Verde: 
Ingresa un valor del 0 al 255`)
const azul = prompt(`Azul: 
Ingresa un valor del 0 al 255`)

const body = document.querySelector("body")

body.style.backgroundColor = "rgb(`${rojo} ${verde} ${azul}`)" //no funciona
