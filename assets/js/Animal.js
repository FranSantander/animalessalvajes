let animal = (async () => {
    const url = "./animales.json";

    const resultados =  await fetch(url);
    const data = await resultados.json();
    return data
   
})();
 
export default animal;





