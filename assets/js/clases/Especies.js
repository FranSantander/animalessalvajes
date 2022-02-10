//Función constructora 
export default class Especies {
    constructor(nombre, edad, img, comentario, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentario = comentario;
        let _sonido = sonido

        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;
        this.getImg = () => _img;
        this.getComentario = () => _comentario;
        this.getSonido = () => _sonido;

    }

    //Métodos get y set
    get Nombre() {
        return this.getNombre
    }
    get Edad() {
        return this.getEdad
    }
    get Img() {
        return this.getImg
    }
    get Comentario() {
        return this.getComentario
    }
    get Sonido() {
        return this.getSonido
    }
    set Comentario(nuevo_comentario) {
        comentario = nuevo_comentario
    }

}

 