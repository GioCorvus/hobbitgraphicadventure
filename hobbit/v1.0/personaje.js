export class Personaje{

    #nombre = null
    #clase= null

    constructor(nombre,clase = null){
        this.#nombre= nombre
        this.#clase = clase
      }

    hablar(texto)
    {
        let textoV2="<strong>"+this.#nombre+"<strong/>"+": "+texto+"<br>"
        document.getElementById("dialog-text").innerHTML += textoV2
    }

}