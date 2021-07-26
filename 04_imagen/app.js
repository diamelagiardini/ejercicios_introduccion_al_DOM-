 const medida = prompt(`Elegi una opcion de medida para ponerle a la imagen: 
chica	200px
mediana	500px
grande	800px

Escribi "chica", "mediana" o "grande" segun la opcion que eligas.`)

const imagen = document.querySelector("img") 

if (medida === "chica") {
    imagen.style.width = "200px"
    imagen.style.height = "200px"
} else if (medida === "mediana") {
    imagen.style.width = "500px"
    imagen.style.height = "500px"
} else if (medida === "grande") {
    imagen.style.width = "800px"
    imagen.style.height = "800px"
}
