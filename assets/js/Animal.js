import {instanciaAnimal, registroAnimal, limpiezaFormulario} from "./index"

let animalitos = (async () => {
    const url = "./animales.json";

    const resultados =  await fetch(url);
    const data = await resultados.json();
    return data
   
})();
 
const obtenerData = async(tipoAnimal) => {
    const variable = await datos.then(json => {
        return json.animales.find(element => {
            if(element.name === tipoAnimal){
                return element
            }
        })
    })
    return variable
}

let preview = document.querySelector('#preview')
let animalesFormulario = document.getElementById('Animales')
const ruedaAnimal = document.getElementById('animal')
const boton = document.getElementById('btnRegistar')

let data = null
let fuenteImagen = null
let animales = []


boton.addEventListener("click", async (e)=>{
    e.preventDefault()
    const tipoAnimal = document.getElementById('animal').value
    const edadAnmimal = document.getElementById('edad').value
    const comentarios = document.getElementById('comentarios').value

    if (tipoAnimal && edadAnimal && comentarios){
        data = await obtenerData(tipoAnimal)
        const sonidoAnimal = await data.sonidoAnimal
        const urlImagen = fuenteImagen.slice(5, -2)
        const urlSonido = `${url}/${sonidoAnimal}`
        const animal = instanciaAnimal(tipoAnimal, edadAnmimal, comentarios, urlSonido)
        registroAnimal(animal, animalesFormulario, animales)
        limpiezaFormulario()
    }
    else{
        alert("Por favor ingrese todos los datos")
    }
})

ruedaAnimal.addEventListener("change", async () => {
    const tipoAnimal = document.getElementById('animal').value
    data = await obtenerData(tipoAnimal)
    const imgAnimal = await data.imagen
    const imgUrl = `${url}/${imgAnimal}`
    fuenteImagen = await preview.style.backgroundImage 
})

export default animalitos;