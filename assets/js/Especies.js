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
        this.setComentario = (nuevo_comentario) => _comentario = nuevo_comentario
        this.getSonido = () => _sonido;

    }

    //Métodos get y set
    get nombre() {
        return this.getNombre();
    }
    get edad() {
        return this.getEdad();
    }
    get img() {
        return this.getImg();
    }
    get comentario() {
        return this.getComentario();
    }
    get sonido() {
        return this.getSonido();
    }
    set comentario(nuevo_comentario) {
        this.setComentario(nuevo_comentario)
    }

}

 