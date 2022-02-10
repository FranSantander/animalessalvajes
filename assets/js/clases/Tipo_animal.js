import Especies from "./Especies.js"

class Leon extends Especies{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    Rugir(){
        const audio = new Audio(`${this.Sonido()}`)
        audio.play()
    }
}

class Lobo extends Especies{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    Aullar(){
        const audio = new Audio(`${this.Sonido()}`)
        audio.play()
    }
}
class Oso extends Especies{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    Gruñir(){
        const audio = new Audio(`${this.Sonido()}`)
        audio.play()
    }
}
class Serpiente extends Especies{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    Sisear(){
        const audio = new Audio(`${this.Sonido()}`)
        audio.play()
    }
}
class Aguila extends Especies{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    Chillar(){
        const audio = new Audio(`${this.Sonido()}`)
        audio.play()
    }
}

export {Leon, Lobo, Oso, Serpiente, Aguila}
