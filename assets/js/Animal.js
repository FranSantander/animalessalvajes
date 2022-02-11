//import { instanciaAnimal, registroAnimal, limpiezaFormulario } from "./index.js"

export const animalitos = (() => {

    try {
        const getData = async () => {
            const url = 'http://localhost:5501/animales.json';
            //console.log(url)    
            const animales = await fetch(url);
            const resultados = await animales.json();
            return resultados;
        }
        return {
            mostrar: getData()
        }
    } catch (error) {
        alert(error)
    }

})();
