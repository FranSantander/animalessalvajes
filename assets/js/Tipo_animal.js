import Especies from "./Especies.js"

//Clases Hijas y sonido
class Leon extends Especies {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    Rugir() {
        this.sonido()
    }
}

class Lobo extends Especies {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    Aullar() {
        this.sonido()
    }
}

class Oso extends Especies {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    Gruñir() {
        this.sonido()
    }
}
class Serpiente extends Especies {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    Sisear() {
        this.sonido()
    }
}
class Aguila extends Especies {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    Chillar() {
        this.sonido()
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }
