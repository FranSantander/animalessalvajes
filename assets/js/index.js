//alert ("Hola")
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Tipo_animal.js"

const instanciaAnimal= (tipoAnimal, edadAnmimal, img, comentario, sonido) =>{
   switch(tipoAnimal){
       case "Leon":
           const leon = new Leon(tipoAnimal, edadAnmimal, img, comentario, sonido)
           return leon
        case "Lobo":
            const lobo = new Lobo(tipoAnimal, edadAnmimal, img, comentario, sonido)
            return lobo
        case "Oso":
            const oso = new Oso(tipoAnimal, edadAnmimal, img, comentario, sonido)
            return oso
        case "Serpiente":
            const serpiente = new Serpiente(tipoAnimal, edadAnmimal, img, comentario, sonido)
            return serpiente
        case "Aguila":
            const aguila = new Aguila(tipoAnimal, edadAnmimal, img, comentario, sonido)
            return aguila
   } 
}

const registroAnimal = (animal, animalesFormulario, animales) => {
    animales.push(animal)
    verAnimales(animales, animalesFormulario)
}
 const verAnimales = (animales, animalesFormulario) => {
     animales.forEach(() => {
         animalesFormulario.innerHTML = ""
         animales.forEach((animal) => {
            animalesFormulario.innerHTML+= `
            <div class="col-4">
            <div class="card" style="">
            <img src="${animal.Img()}" class="card-img-top" a
                data-comentarios = "${animal.Comentarios()}"
                data-edad = "${animal.Edad()}"
                data-toggle="modal" 
                data-target="#exampleModal"
            >
            <div class="bg-secondary" id="botonSonido">
            <img src="./assets/imgs/audio.svg" style="width:17.5% ; padding:5px ; margin:0"
            data-sonido= "${animal.Sonido()}"
            >
            </div>
            </div>
            </div>
            `
         })
     })
     let imgAnimales = document.querySelectorAll('#Animales img')
     const modal = document.querySelector('.modal-body')

     imgAnimales.forEach((imagenAnimal) => {
         imagenAnimal.addEventListener("click", () =>{
             modal.innerHTML= `
             <img src="${imagenAnimal.src}" class="card-img-top mb-3">
            <h5 class= "text-center text-light">${imagenAnimal.dataset.edad}</h5>
            <h5 class= "text-center text-light">Comentarios</h5>
            <p class= "text-center text-light">${imagenAnimal.dataset.comentarios}</p>
             `
         })
     })
     const sonidoAnimales = document.querySelectorAll('#botonSonido img')
     sonidoAnimales.forEach((sonidoAnimal) => {
         sonidoAnimal.addEventListener("click", () => {
             const audio = new Audio(`${sonidoAnimal.dataset.sonido}`)
             audio.play()
         })
     })

 }

 const limpiezaFormulario = () => {
     const formDesplegable = document.querySelectorAll('.form-group select')
     formDesplegable.forEach((despliegue) => despliegue.selectedIndex = '0')
    const formTexto = document.querySelector('.form-group textarea') 
    formTexto.value = ''
    const formImagen = document.getElementById('preview')
    formImagen.style.backgroundImage = `${url}./assets/imgs/lion.svg`
 }



 export {instanciaAnimal, registroAnimal, limpiezaFormulario}





























/*let animales = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {

    let animal = document.getElementById("animal");
    let edad = document.getElementById("edad");
    let comentarios = document.getElementById("comentarios")
    let previewElement = document.getElementById("preview");
    //let imagenSrcBg = previewElement.style.backgroundImage;
    //let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);
    

    let nuevoAnimal;

    if (animal.value == "Leon") {
        nuevoAnimal = new Leon(
            edad.value,
            comentarios.value,
            animal.value);
    } else if (animal.value == "Humano") {
        nuevoParticipante = new Humano(edad.value,comentarios.value,animal.value);
    }

    if(raza.value && nombre.value && ki.value && imagenSrcBg){
    participantes.push(nuevoParticipante);
    nombre.selectedIndex = 0;
    raza.selectedIndex = 0;
    previewElement.style.backgroundImage = "none";
    imagenSrcBg = previewElement.style.backgroundColor = "#f0f0f0";
    ki.value = "";
    reloadTable();
    } else {
        alert("Faltan datos por llenar");
    }
})*/